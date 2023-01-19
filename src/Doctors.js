import React, { useEffect, useState } from "react";
import SideBar from "./components/SideBar";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";

import Datepicker from "react-tailwindcss-datepicker";
import AddDoctor from "./components/Doctors/AddDoctor";
import DoctorPangration from "./components/Doctors/DoctorPangration";
import { Link } from "react-router-dom";
import { VscListFlat } from "react-icons/vsc";

import Header from "./components/Header";
import { useTranslation } from "react-i18next";
import { addAllDoctor, selectDoctors } from "./GlobalData/DoctorsSlice";
import { useDispatch, useSelector } from "react-redux";
import EditDoctor from "./components/Doctors/EditDoctor";
import DeleteDoctor from "./components/Doctors/DeleteDoctor";
import { TiEdit } from "react-icons/ti";
import { IoTrashOutline } from "react-icons/io5";
import axios from "axios";
import Pagination from "react-js-pagination";

const Doctor = [
  {
    id: 1,
    name: "Ali Abu Samra",
    email: "des.aliabusamra@gmail.com",
    DoctorAddress: "Address here Address here Address here",
    phone: "0598276050",
    DoctorRatio: "99%",
  },
  {
    id: 1,
    name: "Ali Abu Samra",
    email: "des.aliabusamra@gmail.com",
    DoctorAddress: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    phone: "0598276050",
    DoctorRatio: "99%",
  },
  {
    id: 1,
    name: "Ali Abu Samra",
    email: "des.aliabusamra@gmail.com",
    DoctorAddress: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    phone: "0598276050",
    DoctorRatio: "99%",
  },
  {
    id: 1,
    name: "Ali Abu Samra",
    email: "des.aliabusamra@gmail.com",
    DoctorAddress: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    phone: "0598276050",
    DoctorRatio: "99%",
  },
  {
    id: 1,
    name: "Ali Abu Samra",
    email: "des.aliabusamra@gmail.com",
    DoctorAddress: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    phone: "0598276050",
    DoctorRatio: "99%",
  },
  {
    id: 1,
    name: "Ali Abu Samra",
    email: "des.aliabusamra@gmail.com",
    DoctorAddress: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    phone: "0598276050",
    DoctorRatio: "99%",
  },
  {
    id: 1,
    name: "Ali Abu Samra",
    email: "des.aliabusamra@gmail.com",
    DoctorAddress: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    phone: "0598276050",
    DoctorRatio: "99%",
  },
  {
    id: 1,
    name: "Ali Abu Samra",
    email: "des.aliabusamra@gmail.com",
    DoctorAddress: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    phone: "0598276050",
    DoctorRatio: "99%",
  },
  {
    id: 1,
    name: "Ali Abu Samra",
    email: "des.aliabusamra@gmail.com",
    DoctorAddress: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    phone: "0598276050",
    DoctorRatio: "99%",
  },
  {
    id: 1,
    name: "Ali Abu Samra",
    email: "des.aliabusamra@gmail.com",
    DoctorAddress: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    phone: "0598276050",
    DoctorRatio: "99%",
  },
  {
    id: 1,
    name: "Ali Abu Samra",
    email: "des.aliabusamra@gmail.com",
    DoctorAddress: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    phone: "0598276050",
    DoctorRatio: "99%",
  },
  {
    id: 1,
    name: "Ali Abu Samra",
    email: "des.aliabusamra@gmail.com",
    DoctorAddress: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    phone: "0598276050",
    DoctorRatio: "99%",
  },
  {
    id: 1,
    name: "Ali Abu Samra",
    email: "des.aliabusamra@gmail.com",
    DoctorAddress: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    phone: "0598276050",
    DoctorRatio: "99%",
  },
  {
    id: 1,
    name: "Ali Abu Samra",
    email: "des.aliabusamra@gmail.com",
    DoctorAddress: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    phone: "0598276050",
    DoctorRatio: "99%",
  },
];

