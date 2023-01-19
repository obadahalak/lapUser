import React, { useState, useEffect } from "react";
import axios from "axios";

import SideBar from "./components/SideBar";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";

import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import InSidePangration from "./components/Store/InSidePangration";
import AddProduct from "./components/Store/AddProduct";
import OutSidePangration from "./components/Store/OutSidePangration";
import { VscListFlat } from "react-icons/vsc";
import { Link } from "react-router-dom";

import { RiSearch2Line } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import Logo from "./Images/Logo.svg";
import UK from "./Images/UK.png";
import NotifContainer from "./components/Home/NotifContainer";

import SA from "./Images/SA.png";

import { useTranslation } from "react-i18next";
import Header from "./components/Header";

import {getProducts} from './api/StoreData';


// const products = [
//   {
//     id: 1,
//     name: "Product name",
//     Description: "Aliqua id fugiat nostrud irure ex duis ea quis id",
//     Quantity: "1000",
//     Company: "Company name",
//     Exp: "2022/01",
//     Model: "Model",
//     MeasuringUnit: "Measuring unit",
//   },
//   {
//     id: 1,
//     name: "Product name",
//     Description: "Aliqua id fugiat nostrud irure ex duis ea quis id",
//     Quantity: "1000",
//     Company: "Company name",
//     Exp: "2022/01",
//     Model: "Model",
//     MeasuringUnit: "Measuring unit",
//   },
//   {
//     id: 1,
//     name: "Product name",
//     Description: "Aliqua id fugiat nostrud irure ex duis ea quis id",
//     Quantity: "1000",
//     Company: "Company name",
//     Exp: "2022/01",
//     Model: "Model",
//     MeasuringUnit: "Measuring unit",
//   },
//   {
//     id: 1,
//     name: "Product name",
//     Description: "Aliqua id fugiat nostrud irure ex duis ea quis id",
//     Quantity: "1000",
//     Company: "Company name",
//     Exp: "2022/01",
//     Model: "Model",
//     MeasuringUnit: "Measuring unit",
//   },
//   {
//     id: 1,
//     name: "Product name",
//     Description: "Aliqua id fugiat nostrud irure ex duis ea quis id",
//     Quantity: "1000",
//     Company: "Company name",
//     Exp: "2022/01",
//     Model: "Model",
//     MeasuringUnit: "Measuring unit",
//   },
//   {
//     id: 1,
//     name: "Product name",
//     Description: "Aliqua id fugiat nostrud irure ex duis ea quis id",
//     Quantity: "1000",
//     Company: "Company name",
//     Exp: "2022/01",
//     Model: "Model",
//     MeasuringUnit: "Measuring unit",
//   },
//   {
//     id: 1,
//     name: "Product name",
//     Description: "Aliqua id fugiat nostrud irure ex duis ea quis id",
//     Quantity: "1000",
//     Company: "Company name",
//     Exp: "2022/01",
//     Model: "Model",
//     MeasuringUnit: "Measuring unit",
//   },
//   {
//     id: 1,
//     name: "Product name",
//     Description: "Aliqua id fugiat nostrud irure ex duis ea quis id",
//     Quantity: "1000",
//     Company: "Company name",
//     Exp: "2022/01",
//     Model: "Model",
//     MeasuringUnit: "Measuring unit",
//   },
//   {
//     id: 1,
//     name: "Product name",
//     Description: "Aliqua id fugiat nostrud irure ex duis ea quis id",
//     Quantity: "1000",
//     Company: "Company name",
//     Exp: "2022/01",
//     Model: "Model",
//     MeasuringUnit: "Measuring unit",
//   },
//   {
//     id: 1,
//     name: "Product name",
//     Description: "Aliqua id fugiat nostrud irure ex duis ea quis id",
//     Quantity: "1000",
//     Company: "Company name",
//     Exp: "2022/01",
//     Model: "Model",
//     MeasuringUnit: "Measuring unit",
//   },
//   {
//     id: 1,
//     name: "Product name",
//     Description: "Aliqua id fugiat nostrud irure ex duis ea quis id",
//     Quantity: "1000",
//     Company: "Company name",
//     Exp: "2022/01",
//     Model: "Model",
//     MeasuringUnit: "Measuring unit",
//   },
//   {
//     id: 1,
//     name: "Product name",
//     Description: "Aliqua id fugiat nostrud irure ex duis ea quis id",
//     Quantity: "1000",
//     Company: "Company name",
//     Exp: "2022/01",
//     Model: "Model",
//     MeasuringUnit: "Measuring unit",
//   },
//   {
//     id: 1,
//     name: "Product name",
//     Description: "Aliqua id fugiat nostrud irure ex duis ea quis id",
//     Quantity: "1000",
//     Company: "Company name",
//     Exp: "2022/01",
//     Model: "Model",
//     MeasuringUnit: "Measuring unit",
//   },
//   {
//     id: 1,
//     name: "Product name",
//     Description: "Aliqua id fugiat nostrud irure ex duis ea quis id",
//     Quantity: "1000",
//     Company: "Company name",
//     Exp: "2022/01",
//     Model: "Model",
//     MeasuringUnit: "Measuring unit",
//   },
//   {
//     id: 1,
//     name: "Product name",
//     Description: "Aliqua id fugiat nostrud irure ex duis ea quis id",
//     Quantity: "1000",
//     Company: "Company name",
//     Exp: "2022/01",
//     Model: "Model",
//     MeasuringUnit: "Measuring unit",
//   },
//   {
//     id: 1,
//     name: "Product name",
//     Description: "Aliqua id fugiat nostrud irure ex duis ea quis id",
//     Quantity: "1000",
//     Company: "Company name",
//     Exp: "2022/01",
//     Model: "Model",
//     MeasuringUnit: "Measuring unit",
//   },
// ];

