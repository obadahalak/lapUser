/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoIosClose } from "react-icons/io";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  addAllTupe,
  selectTubes,
} from "../../../GlobalData/SystemDashBoard/TupeSlice";

export default function EditTupe({ open, setOpen, id, Content, setContent }) {
  const cancelButtonRef = useRef(null);
  const TupeSelector = useSelector(selectTubes);
  const dispatch = useDispatch();
  const [editedName, setEditedName] = useState("");

  useEffect(() => {
    setEditedName(
      TupeSelector
        ? TupeSelector[
            TupeSelector?.findIndex((unitItem) => unitItem.id === id)
          ]?.tupe
        : ""
    );
  }, [id]);

  function close() {
    setEditedName(
      TupeSelector
        ? TupeSelector[
            TupeSelector?.findIndex((unitItem) => unitItem.id === id)
          ]?.tupe
        : ""
    );
    setOpen(false);
  }
  const Edit = async () => {
    let selected =
      TupeSelector[TupeSelector.findIndex((tupeItem) => tupeItem.id === id)];
    let formdata = new FormData();
    formdata.append("id", selected.id);
    formdata.append("tupe", document.getElementById("tupeName").value);

    await axios
      .put(
        `/admin-scope/updateTupe?id=${formdata.get("id")}&tupe=${formdata.get(
          "tupe"
        )}`
      )
      .then((response) => {
        let content = TupeSelector.map((item) => {
          return item.id == id
            ? { id: id, tupe: document.getElementById("tupeName").value }
            : item;
        });
        dispatch(addAllTupe(content));
        setOpen(false);
      })
      .catch((error) => {
        if (error.response) {
          document.getElementById("messag").textContent =
            error.response.data.errors.tupe[0];
          console.log(error.response.data.errors.tupe[0]);
        }
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
                        Edit Tupe
                      </p>
                      <IoIosClose
                        className=" text-4xl  text-black border-[1px] rounded-full cursor-pointer bg-[#E4E7EC] "
                        onClick={() => close()}
                      />
                    </div>

                    <div className="flex flex-col space-y-5 w-full m-auto mt-10">
                      <div className={`space-y-5 flex-col `}>
                        <div className="w-full break-words border-[#E4E7EC] h-fit bg-[#F9FAFF] flex space-x-2 items-center py-4 px-4    relative m-auto border-[1px] rounded-xl ">
                          <input
                            id="tupeName"
                            onChange={handleChangeName}
                            value={editedName}
                            type="text"
                            className="w-full bg-[#F9FAFF] font-Poppins-Medium text-xs placeholder:text-[#98A2B3] outline-0 ring-0"
                          />
                        </div>
                      </div>
                      <p
                        id="messag"
                        className="text-center text-red-500 text-sm "
                      ></p>
                    </div>
                  </div>

                  <div className="bg-white  py-3  flex sm:flex-row-reverse justify-between mt-10">
                    <button
                      type="button"
                      className="flex flex-grow font-medium text-sm py-3 bg-[#B7C835] justify-center rounded-xl text-white"
                      onClick={() => Edit()}
                    >
                      Edit Tupe
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
