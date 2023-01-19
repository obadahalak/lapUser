import React, { useEffect, useState } from "react";
import SideBar from "./components/SideBar";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import { IoCalendarOutline, IoTrashOutline } from "react-icons/io5";

import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import PangrationSuppliersPaidBills from "./components/Suppliers/PangrationSuppliersPaidBills";
import PayBill from "./components/Suppliers/PayBill";
import { VscListFlat } from "react-icons/vsc";
import AddPaidBill from "./components/Suppliers/AddPaidBill";

import Header from "./components/Header";
import { useTranslation } from "react-i18next";
import {
  addAllPaidBill,
  selectPaidBills,
} from "./GlobalData/Suppliers/getSupplierPaidBillsSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Pagination from "react-js-pagination";
import { TiEdit } from "react-icons/ti";

const items = [
  {
    id: 1,
    name: "Office name",
    DateOfPurchase: "12/06/2020",
    InvoiceNumber: "#696589",
    Amout$BP: "2141242141",
    AmoutIBP: "36998745",
    Amout$AP: "32147896",
    AmoutIAP: "75315946",
  },
  {
    id: 1,
    name: "Office name",
    DateOfPurchase: "12/06/2020",
    InvoiceNumber: "#696589",
    Amout$BP: "2141242141",
    AmoutIBP: "36998745",
    Amout$AP: "32147896",
    AmoutIAP: "75315946",
  },
  {
    id: 1,
    name: "Office name",
    DateOfPurchase: "12/06/2020",
    InvoiceNumber: "#696589",
    Amout$BP: "2141242141",
    AmoutIBP: "36998745",
    Amout$AP: "32147896",
    AmoutIAP: "75315946",
  },
  {
    id: 1,
    name: "Office name",
    DateOfPurchase: "12/06/2020",
    InvoiceNumber: "#696589",
    Amout$BP: "2141242141",
    AmoutIBP: "36998745",
    Amout$AP: "32147896",
    AmoutIAP: "75315946",
  },
  {
    id: 1,
    name: "Office name",
    DateOfPurchase: "12/06/2020",
    InvoiceNumber: "#696589",
    Amout$BP: "2141242141",
    AmoutIBP: "36998745",
    Amout$AP: "32147896",
    AmoutIAP: "75315946",
  },
  {
    id: 1,
    name: "Office name",
    DateOfPurchase: "12/06/2020",
    InvoiceNumber: "#696589",
    Amout$BP: "2141242141",
    AmoutIBP: "36998745",
    Amout$AP: "32147896",
    AmoutIAP: "75315946",
  },
  {
    id: 1,
    name: "Office name",
    DateOfPurchase: "12/06/2020",
    InvoiceNumber: "#696589",
    Amout$BP: "2141242141",
    AmoutIBP: "36998745",
    Amout$AP: "32147896",
    AmoutIAP: "75315946",
  },
  {
    id: 1,
    name: "Office name",
    DateOfPurchase: "12/06/2020",
    InvoiceNumber: "#696589",
    Amout$BP: "2141242141",
    AmoutIBP: "36998745",
    Amout$AP: "32147896",
    AmoutIAP: "75315946",
  },
  {
    id: 1,
    name: "Office name",
    DateOfPurchase: "12/06/2020",
    InvoiceNumber: "#696589",
    Amout$BP: "2141242141",
    AmoutIBP: "36998745",
    Amout$AP: "32147896",
    AmoutIAP: "75315946",
  },
  {
    id: 1,
    name: "Office name",
    DateOfPurchase: "12/06/2020",
    InvoiceNumber: "#696589",
    Amout$BP: "2141242141",
    AmoutIBP: "36998745",
    Amout$AP: "32147896",
    AmoutIAP: "75315946",
  },
  {
    id: 1,
    name: "Office name",
    DateOfPurchase: "12/06/2020",
    InvoiceNumber: "#696589",
    Amout$BP: "2141242141",
    AmoutIBP: "36998745",
    Amout$AP: "32147896",
    AmoutIAP: "75315946",
  },
  {
    id: 1,
    name: "Office name",
    DateOfPurchase: "12/06/2020",
    InvoiceNumber: "#696589",
    Amout$BP: "2141242141",
    AmoutIBP: "36998745",
    Amout$AP: "32147896",
    AmoutIAP: "75315946",
  },
  {
    id: 1,
    name: "Office name",
    DateOfPurchase: "12/06/2020",
    InvoiceNumber: "#696589",
    Amout$BP: "2141242141",
    AmoutIBP: "36998745",
    Amout$AP: "32147896",
    AmoutIAP: "75315946",
  },
  {
    id: 1,
    name: "Office name",
    DateOfPurchase: "12/06/2020",
    InvoiceNumber: "#696589",
    Amout$BP: "2141242141",
    AmoutIBP: "36998745",
    Amout$AP: "32147896",
    AmoutIAP: "75315946",
  },
];

