import React, { useState } from "react";
import { FcPrint } from "react-icons/fc";
import { IoCalendarOutline } from "react-icons/io5";

import ReactDatePicker from "react-datepicker";
import { t } from "i18next";

function Expenses({ section }) {
  const [FromDate, setFromDate] = useState(new Date());
  const [ToDate, setToDate] = useState(new Date());

  const FromInput = React.forwardRef((props, ref) => {
    return (
      <div className="flex p-4 rounded-xl justify-between items-center w-full outline-0 border-2">
        <label className="text-[#98A2B3] text-xs mr-20 font-Poppins-Medium">
          {t("From")}
        </label>
        <div className=" flex items-center">
          <label
            onClick={props.onClick}
            ref={ref}
            className="text-black text-xs font-Poppins-Medium"
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
      <div className="flex p-4 rounded-xl justify-between items-center w-full outline-0 border-2">
        <label className="text-[#98A2B3] text-xs mr-20 font-Poppins-Medium">
          {t("To")}
        </label>
        <div className=" flex items-center">
          <label
            onClick={props.onClick}
            ref={ref}
            className="text-black text-xs font-Poppins-Medium"
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
  return (
    <div className={`${section === "Expenses" ? "block" : "hidden"}`}>
      <div className="bg-white mt-5 p-5 rounded-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3  ">
          <div className="w-full break-words border-[#E4E7EC] h-fit bg-[#F9FAFF] flex space-x-2 items-center py-4 px-4    relative m-auto border-[1px] rounded-xl ">
            <input
              name="AmountSpent"
              placeholder={t("Amount spent")}
              type="text"
              className="w-full bg-[#F9FAFF] font-Poppins-Medium text-xs placeholder:text-[#98A2B3] outline-0 ring-0"
            />
          </div>
          <div className="w-full break-words border-[#E4E7EC] h-fit bg-[#F9FAFF] flex space-x-2 items-center py-4 px-4    relative m-auto border-[1px] rounded-xl ">
            <input
              name="ExchangeParty"
              placeholder={t("Exchange party")}
              type="text"
              className="w-full bg-[#F9FAFF] font-Poppins-Medium text-xs placeholder:text-[#98A2B3] outline-0 ring-0"
            />
          </div>
          <div className="w-full break-words border-[#E4E7EC] h-fit bg-[#F9FAFF] flex space-x-2 items-center py-4 px-4    relative m-auto border-[1px] rounded-xl ">
            <input
              name="ExchangeEmployee"
              placeholder={t("Exchange employee")}
              type="text"
              className="w-full bg-[#F9FAFF] font-Poppins-Medium text-xs placeholder:text-[#98A2B3] outline-0 ring-0"
            />
          </div>
          <div className="w-full break-words border-[#E4E7EC] h-fit bg-[#F9FAFF] flex space-x-2 items-center py-4 px-4    relative m-auto border-[1px] rounded-xl ">
            <input
              name="ExchangeCheckNumber"
              placeholder={t("Exchange check number")}
              type="text"
              className="w-full bg-[#F9FAFF] font-Poppins-Medium text-xs placeholder:text-[#98A2B3] outline-0 ring-0"
            />
          </div>

          <div className="w-full flex ">
            <ReactDatePicker
              id="date"
              dateFormat="yyyy/MM/dd"
              className=" "
              customInput={<FromInput />}
              selected={FromDate}
              onChange={(date) => setFromDate(date)}
            />
          </div>
          <div className="w-full flex ">
            <ReactDatePicker
              id="date"
              dateFormat="yyyy/MM/dd"
              className=" "
              customInput={<ToInput />}
              selected={ToDate}
              onChange={(date) => setToDate(date)}
            />
          </div>

          <div className="flex lg:col-start-3 lg:col-end-3 items-center space-x-5">
            <button
              type="button"
              className="flex border-[#D0D5DD] border-[1px] w-2/5 py-3 font-Poppins-Medium text-sm  bg-[#FFFFFF] justify-center rounded-xl text-black"
            >
              {t("Reset")}
            </button>

            <button
              type="button"
              className="flex  flex-grow py-3 font-Poppins-Medium text-sm  bg-[#B7C835] justify-center rounded-xl text-white"
            >
              {t("Apply")}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-5 items-center">
        <div className="flex flex-col w-full text-center h-full items-center bg-white space-y-3 px-10 py-6 rounded-2xl">
          <h1 className="font-Poppins-Bold  text-base">10000</h1>
          <p className="font-Poppins-Regular text-xs">{t("Amounts spent")}</p>
        </div>
        <div className="flex flex-col w-full text-center h-full items-center bg-white space-y-3 px-10 py-6 rounded-2xl">
          <h1 className="font-Poppins-Bold  text-base">10000</h1>
          <p className="font-Poppins-Regular text-xs">
            {t("Exchange parties")}
          </p>
        </div>
        <div className="flex flex-col w-full text-center h-full items-center bg-white space-y-3 px-10 py-6 rounded-2xl">
          <h1 className="font-Poppins-Bold  text-base">10000</h1>
          <p className="font-Poppins-Regular text-xs">
            {t("Exchange employees")}
          </p>
        </div>
      </div>

      <div className="w-full h-full flex flex-col  bg-white px-8 pt-10 pb-5 rounded-lg mt-5">
        <div className="flex justify-between w-full">
          <h1 className="font-Poppins-Medium text-lg ">{t("Expenses")}</h1>
          <div className="w-fit border-2 rounded-xl items-center flex space-x-5 px-10">
            <FcPrint className="text-xl" />
            <p className="font-Poppins-Medium text-sm">{t("Print")}</p>
          </div>
        </div>
        <div className="overflow-scroll scrollbar-hide h-64  w-full mt-5">
          <table className=" w-full    mb-5">
            <tr className="border-y-2 sticky top-0 bg-white">
              <td className="py-3 text-[#667085]  pr-20 lg:pr-0 font-Poppins-Regular  text-sm  ">
                {t("Date")}
              </td>
              <td className="py-3 text-[#667085] pr-20 lg:pr-0 font-Poppins-Regular text-sm  ">
                {t("Amount spent")}
              </td>
              <td className="py-3 text-[#667085] pr-20 lg:pr-0 font-Poppins-Regular text-sm ">
                {t("Exchange party")}
              </td>
              <td className="py-3 text-[#667085] pr-20 lg:pr-0 font-Poppins-Regular text-sm ">
                {t("Exchange employee")}
              </td>
              <td className="py-3 text-[#667085] pr-20 lg:pr-0 font-Poppins-Regular text-sm ">
                {t("Exchange check number")}
              </td>
            </tr>
            <tr className="mt-2 border-b-[1px]">
              <td className="py-[0.4rem] ">
                <div className="flex items-center">
                  <p className=" text-sm font-Poppins-Regular">15/08/2022</p>
                </div>
              </td>
              <td className="py-3 text-sm font-Poppins-Regular">23369874</td>
              <td className="py-3 text-sm font-Poppins-Regular">Blue Hawk</td>
              <td className="py-3 text-sm font-Poppins-Regular">
                Eleanor Pena
              </td>
              <td className="py-3 text-sm font-Poppins-Regular">#50929</td>
            </tr>
            <tr className="mt-2 border-b-[1px]">
              <td className="py-[0.4rem] ">
                <div className="flex items-center">
                  <p className=" text-sm font-Poppins-Regular">15/08/2022</p>
                </div>
              </td>
              <td className="py-3 text-sm font-Poppins-Regular">23369874</td>
              <td className="py-3 text-sm font-Poppins-Regular">Blue Hawk</td>
              <td className="py-3 text-sm font-Poppins-Regular">
                Eleanor Pena
              </td>
              <td className="py-3 text-sm font-Poppins-Regular">#50929</td>
            </tr>
            <tr className="mt-2 border-b-[1px]">
              <td className="py-[0.4rem] ">
                <div className="flex items-center">
                  <p className=" text-sm font-Poppins-Regular">15/08/2022</p>
                </div>
              </td>
              <td className="py-3 text-sm font-Poppins-Regular">23369874</td>
              <td className="py-3 text-sm font-Poppins-Regular">Blue Hawk</td>
              <td className="py-3 text-sm font-Poppins-Regular">
                Eleanor Pena
              </td>
              <td className="py-3 text-sm font-Poppins-Regular">#50929</td>
            </tr>
            <tr className="mt-2 border-b-[1px]">
              <td className="py-[0.4rem] ">
                <div className="flex items-center">
                  <p className=" text-sm font-Poppins-Regular">15/08/2022</p>
                </div>
              </td>
              <td className="py-3 text-sm font-Poppins-Regular">23369874</td>
              <td className="py-3 text-sm font-Poppins-Regular">Blue Hawk</td>
              <td className="py-3 text-sm font-Poppins-Regular">
                Eleanor Pena
              </td>
              <td className="py-3 text-sm font-Poppins-Regular">#50929</td>
            </tr>
            <tr className="mt-2 border-b-[1px]">
              <td className="py-[0.4rem] ">
                <div className="flex items-center">
                  <p className=" text-sm font-Poppins-Regular">15/08/2022</p>
                </div>
              </td>
              <td className="py-3 text-sm font-Poppins-Regular">23369874</td>
              <td className="py-3 text-sm font-Poppins-Regular">Blue Hawk</td>
              <td className="py-3 text-sm font-Poppins-Regular">
                Eleanor Pena
              </td>
              <td className="py-3 text-sm font-Poppins-Regular">#50929</td>
            </tr>
            <tr className="mt-2 border-b-[1px]">
              <td className="py-[0.4rem] ">
                <div className="flex items-center">
                  <p className=" text-sm font-Poppins-Regular">15/08/2022</p>
                </div>
              </td>
              <td className="py-3 text-sm font-Poppins-Regular">23369874</td>
              <td className="py-3 text-sm font-Poppins-Regular">Blue Hawk</td>
              <td className="py-3 text-sm font-Poppins-Regular">
                Eleanor Pena
              </td>
              <td className="py-3 text-sm font-Poppins-Regular">#50929</td>
            </tr>
            <tr className="mt-2 border-b-[1px]">
              <td className="py-[0.4rem] ">
                <div className="flex items-center">
                  <p className=" text-sm font-Poppins-Regular">15/08/2022</p>
                </div>
              </td>
              <td className="py-3 text-sm font-Poppins-Regular">23369874</td>
              <td className="py-3 text-sm font-Poppins-Regular">Blue Hawk</td>
              <td className="py-3 text-sm font-Poppins-Regular">
                Eleanor Pena
              </td>
              <td className="py-3 text-sm font-Poppins-Regular">#50929</td>
            </tr>
            <tr className="mt-2 border-b-[1px]">
              <td className="py-[0.4rem] ">
                <div className="flex items-center">
                  <p className=" text-sm font-Poppins-Regular">15/08/2022</p>
                </div>
              </td>
              <td className="py-3 text-sm font-Poppins-Regular">23369874</td>
              <td className="py-3 text-sm font-Poppins-Regular">Blue Hawk</td>
              <td className="py-3 text-sm font-Poppins-Regular">
                Eleanor Pena
              </td>
              <td className="py-3 text-sm font-Poppins-Regular">#50929</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Expenses;
