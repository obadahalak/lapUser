/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoIosClose } from "react-icons/io";
import { IoCalendarOutline } from "react-icons/io5";

import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { t } from "i18next";
import {
  addAllSupplier,
  selectSuppliers,
} from "../../GlobalData/Suppliers/getSuppliersSlice";
import axios from "axios";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";

export default function EditSupplier({ id, open, setOpen }) {
  const cancelButtonRef = useRef(null);
  const [AddedDate, setAddedDate] = useState(new Date());
  const SupplierSelector = useSelector(selectSuppliers);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    scientific_office_name: "",
    phone: "",
    address: "",
    maintain_phone: "",
    address: "",
  });
  const [error, setError] = useState({
    scientific_office_name: "",
    added_date: "",
    phone: "",
    maintain_phone: "",
    address: "",
  });
  const getSuppliers = async (page) => {
    await axios.get(`lab-scope/suppliers?page=${page}`).then((response) => {
      console.log(response.data, "hi");
      dispatch(addAllSupplier(response.data));
    });
  };
  const AddedInput = React.forwardRef((props, ref) => {
    return (
      <div
        onClick={props.onClick}
        className=" p-2  justify-between    outline-0  border-[#E4E7EC] w-full h-fit bg-[#F9FAFF] flex space-x-2 items-center py-[1rem] px-4  relative  border-[1px] rounded-xl "
      >
        <label className="text-[#98A2B3] text-xs mr-10 font-Poppins-Regular">
          {t("Added Date")}
        </label>
        <div className=" flex items-center">
          <label
            onClick={props.onClick}
            ref={ref}
            className="text-black  text-xs font-Poppins-Regular"
          >
            {props.value || props.placeholder}
          </label>
          <IoCalendarOutline
            onClick={props.onClick}
            className="ml-5 text-[#98A2B3]"
          />
        </div>
      </div>
    );
  });

  useEffect(() => {
    setAddedDate(
      new Date(
        SupplierSelector.data &&
          SupplierSelector.data[
            SupplierSelector.data.findIndex((Item) => Item.id === id)
          ]?.added_date
      )
    );
    setFormData({
      scientific_office_name:
        SupplierSelector.data &&
        SupplierSelector.data[
          SupplierSelector.data.findIndex((Item) => Item.id === id)
        ]?.scientific_office_name,
      phone:
        SupplierSelector.data &&
        SupplierSelector.data[
          SupplierSelector.data.findIndex((Item) => Item.id === id)
        ]?.phone,
      address:
        SupplierSelector.data &&
        SupplierSelector.data[
          SupplierSelector.data.findIndex((Item) => Item.id === id)
        ]?.address,
      maintain_phone:
        SupplierSelector.data &&
        SupplierSelector.data[
          SupplierSelector.data.findIndex((Item) => Item.id === id)
        ]?.maintain_phone,
      address:
        SupplierSelector.data &&
        SupplierSelector.data[
          SupplierSelector.data.findIndex((Item) => Item.id === id)
        ]?.address,
    });
  }, [id]);

  function close() {
    setFormData({
      scientific_office_name:
        SupplierSelector.data &&
        SupplierSelector.data[
          SupplierSelector.data.findIndex((Item) => Item.id === id)
        ].scientific_office_name,
      phone:
        SupplierSelector.data &&
        SupplierSelector.data[
          SupplierSelector.data.findIndex((Item) => Item.id === id)
        ].phone,
      address:
        SupplierSelector.data &&
        SupplierSelector.data[
          SupplierSelector.data.findIndex((Item) => Item.id === id)
        ].address,
      maintain_phone:
        SupplierSelector.data &&
        SupplierSelector.data[
          SupplierSelector.data.findIndex((Item) => Item.id === id)
        ].maintain_phone,
      address:
        SupplierSelector.data &&
        SupplierSelector.data[
          SupplierSelector.data.findIndex((Item) => Item.id === id)
        ].address,
    });
    setOpen(false);
  }

  const Edit = async () => {
    await axios
      .post(`lab-scope/supplier-update/${id}`, {
        scientific_office_name: formData.scientific_office_name,
        phone: formData.phone,
        added_date: moment(`${AddedDate}`).format("YYYY-MM-DD"),
        address: formData.address,
        maintain_phone: formData.maintain_phone,
      })
      .then((response) => {
        setError({
          scientific_office_name: "",
          added_date: "",
          phone: "",
          maintain_phone: "",
          address: "",
        });
        getSuppliers(1);
        setOpen(false);
      })
      .catch((err) => {
        setError({
          scientific_office_name:
            err.response.data.errors.scientific_office_name[0],
          phone: err.response.data.errors.phone[0],
          maintain_phone: err.response.data.errors.maintain_phone[0],
          address: err.response.data.errors.address[0],
        });
      });
  };

  const handleChangeName = (e) => {
    setFormData({
      ...formData,
      scientific_office_name: e.target.value,
    });
  };

  const handleChangeDate = (e) => {
    setAddedDate(e);
    // setFormData({
    //   ...formData,
    //   added_date: moment(`${e}`).format("YYYY-MM-DD"),
    // });
  };

  const handleChangePhone = (e) => {
    setFormData({
      ...formData,
      phone: e.target.value,
    });
  };

  const handleChangePhoneMaaintain = (e) => {
    setFormData({
      ...formData,
      maintain_phone: e.target.value,
    });
  };

  const handleChangeAddress = (e) => {
    setFormData({
      ...formData,
      address: e.target.value,
    });
  };
  return (
    <div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 "
          initialFocus={cancelButtonRef}
          onClose={() => close()}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed z-10 inset-0 overflow-y-auto ">
            <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0 ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative px-10 pb-8 bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-2 sm:max-w-2xl sm:w-full ">
                  <div className="bg-white ">
                    <div className="w-full flex  h-full items-center mt-5">
                      <p className="  justify-center font-Poppins-SemiBold flex flex-grow text-2xl ml-10">
                        {t("Edit Supplier")}
                      </p>
                      <IoIosClose
                        className=" text-4xl  text-black border-[1px] rounded-full cursor-pointer bg-[#E4E7EC] "
                        onClick={() => close()}
                      />
                    </div>

                    <div className="flex flex-col space-y-5 w-full m-auto mt-10">
                      <div className={` gap-5 grid grid-cols-2 `}>
                        <div className="w-full">
                          <div className="w-full break-words border-[#E4E7EC] h-fit bg-[#F9FAFF] flex space-x-2 items-center py-4 px-4    relative m-auto border-[1px] rounded-xl ">
                            <input
                              name="ScientificOfficeName"
                              value={formData.scientific_office_name}
                              onChange={handleChangeName}
                              placeholder={t("Scientific office name")}
                              type="text"
                              className="w-full bg-[#F9FAFF] font-Poppins-Regular text-xs  outline-0 ring-0"
                            />
                          </div>
                          <span className="text-sm text-red-600">
                            {error.scientific_office_name}
                          </span>
                        </div>
                        <div className="w-full">
                          <div>
                            <ReactDatePicker
                              onChange={handleChangeDate}
                              id="date"
                              dateFormat="yyyy/MM/dd"
                              className="w-fit "
                              customInput={<AddedInput />}
                              selected={AddedDate}
                            />
                          </div>
                          <span className="text-sm text-red-600">
                            {error.added_date}
                          </span>
                        </div>
                        <div className="w-full">
                          <div className="w-full break-words border-[#E4E7EC] h-fit bg-[#F9FAFF] flex space-x-2 items-center py-4 px-4    relative m-auto border-[1px] rounded-xl ">
                            <input
                              value={formData.phone}
                              name="PhoneNumber"
                              onChange={handleChangePhone}
                              placeholder={t("Phone number")}
                              type="tel"
                              className="w-full bg-[#F9FAFF] font-Poppins-Regular text-xs  outline-0 ring-0"
                            />
                          </div>
                          <span className="text-sm text-red-600">
                            {error.phone}
                          </span>
                        </div>
                        <div className="w-full">
                          <div className="w-full break-words border-[#E4E7EC] h-fit bg-[#F9FAFF] flex space-x-2 items-center py-4 px-4    relative m-auto border-[1px] rounded-xl ">
                            <input
                              value={formData.maintain_phone}
                              onChange={handleChangePhoneMaaintain}
                              name="MaintenanceEngineerMobile"
                              placeholder={t("Maintenance engineer Mobile")}
                              type="tel"
                              className="w-full bg-[#F9FAFF] font-Poppins-Regular text-xs  outline-0 ring-0"
                            />
                          </div>
                          <span className="text-sm text-red-600">
                            {error.maintain_phone}
                          </span>
                        </div>
                        <div className="w-full col-start-1 col-end-3">
                          <div className="w-full break-words border-[#E4E7EC] h-fit bg-[#F9FAFF] flex space-x-2 items-center py-4 px-4    relative m-auto border-[1px] rounded-xl ">
                            <input
                              value={formData.address}
                              onChange={handleChangeAddress}
                              name="Address"
                              placeholder={t("Address")}
                              type="text"
                              className="w-full bg-[#F9FAFF] font-Poppins-Regular text-xs  outline-0 ring-0"
                            />
                          </div>
                          <span className="text-sm text-red-600">
                            {error.address}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white  py-3  flex sm:flex-row-reverse justify-between mt-10">
                    <button
                      onClick={Edit}
                      type="button"
                      className="flex flex-grow py-2 bg-[#B7C835] justify-center rounded-xl text-white"
                    >
                      {t("Edit Supplier")}
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
