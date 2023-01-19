/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoIosClose } from "react-icons/io";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  addAllSpecialization,
  selectSpecializations,
} from "../../../../GlobalData/Basic Plugins/SpecializationSlice";
import { useTranslation } from "react-i18next";

export default function EditSpecialization({ id, open, setOpen }) {
  const cancelButtonRef = useRef(null);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const SpecializationsSelector = useSelector(selectSpecializations);

  const [editedName, setEditedName] = useState("");

  useEffect(() => {
    setEditedName(
      SpecializationsSelector
        ? SpecializationsSelector[
            SpecializationsSelector?.findIndex((unitItem) => unitItem.id === id)
          ]?.name
        : ""
    );
  }, [id]);

  function close() {
    setEditedName(
      SpecializationsSelector
        ? SpecializationsSelector[
            SpecializationsSelector?.findIndex((unitItem) => unitItem.id === id)
          ]?.name
        : ""
    );
    setOpen(false);
  }
  const GetSpecializations = async () => {
    await axios
      .get(`lab-scope/specializations`)
      .then((response) => {
        dispatch(addAllSpecialization(response.data));
      })
      .catch((err) => {
        console.log("data");
      });
  };

  const Edit = async () => {
    await axios
      .post(`lab-scope/specialization-update/${id}`, {
        name: editedName,
      })
      .then((response) => {
        GetSpecializations();
        setError("");
        setOpen(false);
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  };

  const handleChangeName = (e) => {
    setEditedName(e.target.value);
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
                <Dialog.Panel className="relative px-10 pb-8 bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-2 sm:max-w-xl sm:w-full ">
                  <div className="bg-white ">
                    <div className="w-full flex  h-full items-center mt-5">
                      <p className="  justify-center font-Poppins-SemiBold flex flex-grow text-lg ml-10">
                        {t("Edit Specialization")}
                      </p>
                      <IoIosClose
                        className=" text-4xl  text-black border-[1px] rounded-full cursor-pointer bg-[#E4E7EC] "
                        onClick={() => close()}
                      />
                    </div>

                    <div className="flex flex-col space-y-5 w-full m-auto mt-10">
                      <div className={`space-y-5 flex-col `}>
                        <div className="w-full">
                          <div className="w-full break-words border-[#E4E7EC] h-fit bg-[#F9FAFF] flex space-x-2 items-center py-4 px-4    relative m-auto border-[1px] rounded-xl ">
                            <input
                              id="EditSpecialization"
                              onChange={handleChangeName}
                              value={editedName}
                              type="text"
                              className="w-full bg-[#F9FAFF] font-Poppins-Medium text-xs placeholder:text-[#98A2B3] outline-0 ring-0"
                            />
                          </div>
                          <span id="" className=" text-sm text-red-600 ">
                            {error}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white  py-3  flex sm:flex-row-reverse justify-between mt-10">
                    <button
                      type="button"
                      className="flex flex-grow font-medium text-sm py-3 bg-[#B7C835] justify-center rounded-xl text-white"
                      onClick={() => Edit()}
                    >
                      {t("Edit Specialization")}
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
