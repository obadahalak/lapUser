import React, { useEffect, useState } from "react";
import SideBar from "./components/SideBar";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import { IoCalendarOutline, IoTrashOutline } from "react-icons/io5";

import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PangrationSuppliersOfficeName from "./components/Suppliers/PangrationSuppliersOfficeName";
import { Link } from "react-router-dom";
import { VscListFlat } from "react-icons/vsc";
import AddSupplier from "./components/Suppliers/AddSupplier";
import Bill from "./components/Suppliers/Bill";
import EditSupplier from "./components/Suppliers/EditSupplier";
import DeleteSupplier from "./components/Suppliers/DeleteSupplier";

import { useTranslation } from "react-i18next";
import Header from "./components/Header";
import {
  addAllSupplier,
  selectSuppliers,
} from "./GlobalData/Suppliers/getSuppliersSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { RiSendPlaneLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import Pagination from "react-js-pagination";
// require("bootstrap/less/bootstrap.less");

const products = [
  {
    id: 1,
    name: "wewe",
    address: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    phone: "2131242141",
    engineerMobile: "2141242141",
    addedDate: "2022/02",
  },
  {
    id: 2,
    name: "lumariu",
    address: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    phone: "512421123",
    engineerMobile: "52132141214",
    addedDate: "2023/02",
  },
  {
    id: 3,
    name: "wewe",
    address: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    phone: "2131242141",
    engineerMobile: "2141242141",
    addedDate: "2022/02",
  },
  {
    id: 4,
    name: "wewe",
    address: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    phone: "2131242141",
    engineerMobile: "2141242141",
    addedDate: "2022/02",
  },
  {
    id: 5,
    name: "wewe",
    address: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    phone: "2131242141",
    engineerMobile: "2141242141",
    addedDate: "2022/02",
  },
  {
    id: 6,
    name: "wewe",
    address: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    phone: "2131242141",
    engineerMobile: "2141242141",
    addedDate: "2022/02",
  },
  {
    id: 7,
    name: "wewe",
    address: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    phone: "2131242141",
    engineerMobile: "2141242141",
    addedDate: "2022/02",
  },
  {
    id: 8,
    name: "wewe",
    address: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    phone: "2131242141",
    engineerMobile: "2141242141",
    addedDate: "2022/02",
  },
  {
    id: 9,
    name: "wewe",
    address: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    phone: "2131242141",
    engineerMobile: "2141242141",
    addedDate: "2022/02",
  },
  {
    id: 9,
    name: "wewe",
    address: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    phone: "2131242141",
    engineerMobile: "2141242141",
    addedDate: "2022/02",
  },
  {
    id: 9,
    name: "wewe",
    address: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    phone: "2131242141",
    engineerMobile: "2141242141",
    addedDate: "2022/02",
  },
  {
    id: 9,
    name: "wewe",
    address: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    phone: "2131242141",
    engineerMobile: "2141242141",
    addedDate: "2022/02",
  },
  {
    id: 9,
    name: "wewe",
    address: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    phone: "2131242141",
    engineerMobile: "2141242141",
    addedDate: "2022/02",
  },
  {
    id: 9,
    name: "wewe",
    address: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    phone: "2131242141",
    engineerMobile: "2141242141",
    addedDate: "2022/02",
  },
  {
    id: 9,
    name: "wewe",
    address: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    phone: "2131242141",
    engineerMobile: "2141242141",
    addedDate: "2022/02",
  },
  {
    id: 9,
    name: "wewe",
    address: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    phone: "2131242141",
    engineerMobile: "2141242141",
    addedDate: "2022/02",
  },
  {
    id: 9,
    name: "wewe",
    address: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    phone: "2131242141",
    engineerMobile: "2141242141",
    addedDate: "2022/02",
  },
  {
    id: 9,
    name: "wewe",
    address: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    phone: "2131242141",
    engineerMobile: "2141242141",
    addedDate: "2022/02",
  },
  {
    id: 9,
    name: "wewe",
    address: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    phone: "2131242141",
    engineerMobile: "2141242141",
    addedDate: "2022/02",
  },
  {
    id: 9,
    name: "wewe",
    address: "Aliqua id fugiat nostrud irure ex duis ea quis id",
    phone: "2131242141",
    engineerMobile: "2141242141",
    addedDate: "2022/02",
  },
];

