import React, { useState } from "react";
import SideBar from "./components/SideBar";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";

import "react-datepicker/dist/react-datepicker.css";
import ExportPangration from "./components/Accounting/ExportPangration";
import RevenuesPangration from "./components/Accounting/RevenuesPangration";
import AddAccounting from "./components/Accounting/AddAccounting";

import { useTranslation } from "react-i18next";
import Header from "./components/Header";

const exports = [
  {
    id: 1,
    date: "1/1/2023",
    day: "sunday",
    payment_amount: "2000",
    note: "Nothings",
  },
  {
    id: 1,
    date: "1/1/2023",
    day: "sunday",
    payment_amount: "2000",
    note: "Nothings",
  },
  {
    id: 1,
    date: "1/1/2023",
    day: "sunday",
    payment_amount: "2000",
    note: "Nothings",
  },
  {
    id: 1,
    date: "1/1/2023",
    day: "sunday",
    payment_amount: "2000",
    note: "Nothings",
  },
  {
    id: 1,
    date: "1/1/2023",
    day: "sunday",
    payment_amount: "2000",
    note: "Nothings",
  },
  {
    id: 1,
    date: "1/1/2023",
    day: "sunday",
    payment_amount: "2000",
    note: "Nothings",
  },
  {
    id: 1,
    date: "1/1/2023",
    day: "sunday",
    payment_amount: "2000",
    note: "Nothings",
  },
  {
    id: 1,
    date: "1/1/2023",
    day: "sunday",
    payment_amount: "2000",
    note: "Nothings",
  },
];

const Revenues = [
  {
    id: 1,
    date: "1/1/2023",
    day: "sunday",
    total_amount: "200000",
    note: "Nothing",
  },
  {
    id: 1,
    date: "1/1/2023",
    day: "sunday",
    total_amount: "200000",
    note: "Nothing",
  },
  {
    id: 1,
    date: "1/1/2023",
    day: "sunday",
    total_amount: "200000",
    note: "Nothing",
  },
  {
    id: 1,
    date: "1/1/2023",
    day: "sunday",
    total_amount: "200000",
    note: "Nothing",
  },
  {
    id: 1,
    date: "1/1/2023",
    day: "sunday",
    total_amount: "200000",
    note: "Nothing",
  },
  {
    id: 1,
    date: "1/1/2023",
    day: "sunday",
    total_amount: "200000",
    note: "Nothing",
  },
  {
    id: 1,
    date: "1/1/2023",
    day: "sunday",
    total_amount: "200000",
    note: "Nothing",
  },
  {
    id: 1,
    date: "1/1/2023",
    day: "sunday",
    total_amount: "200000",
    note: "Nothing",
  },
];

function Accounting() {
  const [OpenAddAccounting, setOpenAddAccounting] = useState(false);
  const { t, i18n } = useTranslation();

  const [Section, setSection] = useState("exports");

  const AccountingAdd = () => {
    setOpenAddAccounting(true);
  };

  return (
    <div className="w-full h-full pr-5 p-5">
      <AddAccounting open={OpenAddAccounting} setOpen={setOpenAddAccounting} />

      <div className="w-full flex ">
        <Header />
      </div>
      <div className="flex ">
        <SideBar page="Accounting" />
        <div className="w-full h-full lg:ml-8 mt-10">
          <div className="flex w-full justify-between">
            <div className="flex w-full space-x-2">
              <div className="w-fit pr-2 bg-white rounded-lg flex items-center mr-5">
                <select className=" w-fit  rounded-lg font-Poppins-Medium  text-base outline-none px-4 py-2 cursor-pointer">
                  <option value="" selected disabled hidden>
                    {t("Sort by")}
                  </option>
                  <option value="A-Z">A-Z</option>
                  <option value="Z-A">Z-A</option>
                </select>
              </div>
              <div className="w-fit flex  space-x-2">
                <div
                  className={`${
                    Section === "exports" ? "bg-[#B7C835]" : "bg-white"
                  } w-fit flex items-center px-4 py-2 lg:py-0 rounded-xl cursor-pointer`}
                  onClick={() => setSection("exports")}
                >
                  <p
                    id="exports"
                    className={`${
                      Section === "exports" ? "text-white" : "text-[#101828]"
                    }  text-xs text-center `}
                  >
                    {t("exports")}
                  </p>
                </div>

                <div
                  className={`${
                    Section === "Revenues" ? "bg-[#B7C835]" : "bg-white"
                  } bg-white w-fit flex items-center px-4 py-2 lg:py-0 rounded-xl cursor-pointer`}
                  onClick={() => setSection("Revenues")}
                >
                  <p
                    id="Revenues"
                    className={`${
                      Section === "Revenues" ? "text-white" : "text-[#101828]"
                    }  text-xs text-center `}
                  >
                    {t("Revenues")}
                  </p>
                </div>
              </div>
            </div>

            <div
              className="bg-[#0D2135] w-[28%] lg:w-[24%]  flex items-center justify-center  rounded-xl cursor-pointer "
              onClick={() => AccountingAdd()}
            >
              <p className="text-base font-Poppins-SemiBold flex items-center justify-center text-white ">
                <AiOutlinePlus className="mr-2 text-lg" />
                {t("Add")}
              </p>
            </div>
          </div>

          {/* Pangration */}

          <ExportPangration section={Section} itemsPerPage={8} Data={exports} />

          <RevenuesPangration
            section={Section}
            itemsPerPage={8}
            Data={Revenues}
          />
        </div>
      </div>
    </div>
  );
}

export default Accounting;
