/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoIosClose } from "react-icons/io";
import axios from "axios";
import { t } from "i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  addAllSpecialization,
  removeFromSpecialization,
  selectSpecializations,
} from "../../../../GlobalData/Basic Plugins/SpecializationSlice";

export default function DeleteSpecialization({ open, setOpen, id }) {
  const cancelButtonRef = useRef(null);
  const dispatch = useDispatch();
  const SpecializationsSelector = useSelector(selectSpecializations);
  const [error, setError] = useState("");
  function close() {
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
  const remove = async () => {
    await axios
      .delete(`lab-scope/specialization-delete/${id}`)
      .then((response) => {
        GetSpecializations();
        setOpen(false);
      })
      .catch((err) => {});
    // let selected =
    //   SpecializationsSelector[
    //     SpecializationsSelector.findIndex((MethodItem) => MethodItem.id === id)
    //   ];
    // dispatch(removeFromSpecialization(selected));
    // setOpen(false);
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
                        {t("Delete Specialization")}
                      </p>
                      <IoIosClose
                        className=" text-4xl  text-black border-[1px] rounded-full cursor-pointer bg-[#E4E7EC] "
                        onClick={() => close()}
                      />
                    </div>

                    <div className="flex flex-col space-y-5 w-full m-auto mt-10">
                      <div className={`space-y-5 flex-col `}>
                        <div className="w-full ">
                          <p className="w-fit  font-Poppins-Medium text-sm ">
                            {t("Do you want to delete this Specialization?")} :{" "}
                            <span className="text-black ml-5">
                              {
                                SpecializationsSelector[
                                  SpecializationsSelector.findIndex(
                                    (MethodItem) => MethodItem.id === id
                                  )
                                ]?.name
                              }
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white  py-3  flex sm:flex-row-reverse justify-between mt-5">
                    <button
                      type="button"
                      className="flex  font-medium text-sm py-3 px-6 bg-red-600 justify-center rounded-xl text-white"
                      onClick={() => remove()}
                    >
                      {t("Yes")}
                    </button>
                    <button
                      type="button"
                      className="flex  font-medium text-sm py-3 px-6 bg-gray-500 justify-center rounded-xl text-white"
                      onClick={() => close()}
                    >
                      {t("No")}
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