function SuppliersOfficeName() {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const SupplierSelector = useSelector(selectSuppliers);
  const [FromDate, setFromDate] = useState(new Date());
  const [ToDate, setToDate] = useState(new Date());
  const [OpenAddSupplier, setOpenAddSupplier] = useState(false);
  const [OpenEditSupplier, setOpenEditSupplier] = useState(false);
  const [OpenDeleteSupplier, setOpenDeleteSupplier] = useState(false);
  const [id, setId] = useState();
  const [OpenBill, setOpenBill] = useState(false);

  const getSuppliers = async (page) => {
    await axios.get(`lab-scope/suppliers?page=${page}`).then((response) => {
      console.log(response.data, "hi");
      dispatch(addAllSupplier(response.data));
    });
  };
  useEffect(() => {
    getSuppliers(1);
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
  const Edit = (id) => {
    setId(id);
    setOpenEditSupplier(true);
  };

  const StoreBill = (id) => {
    setId(id);

    setOpenBill(true);
  };

  const Delete = (id) => {
    setId(id);

    setOpenDeleteSupplier(true);
  };

  const handlePageChange = (pageNumber) => {
    // console.log(`active page is ${pageNumber}`);
    // this.setState({ activePage: pageNumber });
    getSuppliers(pageNumber);
  };

  return (
    <div className="w-full h-full p-5 pr-5">
      <AddSupplier open={OpenAddSupplier} setOpen={setOpenAddSupplier} />
      <Bill id={id} open={OpenBill} setOpen={setOpenBill} />
      <EditSupplier
        id={id}
        open={OpenEditSupplier}
        setOpen={setOpenEditSupplier}
      />
      <DeleteSupplier
        id={id}
        open={OpenDeleteSupplier}
        setOpen={setOpenDeleteSupplier}
      />

      <div className="w-full flex ">
        <Header />
      </div>
      <div className="flex ">
        <SideBar page="Suppliers" />
        <div className="w-full h-full lg:ml-8 mt-10">
          <div className="flex w-full flex-col lg:flex-row justify-between">
            <div className="grid grid-cols-1 gap-2 md:grid-cols-3 lg:gap-0 lg:grid-cols-5 w-full space-x-2">
              <div className="w-fit pr-2 bg-white rounded-lg flex items-center ">
                <select className=" w-fit  rounded-lg font-Poppins-Regular  text-base outline-none px-4 py-2 cursor-pointer">
                  <option value="" selected disabled hidden>
                    {t("Sort by")}
                  </option>
                  <option value="A-Z">A-Z</option>
                  <option value="Z-A">Z-A</option>
                </select>
              </div>
              <div className="w-full flex space-x-2 md:col-start-2 md:col-end-4 lg:col-start-2 lg:col-end-4">
                <Link
                  to="/Suppliers"
                  className="bg-[#B7C835] w-fit flex items-center px-4 py-2 lg:py-0 rounded-xl cursor-pointer"
                >
                  <p className="text-white text-center">
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
                  className="bg-white w-fit flex items-center px-4 py-2 lg:py-0 rounded-xl cursor-pointer"
                >
                  <p className="text-[#101828] text-center">
                    {t("Paid bills")}
                  </p>
                </Link>
              </div>
              <div className="w-full h-full flex lg:justify-end md:col-start-1 md:col-end-5  lg:col-start-4 lg:col-end-6 ">
                <div
                  className="flex bg-[#0D2135] w-fit  items-center justify-center px-20 py-2 lg:py-2 rounded-xl cursor-pointer "
                  onClick={() => setOpenAddSupplier(true)}
                >
                  <p className="text-base flex items-center justify-center text-white">
                    <AiOutlinePlus className="mr-2 text-lg" />
                    {t("Add")}
                  </p>
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
                {t("Address")}
              </td>
              <td className="text-sm text-[#98A2B3] font-Poppins-Regular py-2 pl-2 ">
                {t("Phone number")}
              </td>
              <td className="text-sm text-[#98A2B3] font-Poppins-Regular py-2 w-[18%] ">
                {t("Maintenance engineer Mobile")}
              </td>
              <td className="text-sm text-[#98A2B3] font-Poppins-Regular py-2 ">
                {t("Added date")}
              </td>
              <td className="text-sm text-[#98A2B3] font-Poppins-Regular py-2 w-[10%]">
                {t("Action")}
              </td>
            </tr>
            {/* Supplier */}
            {SupplierSelector.data &&
              SupplierSelector.data.map((item) => (
                <tr className="border-b-[1px] ">
                  <td className="w-fit">
                    <input
                      type="checkbox"
                      className="text-[#E4E7EC] border-[#E4E7EC] border-[1px] ml-5 w-fit"
                    />
                  </td>
                  <td className="font-Poppins-Regular text-black text-base font-semibold py-6 ">
                    {item.scientific_office_name}
                  </td>
                  <td className="font-Poppins-Regular text-black text-base font-semibold py-6 ">
                    {item.address}
                  </td>
                  <td className="font-Poppins-Regular text-black text-base font-semibold py-6 pl-2">
                    {item.phone}
                  </td>
                  <td className="font-Poppins-Regular text-black text-base font-semibold py-6">
                    {item.maintain_phone}
                  </td>
                  <td className="font-Poppins-Regular text-black text-base font-semibold py-6">
                    {item.added_date}
                  </td>
                  <td>
                    <div className="flex space-x-2 py-4">
                      <RiSendPlaneLine
                        className="text-2xl text-black cursor-pointer"
                        onClick={() => StoreBill(item.id)}
                      />

                      <TiEdit
                        className="text-2xl  opacity-50 cursor-pointer"
                        onClick={() => Edit(item.id)}
                      />
                      <IoTrashOutline
                        className="text-2xl text-[#F04438] cursor-pointer"
                        onClick={() => Delete(item.id)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
          </table>

          {/* <div>
            <ReactPaginate
              breakLabel={<BsThreeDots />}
              nextLabel={
                <div className="bg-white py-[0.4rem] px-2  rounded-lg">
                  <HiOutlineArrowRight className="bg-white text-xl" />
                </div>
              }
              onPageChange={handlePageClick}
              pageRangeDisplayed={1}
              pageCount={pageCount}
              previousLabel={
                <div className="bg-white py-[0.4rem] px-2  rounded-lg">
                  <HiOutlineArrowLeft className="bg-white text-xl" />
                </div>
              }
              pageClassName="bg-white  font-Poppins-Regular py-1 px-3 rounded-lg"
              containerClassName="flex justify-center space-x-5 mb-2 border-gray-400 w-full  bottom-0   items-center mt-10"
              activeClassName="bg-[#B7C835] text-[#FFFFFF] "
              renderOnZeroPageCount={null}
            />
          </div> */}
          {console.log(SupplierSelector.per_page, "page")}
          <div className="flex justify-center ">
            <Pagination
              activePage={SupplierSelector.current_page}
              itemsCountPerPage={SupplierSelector.per_page}
              totalItemsCount={SupplierSelector.total}
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

export default SuppliersOfficeName;