function SuppliersPaidBills() {
  const { t, i18n } = useTranslation();

  const [FromDate, setFromDate] = useState(new Date());
  const [ToDate, setToDate] = useState(new Date());
  const [OpenAddPaidBill, setOpenAddPaidBill] = useState(false);
  const dispatch = useDispatch();
  const PaidBillSelector = useSelector(selectPaidBills);

  const getPaidBills = async (page) => {
    await axios.get(`lab-scope/pays?page=${page}`).then((response) => {
      console.log(response.data, "hi");
      dispatch(addAllPaidBill(response.data));
    });
  };
  useEffect(() => {
    getPaidBills(1);
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
      <div className="flex p-2 bg-[#F9FAFF] rounded-xl justify-between items-center w-fit outline-0 border-2">
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

  const handlePageChange = (pageNumber) => {
    // console.log(`active page is ${pageNumber}`);
    // this.setState({ activePage: pageNumber });
    getPaidBills(pageNumber);
  };
  return (
    <div className="w-full h-full pr-5 p-5">
      <AddPaidBill open={OpenAddPaidBill} setOpen={setOpenAddPaidBill} />

      <div className="w-full flex ">
        <Header />
      </div>
      <div className="flex ">
        <SideBar page="Suppliers" />
        <div className="w-full h-full lg:ml-8 mt-10">
          <div className="flex w-full flex-col lg:flex-row justify-between">
            <div className="grid grid-cols-1 gap-2 md:grid-cols-1 lg:gap-0 lg:grid-cols-1 w-full space-x-2">
              <div className="w-full flex flex-col lg:flex-row">
                <div className="w-fit pr-2 bg-white rounded-lg flex items-center mr-5">
                  <select className=" w-fit  rounded-lg font-Poppins-Regular  text-base outline-none px-4 py-2 cursor-pointer">
                    <option value="" selected disabled hidden>
                      {t("Sort by")}
                    </option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                  </select>
                </div>
                <div className="w-full flex justify-start space-x-2 mt-5 lg:mt-0 md:col-start-2 md:col-end-4 lg:col-start-2 lg:col-end-5">
                  <Link
                    to="/Suppliers"
                    className="bg-white w-fit flex items-center px-4 py-2 lg:py-0 rounded-xl cursor-pointer"
                  >
                    <p className="text-[#101828] text-center">
                      {t("Scientific office names")}
                    </p>
                  </Link>

                  <Link
                    to="/Suppliers/OfficeBills"
                    className="bg-white w-fit flex items-center px-4 py-2 lg:py-0 rounded-xl cursor-pointer"
                  >
                    <p className="text-[#101828] text-center">
                      {t("Scientific office bills")}
                    </p>
                  </Link>

                  <Link
                    to="/Suppliers/PaidBills"
                    className="bg-[#B7C835] w-fit flex items-center px-4 py-2 lg:py-0 rounded-xl cursor-pointer"
                  >
                    <p className="text-white text-center">{t("Paid bills")}</p>
                  </Link>
                </div>
              </div>
              <div className="flex mt-5 flex-col md:flex-row  space-y-2 md:space-y-0  md:space-x-10">
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
          </div>
          {/* Pangration */}
          <div className=" overflow-x-scroll">
            <table className="w-full h-full mt-5 bg-white rounded-t-2xl ">
              <tr className="border-b-[1px] w-full">
                <td className="w-[4%]">
                  <input
                    type="checkbox"
                    className="text-[#E4E7EC] border-[#E4E7EC] border-[1px] ml-5 "
                  />
                </td>
                <td className="text-sm text-[#98A2B3] font-Poppins-Regular px-5 md:px-0  py-2 w-[10%]">
                  {t("Scientific office name")}
                </td>
                <td className="text-sm text-[#98A2B3] font-Poppins-Regular px-5 md:px-0  py-2 w-[10%] ">
                  {t("Date of purchase")}
                </td>
                <td className="text-sm text-[#98A2B3] font-Poppins-Regular px-5 md:px-0  py-2  w-[10%]">
                  {t("Invoice number")}
                </td>
                <td className="text-sm text-[#98A2B3] font-Poppins-Regular px-5 md:px-0  py-2 w-[10%] ">
                  {t("Amount $ before payment")}
                </td>
                <td className="text-sm text-[#98A2B3] font-Poppins-Regular  px-5 md:px-0 py-2 w-[10%]">
                  {t("Amount ID before payment")}
                </td>
                <td className="text-sm text-[#98A2B3] font-Poppins-Regular  px-5 md:px-0 py-2 w-[10%]">
                  {t("Amount $ after payment")}
                </td>
                <td className="text-sm text-[#98A2B3] font-Poppins-Regular  px-5 md:px-0 py-2 w-[10%]">
                  {t("Amount ID after payment")}
                </td>
                {/* <td className="text-sm text-[#98A2B3] font-Poppins-Regular px-5 md:px-0  py-2 w-[10%]">
                  {t("Action")}
                </td> */}
              </tr>
              {PaidBillSelector &&
                PaidBillSelector.map(
                  (supplier) =>
                    supplier.bills_pays &&
                    supplier.bills_pays.map(
                      (bill) =>
                        bill.pays &&
                        bill.pays.map((pay) => (
                          <tr className="border-b-[1px] ">
                            <td className="w-fit">
                              <input
                                type="checkbox"
                                className="text-[#E4E7EC] border-[#E4E7EC] border-[1px] ml-5 w-fit"
                              />
                            </td>
                            <td className="font-Poppins-Regular text-black text-base font-semibold py-6 ">
                              {supplier.scientific_office_name}
                            </td>
                            <td className="font-Poppins-Regular text-black text-base font-semibold py-6 ">
                              {bill.date_invoice}
                            </td>
                            <td className="font-Poppins-Regular text-black text-base font-semibold py-6 pl-2">
                              {bill.invoice_number}
                            </td>
                            <td className="font-Poppins-Regular text-black text-base font-semibold py-6">
                              {pay.Amount_$_before_payment}
                            </td>
                            <td className="font-Poppins-Regular text-black text-base font-semibold py-6">
                              {pay.Amount_ID_before_payment}
                            </td>
                            <td className="font-Poppins-Regular text-black text-base font-semibold py-6">
                              {pay.Amount_$_after_payment}
                            </td>
                            <td className="font-Poppins-Regular text-black text-base font-semibold py-6">
                              {pay.Amount_ID_after_payment}
                            </td>

                            {/* <td>
                          <div className="flex space-x-2 py-4">
                            <TiEdit className="text-2xl  opacity-50 cursor-pointer" />
                            <IoTrashOutline className="text-2xl text-[#F04438] cursor-pointer" />
                          </div>
                        </td> */}
                          </tr>
                        ))
                    )
                )}
            </table>
          </div>
          {/* <div className="flex justify-center ">
            <Pagination
              activePage={PaidBillSelector.current_page}
              itemsCountPerPage={PaidBillSelector.per_page}
              totalItemsCount={PaidBillSelector.total}
              pageRangeDisplayed={5}
              innerClass="flex justify-center space-x-5 mb-2 border-gray-400 w-full  bottom-0   items-center mt-10"
              itemClass=" bg-white  font-Poppins-Regular py-1 px-3 rounded-lg"
              activeClass="bg-[#B7C835] text-[#FFFFFF]"
              onChange={handlePageChange.bind(this)}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default SuppliersPaidBills;