function Doctors() {
  const { t, i18n } = useTranslation();

  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const [OpenAddDoctors, setOpenAddDoctors] = useState(false);

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  const DoctorAdd = () => {
    setOpenAddDoctors(true);
  };

  useEffect(() => {
    document
      .getElementById("DatePickerHome")
      .children[0].children[0].classList.remove(
        "dark:bg-slate-800",
        "dark:text-white/80",
        "dark:border-slate-600"
      );
    document
      .getElementById("DatePickerHome")
      .children[0].children[2].children[0].classList.remove(
        "dark:bg-slate-800",
        "dark:border-slate-600"
      );
    document
      .getElementById("DatePickerHome")
      .children[0].children[2].children[1].classList.remove(
        "dark:text-white",
        "dark:border-slate-600"
      );
    // document.getElementById("DatePickerHome").children[0].children[2]
    // .children[1].children[0].children[0].children
    document
      .getElementById("DatePickerHome")
      .children[0].children[2].children[1].children[0].children[0].children[0].children[0].children[0].children[0].classList.remove(
        "dark:text-white/70",
        "dark:hover:bg-white/10",
        "dark:focus:bg-white/10"
      );
    document
      .getElementById("DatePickerHome")
      .children[0].children[2].children[1].children[0].children[0].children[0].children[0].children[1].children[0].children[0].classList.remove(
        "dark:text-white/70",
        "dark:hover:bg-white/10",
        "dark:focus:bg-white/10"
      );
    document
      .getElementById("DatePickerHome")
      .children[0].children[2].children[1].children[0].children[0].children[0].children[0].children[1].children[1].children[0].classList.remove(
        "dark:text-white/70",
        "dark:hover:bg-white/10",
        "dark:focus:bg-white/10"
      );
    document
      .getElementById("DatePickerHome")
      .children[0].children[2].children[1].children[0].children[0].children[0].children[0].children[2].children[0].classList.remove(
        "dark:text-white/70",
        "dark:hover:bg-white/10",
        "dark:focus:bg-white/10"
      );
    document
      .getElementById("DatePickerHome")
      .children[0].children[2].children[1].children[0].children[0].children[0].children[0].classList.remove(
        "dark:border-gray-700"
      );
    document
      .getElementById("DatePickerHome")
      .children[0].children[2].children[1].children[0].children[0].children[0].children[1].children[0].classList.remove(
        "dark:border-gray-700"
      );
    document
      .getElementById("DatePickerHome")
      .children[0].children[2].children[1].classList.remove(
        "dark:bg-slate-800"
      );

    removeTheDark();
    document
      .getElementById("DatePickerHome")
      .children[0].children[2].children[1].children[0].children[0].children[2].children[0].classList.remove(
        "dark:border-gray-700"
      );

    document
      .getElementById("DatePickerHome")
      .children[0].children[2].children[1].children[0].children[0].children[2].children[0].children[0].children[0].classList.remove(
        "dark:text-white/70",
        "dark:hover:bg-white/10",
        "dark:focus:bg-white/10"
      );
    document
      .getElementById("DatePickerHome")
      .children[0].children[2].children[1].children[0].children[0].children[2].children[0].children[1].children[0].children[0].classList.remove(
        "dark:text-white/70",
        "dark:hover:bg-white/10",
        "dark:focus:bg-white/10"
      );
    document
      .getElementById("DatePickerHome")
      .children[0].children[2].children[1].children[0].children[0].children[2].children[0].children[1].children[1].children[0].classList.remove(
        "dark:text-white/70",
        "dark:hover:bg-white/10",
        "dark:focus:bg-white/10"
      );
    document
      .getElementById("DatePickerHome")
      .children[0].children[2].children[1].children[0].children[0].children[2].children[0].children[2].children[0].classList.remove(
        "dark:text-white/70",
        "dark:hover:bg-white/10",
        "dark:focus:bg-white/10"
      );
  }, []);

  const removeTheDark = () => {
    let numbers =
      document.getElementById("DatePickerHome").children[0].children[2]
        .children[1].children[0].children[0].children[0].children[1].children[1]
        .children;
    for (let i = 0; i < numbers.length; i++) {
      numbers[i].classList.remove("dark:bg-white/10");
    }
    let numbers2 =
      document.getElementById("DatePickerHome").children[0].children[2]
        .children[1].children[0].children[0].children[2].children[1].children[1]
        .children;
    for (let i = 0; i < numbers2.length; i++) {
      numbers2[i].classList.remove("dark:bg-white/10");
    }
  };
  const [page, setPage] = useState(1);
  const [OpenEditDoctor, setOpenEditDoctor] = useState(false);
  const [OpenDeleteDoctor, setOpenDeleteDoctor] = useState(false);
  const [ID, setId] = useState();
  const DoctorsSelector = useSelector(selectDoctors);
  const dispatch = useDispatch();
  const getDoctors = async () => {
    await axios.get(`lab-scope/myDoctors`).then((response) => {
      console.log(response.data, "hi");
      dispatch(addAllDoctor(response.data));
    });
  };
  useEffect(() => {
    getDoctors();
  }, []);

  const Edit = (id) => {
    setId(id);
    setOpenEditDoctor(true);
  };

  const Remove = (id) => {
    setId(id);
    setOpenDeleteDoctor(true);
  };
  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
    getDoctors(pageNumber);
  };

  const SortChange = (e) => {
    if (e.target.value === "A-Z") {
      if (DoctorsSelector) {
        console.log(DoctorsSelector.data);
        let arrayForSort = [...DoctorsSelector.data];
        arrayForSort.reverse();
        let Data = { data: arrayForSort };
        dispatch(addAllDoctor(Data));
      }
    } else if (e.target.value === "Z-A") {
      console.log(DoctorsSelector.data);
      let arrayForSort = [...DoctorsSelector.data];
      arrayForSort.reverse();
      let Data = { data: arrayForSort };
      dispatch(addAllDoctor(Data));
    }
  };
  return (
    <div className="w-full h-full pr-5 p-5">
      <AddDoctor
        page={page}
        open={OpenAddDoctors}
        setOpen={setOpenAddDoctors}
      />
      <EditDoctor id={ID} open={OpenEditDoctor} setOpen={setOpenEditDoctor} />
      <DeleteDoctor
        id={ID}
        open={OpenDeleteDoctor}
        setOpen={setOpenDeleteDoctor}
      />
      <div className="w-full flex ">
        <Header />
      </div>
      <div className="flex ">
        <SideBar page="Doctors" />
        <div className="w-full h-full lg:ml-8 mt-10">
          <div className="flex w-full flex-col md:flex-row justify-between">
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-5 lg:gap-0 w-full space-x-2">
              <div className="w-fit pr-2 bg-white lg:col-start-1 lg:col-end-2 rounded-lg flex items-center mr-5">
                <select
                  onChange={SortChange}
                  className=" w-fit  rounded-lg font-Poppins-Regular  text-base outline-none px-4 py-2 cursor-pointer"
                >
                  <option value="" selected disabled hidden>
                    {t("Sort by")}
                  </option>
                  <option value="A-Z">A-Z</option>
                  <option value="Z-A">Z-A</option>
                </select>
              </div>
              <div className="w-full flex flex-col md:flex-row space-y-2 md:space-y-0 lg:col-start-2 lg:col-end-5 md:space-x-2">
                <div className="flex w-[20rem] lg:w-[100%] ">
                  <div
                    id="DatePickerHome"
                    className="w-full border-2 rounded-xl"
                  >
                    <Datepicker value={value} onChange={handleValueChange} />
                  </div>
                </div>
                <div className="w-full flex space-x-2">
                  <div className="bg-[#B7C835] w-fit flex items-center px-4 py-2 lg:py-0 rounded-xl cursor-pointer">
                    <p className="text-white">{t("Day")}</p>
                  </div>

                  <div className="bg-white w-fit flex items-center px-4 py-2 lg:py-0 rounded-xl cursor-pointer">
                    <p className="text-[#101828]">{t("Week")}</p>
                  </div>

                  <div className="bg-white w-fit flex items-center px-4 py-2 lg:py-0 rounded-xl cursor-pointer">
                    <p className="text-[#101828]">{t("Month")}</p>
                  </div>
                </div>
              </div>
              <div
                className="bg-[#0D2135] w-[10rem] lg:w-[93%] mt-5 lg:mt-0 py-2 lg:py-0 lg:col-start-5 lg:col-end-6   flex items-center justify-center  rounded-xl cursor-pointer "
                onClick={() => DoctorAdd()}
              >
                <p className="text-base flex  items-center justify-center text-white ">
                  <AiOutlinePlus className="mr-2 text-lg" />
                  {t("Add Doctor")}
                </p>
              </div>
            </div>
          </div>

          {/* Pangration */}
          <div className="overflow-x-scroll">
            <table className="w-full h-full mt-8 bg-white rounded-t-2xl ">
              <tr className="border-b-[1px] w-full">
                <td className="w-[5%] pr-2 lg:pr-0">
                  <input
                    type="checkbox"
                    className="text-[#E4E7EC] border-[#E4E7EC] border-[1px] ml-5 "
                  />
                </td>
                <td className="text-sm pr-24 lg:pr-0 text-[#98A2B3] font-Poppins-Regular py-2 pl-2">
                  {t("Doctor name")}
                </td>
                <td className="text-sm pr-20 lg:pr-0 text-[#98A2B3] font-Poppins-Regular py-2 w-[25%] ">
                  {t("Doctor's address")}
                </td>
                <td className="text-sm pr-20 lg:pr-0 text-[#98A2B3] font-Poppins-Regular py-2 ">
                  {t("Phone number")}
                </td>
                <td className="text-sm pr-20 lg:pr-0 text-[#98A2B3] font-Poppins-Regular py-2  ">
                  {t("Doctor ratio")}
                </td>
                <td className="text-sm pr-20 lg:pr-0 text-[#98A2B3] font-Poppins-Regular py-2 w-[9%]">
                  {t("Action")}
                </td>
              </tr>
              {console.log(DoctorsSelector)}
              {DoctorsSelector.data &&
                DoctorsSelector.data.map((item) => (
                  <tr className="border-b-[1px] ">
                    <td className="w-fit">
                      <input
                        type="checkbox"
                        className="text-[#E4E7EC] border-[#E4E7EC] border-[1px] ml-5 w-fit"
                      />
                    </td>
                    <td className="font-Poppins-Regular justify-center h-full text-black text-base font-semibold py-6 flex flex-col">
                      <p>{item.name}</p>
                      <p className="text-xs font-medium text-[#908F8F]">
                        {item.email}
                      </p>
                    </td>
                    <td className="font-Poppins-Regular text-black text-base font-semibold py-6 ">
                      {item.address}
                    </td>
                    <td className="font-Poppins-Regular text-black text-base font-semibold py-6 pl-2">
                      {item.phone}
                    </td>
                    <td className="font-Poppins-Regular text-black text-base font-semibold py-6">
                      {item.ratio}
                    </td>
                    <td>
                      <div className="flex space-x-2 py-4">
                        <TiEdit
                          className="text-2xl  opacity-50 cursor-pointer"
                          onClick={() => Edit(item.id)}
                        />

                        <IoTrashOutline
                          className="text-2xl text-[#F04438] cursor-pointer"
                          onClick={() => Remove(item.id)}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
            </table>
          </div>
          {/* <div className="flex justify-center ">
            <Pagination
              activePage={DoctorsSelector.current_page}
              itemsCountPerPage={DoctorsSelector.per_page}
              totalItemsCount={DoctorsSelector.total}
              pageRangeDisplayed={5}
              innerClass="flex justify-center space-x-5 mb-2 border-gray-400 w-full  bottom-0   items-center mt-10"
              itemClass=" bg-white  font-Poppins-Regular py-1 px-3 rounded-lg"
              activeClass="bg-[#B7C835] text-[#FFFFFF]"
              onChange={handlePageChange.bind(this)}
            />
          </div> */}
          {/* <DoctorPangration itemsPerPage={8} Data={Doctor} /> */}
        </div>
      </div>
    </div>
  );
}

export default Doctors;