function Store() {
  const { t, i18n } = useTranslation();

  const [section, setSection] = useState("Inside");
  const [OpenAddProduct, setOpenAddProduct] = useState(false);
  const [FromDate, setFromDate] = useState(new Date());
  const [ToDate, setToDate] = useState(new Date());

  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts(setProducts);
  }, []);

  const FromInput = React.forwardRef((props, ref) => {
    return (
      <div className="flex p-2 bg-[#F9FAFF] rounded-xl justify-between items-center w-fit outline-0 border-2">
        <label className="text-[#98A2B3] text-xs mr-20 font-Poppins-Regular">
          {t("From")}
        </label>
        <div className=" flex items-center">
          <label
            onClick={props.onClick}
            ref={ref}
            className="text-black font-Poppins-Regular"
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

  const ToInput = React.forwardRef((props, ref) => {
    return (
      <div className="flex p-2 rounded-xl bg-[#F9FAFF] justify-between items-center w-fit outline-0 border-2">
        <label className="text-[#98A2B3] text-xs mr-20 font-Poppins-Regular">
          {t("To")}
        </label>
        <div className=" flex items-center">
          <label
            onClick={props.onClick}
            ref={ref}
            className="text-black font-Poppins-Regular"
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

  const SectionInside = () => {
    setSection("Inside");
  };

  const SectionOutside = () => {
    setSection("Outside");
  };

  const ProductAdd = () => {
    setOpenAddProduct(true);
  };

  return (
    <div className="w-full h-full p-5 pr-5">
      <AddProduct open={OpenAddProduct} setOpen={setOpenAddProduct} />

      <div className="w-full flex ">
        <Header />
      </div>
      <div className="flex ">
        <SideBar page="Store" />
        <div className="w-full h-full lg:ml-8 mt-10">
          <div className="flex w-full flex-col lg:flex-row justify-evenly">
            <div className="flex w-full flex-col lg:flex-row space-x-2">
              <div className=" grid grid-cols-1 gap-3 lg:grid-cols-6 lg:gap-0  space-x-2">
                <div className="w-full flex space-x-2 lg:col-start-1 lg:col-end-2">
                  <div className="w-fit pr-2 bg-white rounded-lg flex items-center mr-2">
                    <select className=" w-fit  rounded-lg font-Poppins-Medium  text-base outline-none px-4 py-2 cursor-pointer">
                      <option value="" selected disabled hidden>
                        {t("Sort by")}
                      </option>
                      <option value="A-Z">A-Z</option>
                      <option value="Z-A">Z-A</option>
                    </select>
                  </div>
                </div>
                <div className="flex space-y-3 lg:space-y-0 lg:space-x-2 flex-col lg:flex-row lg:col-start-2 lg:col-end-4 ">
                  <div className="w-full flex space-x-2">
                    <div
                      className={`${
                        section === "Inside" ? "bg-[#B7C835] " : "bg-white"
                      } w-fit flex items-center px-4 rounded-xl py-2 lg:py-0 cursor-pointer`}
                      onClick={() => SectionInside()}
                    >
                      <p
                        className={`${
                          section === "Inside"
                            ? "text-white "
                            : "text-[#101828]"
                        }  text-sm font-Poppins-Regular`}
                      >
                        {t("Inside")}
                      </p>
                    </div>

                    <div
                      className={`${
                        section === "Outside" ? "bg-[#B7C835] " : "bg-white"
                      } bg-white w-fit flex items-center px-4 rounded-xl py-2 lg:py-0 cursor-pointer`}
                      onClick={() => SectionOutside()}
                    >
                      <p
                        className={`${
                          section === "Outside"
                            ? "text-white "
                            : "text-[#101828]"
                        }  text-sm font-Poppins-Regular`}
                      >
                        {t("OutSide")}
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
                    <div className="w-fit flex ">
                      <ReactDatePicker
                        id="date"
                        dateFormat="yyyy/MM/dd"
                        className=" "
                        customInput={<FromInput />}
                        selected={FromDate}
                        onChange={(date) => setFromDate(date)}
                      />
                    </div>
                    <div className="w-fit flex ">
                      <ReactDatePicker
                        id="date"
                        dateFormat="yyyy/MM/dd"
                        className=" "
                        customInput={<ToInput />}
                        selected={ToDate}
                        onChange={(date) => setToDate(date)}
                      />
                    </div>
                  </div>
                </div>

                <div
                  className={`${
                    section === "Outside" ? "hidden " : "block"
                  } bg-[#0D2135] w-fit lg:w-[90%] px-2 mt-5 lg:mt-0 py-2 lg:py-0  lg:col-start-6 lg:col-end-7   flex items-center justify-center  rounded-xl cursor-pointer `}
                  onClick={() => ProductAdd()}
                >
                  <p className="text-base flex items-center justify-center text-white ">
                    <AiOutlinePlus className="mr-2 text-lg font-Poppins-Medium" />
                    {t("Add Product")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pangration */}

          <InSidePangration
            section={section}
            itemsPerPage={8}
            Data={products}
          />
          <OutSidePangration
            section={section}
            itemsPerPage={8}
            Data={products}
          />
        </div>
      </div>
    </div>
  );
}

export default Store;
