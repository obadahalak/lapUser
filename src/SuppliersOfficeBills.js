import React, { useEffect, useState } from "react";
import SideBar from "./components/SideBar";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import { IoCalendarOutline, IoTrashOutline } from "react-icons/io5";

import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import { VscListFlat } from "react-icons/vsc";
import PangrationSuppliersOfficeBill from "./components/Suppliers/PangrationSuppliersOfficeBill";
import EditOfficeBills from "./components/Suppliers/EditOfficeBills";
import DeleteOfficeBill from "./components/Suppliers/DeleteOfficeBill";

import { useTranslation } from "react-i18next";
import Header from "./components/Header";
import PayBill from "./components/Suppliers/PayBill";
import axios from "axios";
import {
  addAllSupplierBill,
  selectSupplierBills,
} from "./GlobalData/Suppliers/gatSupplierBillsSlice";
import { useDispatch, useSelector } from "react-redux";
import { RiSendPlaneLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import Pagination from "react-js-pagination";

const products = [
  {
    id: 1,
    name: "wewe",
    DateOfPurchase: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    InvoiceNumber: "2131242141",
    TotalPayment: "2141242141",
  },
  {
    id: 1,
    name: "wewe",
    DateOfPurchase: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    InvoiceNumber: "2131242141",
    TotalPayment: "2141242141",
  },
  {
    id: 1,
    name: "wewe",
    DateOfPurchase: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    InvoiceNumber: "2131242141",
    TotalPayment: "2141242141",
  },
  {
    id: 1,
    name: "wewe",
    DateOfPurchase: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    InvoiceNumber: "2131242141",
    TotalPayment: "2141242141",
  },
  {
    id: 1,
    name: "wewe",
    DateOfPurchase: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    InvoiceNumber: "2131242141",
    TotalPayment: "2141242141",
  },
  {
    id: 1,
    name: "wewe",
    DateOfPurchase: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    InvoiceNumber: "2131242141",
    TotalPayment: "2141242141",
  },
  {
    id: 1,
    name: "wewe",
    DateOfPurchase: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    InvoiceNumber: "2131242141",
    TotalPayment: "2141242141",
  },
  {
    id: 1,
    name: "wewe",
    DateOfPurchase: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    InvoiceNumber: "2131242141",
    TotalPayment: "2141242141",
  },
  {
    id: 1,
    name: "wewe",
    DateOfPurchase: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    InvoiceNumber: "2131242141",
    TotalPayment: "2141242141",
  },
  {
    id: 1,
    name: "wewe",
    DateOfPurchase: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    InvoiceNumber: "2131242141",
    TotalPayment: "2141242141",
  },
  {
    id: 1,
    name: "wewe",
    DateOfPurchase: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    InvoiceNumber: "2131242141",
    TotalPayment: "2141242141",
  },
];

function SuppliersOfficeBills() {
  const { t, i18n } = useTranslation();
  const SupplierBillSelector = useSelector(selectSupplierBills);
  const dispatch = useDispatch();
  const [FromDate, setFromDate] = useState(new Date());
  const [ToDate, setToDate] = useState(new Date());
  const [OpenDeleteOfficeBill, setOpenDeleteOfficeBill] = useState(false);
  const [OpenEditOfficeBill, setOpenEditOfficeBill] = useState(false);
  const [OpenPayBill, setPayBill] = useState(false);
  const [id, setId] = useState();
  const getSupplierBills = async (page) => {
    await axios.get(`lab-scope/bills?page=${page}`).then((response) => {
      console.log(response.data, "hi");
      dispatch(addAllSupplierBill(response.data));
      console.log(SupplierBillSelector);
    });
  };
  useEffect(() => {
    getSupplierBills(1);
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

  const DoPayBill = (id) => {
    setId(id);
    setPayBill(true);
  };

  const Edit = (id) => {
    setId(id);
    setOpenEditOfficeBill(true);
  };

  const Delete = (id) => {
    setId(id);
    setOpenDeleteOfficeBill(true);
  };

  const handlePageChange = (pageNumber) => {
    // console.log(`active page is ${pageNumber}`);
    // this.setState({ activePage: pageNumber });
    getSupplierBills(pageNumber);
  };

  const SortChange = (e) => {
   
    
  };
  return (
    <div className="w-full h-full p-5 pr-5">
      <PayBill id={id} open={OpenPayBill} setOpen={setPayBill} />

      <DeleteOfficeBill
        id={id}
        open={OpenDeleteOfficeBill}
        setOpen={setOpenDeleteOfficeBill}
      />
      <EditOfficeBills
        id={id}
        open={OpenEditOfficeBill}
        setOpen={setOpenEditOfficeBill}
      />
      <div className="w-full flex ">
        <Header />
      </div>
      <div className="flex ">
        <SideBar page="Suppliers" />
        <div className="w-full h-full lg:ml-8 mt-10">
          <div className="flex w-full flex-col lg:flex-row justify-between">
            <div className="grid grid-cols-1 gap-2 md:grid-cols-1 lg:gap-0 lg:grid-cols-1 w-full space-x-2">
              <div className="w-full flex flex-col lg:flex-row">
                <div className="w-fit pr-2 bg-white rounded-lg flex items-center ">
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
                <div className="lg:ml-4 mt-5 lg:mt-0 w-full flex space-x-2 md:col-start-2 md:col-end-4 lg:col-start-2 lg:col-end-5">
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
                    className=" bg-[#B7C835] w-fit flex items-center px-4 py-2 lg:py-0 rounded-xl cursor-pointer"
                  >
                    <p className=" text-white text-center">
                      {t("Scientific office bills")}
                    </p>
                  </Link>

                  <Link
                    to="/Suppliers/PaidBills"
                    className="bg-white w-fit flex items-center px-4 py-2 lg:py-0 rounded-xl cursor-pointer"
                  >
                    <p className="text-[#101828] text-center">
                      {t("Paid bills")}
                    </p>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col md:flex-row mt-5 space-y-2 md:space-y-0  md:space-x-10">
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
            <table className="w-full h-full mt-5 bg-white rounded-t-2xl">
              <tr className="border-b-[1px] w-full">
                <td className="w-fit">
                  <input
                    type="checkbox"
                    className="text-[#E4E7EC] border-[#E4E7EC] border-[1px] ml-5 "
                  />
                </td>
                <td className="text-sm text-[#98A2B3] font-Poppins-Regular py-2  ">
                  {t("Scientific office name")}
                </td>
                <td className="text-sm text-[#98A2B3] font-Poppins-Regular py-2 w-[18%] ">
                  {t("Date of Purchase")}
                </td>
                <td className="text-sm text-[#98A2B3] font-Poppins-Regular py-2 pl-2 ">
                  {t("Invoice Number")}
                </td>
                <td className="text-sm text-[#98A2B3] font-Poppins-Regular py-2 w-[18%] ">
                  {t("Total Id")}
                </td>

                <td className="text-sm text-[#98A2B3] font-Poppins-Regular py-2 w-[18%] ">
                  {t("Total Payment")}
                </td>
                <td className="text-sm text-[#98A2B3] font-Poppins-Regular py-2 w-[10%]">
                  {t("Action")}
                </td>
              </tr>

              {SupplierBillSelector.data &&
                SupplierBillSelector.data.map(
                  (supplier) =>
                    supplier.bills &&
                    supplier.bills.map((Bill) => (
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
                          {Bill.date_invoice}
                        </td>
                        <td className="font-Poppins-Regular text-black text-base font-semibold py-6 pl-2">
                          {Bill.invoice_number}
                        </td>
                        <td className="font-Poppins-Regular text-black text-base font-semibold py-6">
                          {Bill.total_ID}
                        </td>

                        <td className="font-Poppins-Regular text-black text-base font-semibold py-6">
                          {Bill.total_dolar}
                        </td>

                        <td>
                          <div className="flex space-x-2 py-4">
                            <RiSendPlaneLine
                              className="text-2xl text-black cursor-pointer"
                              onClick={() => DoPayBill(Bill.id)}
                            />
                            {/* <TiEdit
                              className="text-2xl  opacity-50 cursor-pointer"
                              onClick={() => Edit(Bill.id)}
                            />
                            <IoTrashOutline
                              className="text-2xl text-[#F04438] cursor-pointer"
                              onClick={() => Delete(Bill.id)}
                            /> */}
                          </div>
                        </td>
                      </tr>
                    ))
                )}
            </table>
          </div>

          <div className="flex justify-center ">
            <Pagination
              activePage={SupplierBillSelector.current_page}
              itemsCountPerPage={SupplierBillSelector.per_page}
              totalItemsCount={SupplierBillSelector.total}
              pageRangeDisplayed={5}
              innerClass="flex justify-center space-x-5 mb-2 border-gray-400 w-full  bottom-0   items-center mt-10"
              itemClass=" bg-white  font-Poppins-Regular py-1 px-3 rounded-lg"
              activeClass="bg-[#B7C835] text-[#FFFFFF]"
              onChange={handlePageChange.bind(this)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuppliersOfficeBills;
