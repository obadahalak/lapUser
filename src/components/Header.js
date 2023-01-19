import React, { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "../Images/Logo.svg";
import UK from "../Images/UK.png";
import NotifContainer from "./Home/NotifContainer";

import SA from "../Images/SA.png";
import { useTranslation } from "react-i18next";
import { VscListFlat } from "react-icons/vsc";

function Header({ section }) {
  const [lang, SetLang] = useState("UK");
  const { t, i18n } = useTranslation();
  console.log(section, "section");
  const ShowNotification = () => {
    if (document.getElementById("Notification").classList.contains("hidden")) {
      document.getElementById("Notification").classList.remove("hidden");
    } else if (
      !document.getElementById("Notification").classList.contains("hidden")
    ) {
      document.getElementById("Notification").classList.add("hidden");
    }
  };

  const ShowLaguages = () => {
    if (document.getElementById("lang").classList.contains("hidden")) {
      document.getElementById("lang").classList.remove("hidden");
      document.getElementById("CurrentLang").classList.add("hidden");
      document.getElementById("CloseLangIcon").classList.remove("hidden");
    } else if (!document.getElementById("lang").classList.contains("hidden")) {
      document.getElementById("lang").classList.add("hidden");
      document.getElementById("CurrentLang").classList.remove("hidden");
      document.getElementById("CloseLangIcon").classList.add("hidden");
    }
  };

  const changeToAR = () => {
    SetLang("SA");
    i18n.changeLanguage("ar");
  };

  const changeToEg = () => {
    SetLang("UK");

    i18n.changeLanguage("en");
  };

  function drawer() {
    document.getElementById("drawerBody").classList.remove("hidden");
    document
      .getElementById("drawerBody")
      .classList.add(
        "flex",
        "fixed",
        "h-screen",
        "w-full",
        "bg-transparent",
        "top-0",
        "left-0",
        "lg:hidden",
        "z-10"
      );
  }

  function closeDrawer() {
    document.getElementById("drawerBody").classList.add("hidden");
  }
  return (
    <div className="w-full   relative flex  justify-between">
      <div
        id="Notification"
        className="hidden absolute w-[95%] lg:w-[50%] h-[48rem] px-10 py-10 bg-white z-20 top-[4.8rem] shadow-inner  right-2 rounded-2xl"
      >
        <div className="font-Poppins-Regular flex justify-between items-center border-b-2 pb-5">
          <h1 className="text-[22px] font-Poppins-Bold">
            {t("Notifications")}
          </h1>
          <p className="text-[#B7C835] font-Poppins-Medium text-sm">
            {t("Mark all as read")}
          </p>
        </div>
        <div className="">
          <NotifContainer />
          <NotifContainer />
          <NotifContainer />
          <NotifContainer />
          <NotifContainer />
        </div>
        <div className="flex justify-center items-center mt-8">
          <p className="text-[#B7C835] text-lg font-Poppins-Bold">
            {t("Show all notifications")}
          </p>
        </div>
      </div>
      <div className="bg-white mr-[-1.1rem] lg:mr-0 rounded-l-xl ">
        <VscListFlat
          id="drawerbtn"
          className="text-black  text-xl m-2  cursor-pointer w-10 h-20 lg:hidden "
          onClick={() => drawer()}
        />
      </div>
      <img
        src={Logo}
        className={`${
          section === "Home" ? "lg:hidden" : "block"
        } w-[5.5rem] h-20 rounded-xl bg-[#0D2135] ml-9 mr-8 pb-3 pt-2 hidden lg:block`}
      />
      <div className=" p-5 bg-white flex items-center justify-between flex-grow rounded-xl">
        <div
          className={`flex items-center ${
            section === "Home" ? "lg:w-[50%] w-[40%]" : "w-[40%]"
          }   md:w[60%] flex-grow lg:flex-grow-0 mr-5 lg:mr-0  rounded-2xl bg-[#F2F4F7]`}
        >
          <RiSearch2Line className="ml-2 text-[#B9B9B9]  text-3xl" />
          <input
            dir="rtl"
            lang="ar"
            placeholder={t("Find the names of the reviewers here")}
            className="p-2 bg-[#F2F4F7] w-full  focus:outline-none px-4  placeholder-[#B9B9B9] text-left rounded-2xl"
            type="text"
          />
        </div>

        <div className="flex justify-center items-center space-x-5">
          <div
            className="relative bg-[#F2F4F7] p-[0.6rem] w-fit lg:p-[0.6rem] rounded-full "
            onClick={() => ShowLaguages()}
          >
            <img
              id="CurrentLang"
              src={i18n.language === "en" ? UK : SA}
              className="w-6 sm:w-6 h-6 rounded-full cursor-pointer"
            />
            <AiOutlineClose
              id="CloseLangIcon"
              className="hidden text-xl text-black cursor-pointer "
            />
            <div
              id="lang"
              className="hidden  absolute w-[80%] right-[0.21rem] rounded-b-xl shadow-md   flex-col justify-center items-center  bg-[#F2F4F7]    "
            >
              <div
                className="mt-1 bg-[#F2F4F7] p-[0.2rem] hover:bg-gray-200 w-fit  rounded-full cursor-pointer"
                onClick={() => changeToAR()}
              >
                <img src={SA} className=" w-16 sm:w-6 h-6 rounded-full" />
              </div>
              <div
                className="mt-1 bg-[#F2F4F7] p-[0.2rem] w-fit hover:bg-gray-200  rounded-full cursor-pointer"
                onClick={() => changeToEg()}
              >
                <img src={UK} className=" w-16 sm:w-6 h-6 rounded-full" />
              </div>
            </div>
          </div>
          <Link
            to="/Settings"
            className="bg-[#F2F4F7] p-[0.6rem] rounded-full cursor-pointer"
          >
            <FiSettings className="text-[#101828] w-6 h-6 " />
          </Link>
          <div
            className="bg-[#F2F4F7] p-[0.5rem] rounded-full cursor-pointer "
            onClick={() => ShowNotification()}
          >
            <IoIosNotificationsOutline className="text-[#101828] w-6 h-6 " />
          </div>
        </div>
      </div>

      {/* Drawer */}
      <div id="drawerBody" className=" hidden  ">
        <div
          id="drawer"
          className=" w-full bg-[#0D2135] opacity-80 h-full md:w-1/2"
        >
          <div className="p-4">
            <AiOutlineClose
              className="text-xl text-white cursor-pointer "
              onClick={() => closeDrawer()}
            />
          </div>
          <div className="flex flex-col ml-10 md:ml-20 space-y-1 w-full justify-center  h-4/5 text-white ">
            {/* border-b-2 border-[#847244] */}
            <Link
              to="/"
              className="hover:bg-black rounded-xl cursor-pointer flex justify-center  text-xl  p-2 md:w-1/2 w-3/4"
            >
              <div className="font-Poppins-Regular text-sm">{t("Home")}</div>
            </Link>
            <Link
              to="/Patients"
              className="hover:bg-black rounded-xl cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2 "
            >
              <div className="font-Poppins-Regular text-sm">
                {t("Patients")}{" "}
              </div>
            </Link>
            <Link
              to="/Analytic"
              className="hover:bg-black rounded-xl cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2"
            >
              <div className="font-Poppins-Regular text-sm">
                {t("Analytics")}
              </div>
            </Link>
            <Link
              to="/Doctors"
              className="hover:bg-black rounded-xl cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2"
            >
              <div className="font-Poppins-Regular text-sm">{t("Doctors")}</div>
            </Link>
            <Link
              to="/Labs"
              className="hover:bg-black rounded-xl cursor-pointer flex justify-center md:w-1/2 w-3/4   text-xl p-2"
            >
              <div className="font-Poppins-Regular text-sm">{t("Labs")}</div>
            </Link>
            <Link
              to="/Staff"
              className="hover:bg-black rounded-xl cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2"
            >
              <div className="font-Poppins-Regular text-sm">{t("Staff")}</div>
            </Link>
            <Link
              to="/Store"
              className="hover:bg-black rounded-xl cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2"
            >
              <div className="font-Poppins-Regular text-sm">{t("Store")}</div>
            </Link>
            <Link
              to="/Reports"
              className="hover:bg-black rounded-xl cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2"
            >
              <div className="font-Poppins-Regular text-sm">{t("Reports")}</div>
            </Link>
            <Link
              to="/Accounting"
              className="hover:bg-black rounded-xl cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2"
            >
              <div className="font-Poppins-Regular text-sm">
                {t("Accounting")}
              </div>
            </Link>
            <Link
              to="/Suppliers"
              className="hover:bg-black rounded-xl cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2"
            >
              <div className="font-Poppins-Regular text-sm">
                {t("Suppliers")}
              </div>
            </Link>
            <Link
              to="/Settings"
              className="hover:bg-black rounded-xl cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2"
            >
              <div className="font-Poppins-Regular text-sm">{t("Setting")}</div>
            </Link>
            <Link
              to="/"
              className="hover:bg-black rounded-xl cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2"
            >
              <div className="font-Poppins-Regular text-sm">{t("Logout")}</div>
            </Link>
          </div>
        </div>
        <div className="hidden sm:block h-full w-full bg-black opacity-40" />
      </div>
    </div>
  );
}

export default Header;
