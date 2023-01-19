import React, { useEffect, useState } from "react";
import SideBar from "./components/SideBar";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import "react-datepicker/dist/react-datepicker.css";
import EmployerContainer from "./components/Staff/EmployerContainer";
import StaffPangration from "./components/Staff/StaffPangration";
import AddEmployee from "./components/Staff/AddEmployee";
import { Link } from "react-router-dom";
import { VscListFlat } from "react-icons/vsc";
import axios from "axios";
import Header from "./components/Header";
import { useTranslation } from "react-i18next";
import Pagination from "react-js-pagination";

// const employers = [
//   {
//     id: 1,
//     name: "Ali Abu Samra",
//     work: "Worker",
//     phone: "0598276050",
//     email: "des.aliabusamra@gmail.com",
//   },
//   {
//     id: 2,

//     name: "Ali Abu Samra",
//     work: "Worker",
//     phone: "0598276050",
//     email: "des.aliabusamra@gmail.com",
//   },
//   {
//     id: 3,

//     name: "Ali Abu Samra",
//     work: "Worker",
//     phone: "0598276050",
//     email: "des.aliabusamra@gmail.com",
//   },
//   {
//     id: 4,

//     name: "Ali Abu Samra",
//     work: "Worker",
//     phone: "0598276050",
//     email: "des.aliabusamra@gmail.com",
//   },
//   {
//     id: 5,

//     name: "Ali Abu Samra",
//     work: "Worker",
//     phone: "0598276050",
//     email: "des.aliabusamra@gmail.com",
//   },
//   {
//     id: 6,

//     name: "Ali Abu Samra",
//     work: "Worker",
//     phone: "0598276050",
//     email: "des.aliabusamra@gmail.com",
//   },
//   {
//     id: 7,

//     name: "Ali Abu Samra",
//     work: "Worker",
//     phone: "0598276050",
//     email: "des.aliabusamra@gmail.com",
//   },
//   {
//     id: 8,

//     name: "Ali Abu Samra",
//     work: "Worker",
//     phone: "0598276050",
//     email: "des.aliabusamra@gmail.com",
//   },
//   {
//     id: 9,

//     name: "Ali Abu Samra",
//     work: "Worker",
//     phone: "0598276050",
//     email: "des.aliabusamra@gmail.com",
//   },
//   {
//     id: 10,

//     name: "Ali Abu Samra",
//     work: "Worker",
//     phone: "0598276050",
//     email: "des.aliabusamra@gmail.com",
//   },
//   {
//     id: 11,

//     name: "Ali Abu Samra",
//     work: "Worker",
//     phone: "0598276050",
//     email: "des.aliabusamra@gmail.com",
//   },
//   {
//     id: 12,

//     name: "Ali Abu Samra",
//     work: "Worker",
//     phone: "0598276050",
//     email: "des.aliabusamra@gmail.com",
//   },
//   {
//     id: 13,

//     name: "Ali Abu Samra",
//     work: "Worker",
//     phone: "0598276050",
//     email: "des.aliabusamra@gmail.com",
//   },
//   {
//     id: 14,

//     name: "Ali Abu Samra",
//     work: "Worker",
//     phone: "0598276050",
//     email: "des.aliabusamra@gmail.com",
//   },
// ];

function Staff() {
  const [employers, setEmployers] = useState();
  const [OpenAddEmployee, setAddEmployee] = useState(false);
  const { t, i18n } = useTranslation();
  const [page, setPage] = useState(1);
  // const dispatch = useDispatch();
  // const GenderSelector = useSelector(selectGenders);
  const [id, setId] = useState(0);
  const [data, setData] = useState([]);
  const GetStaff = async (page) => {
    console.log(page)
    // document.getElementById("Loader").classList.remove("hidden");
    // document.getElementById("Loader").classList.add("flex");

    await axios.get(`lab-scope/staff?page=${page}`).then((response) => {
      setData(response.data);

      //dispatch(addAllGender(response.data));
      // document.getElementById("Loader").classList.add("hidden");
      // document.getElementById("Loader").classList.remove("flex");
      console.log(response);
    });
  };

  useEffect(() => {
    GetStaff(page);
  }, []);

 
  const AddEmployer = () => {
    setAddEmployee(true);
  };
  const handlePageChange = (pageNumber) => {
    // console.log(`active page is ${pageNumber}`);
    // this.setState({ activePage: pageNumber });
    setPage(pageNumber);
    GetStaff(pageNumber);
  };
  return (
    <div className="w-full h-full pr-5 p-5">
      <AddEmployee page={page} setData={setData} open={OpenAddEmployee} setOpen={setAddEmployee} />
      <div className="w-full flex ">
        <Header />
      </div>
      <div className="flex ">
        <SideBar page="Staff" />
        <div className="w-full h-full ml-8 mt-10">
          <div className="flex flex-col w-full justify-between">
            <div className="flex w-full space-x-2 justify-between">
              <div className="w-fit pr-2 bg-white rounded-lg flex items-center mr-5">
                <select className=" w-fit  rounded-lg font-Poppins-Medium  text-base outline-none px-4 py-2 cursor-pointer">
                  <option value="" selected disabled hidden>
                    {t("Sort by")}
                  </option>
                  <option value="A-Z">A-Z</option>
                  <option value="Z-A">Z-A</option>
                </select>
              </div>

              <div
                className="bg-[#0D2135] w-fit  flex items-center justify-center px-5 rounded-xl cursor-pointer "
                onClick={() => AddEmployer()}
              >
                <p className="text-base flex items-center justify-center text-white">
                  <AiOutlinePlus className="mr-2 font-Poppins-SemiBold text-lg" />
                  {t("Add employee")}
                </p>
              </div>
            </div>

            {/* Pangration */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8">
      {data &&
        data.map((item) => (
          <EmployerContainer
            id={item.id}
            page={page} 
            setData={setData} 
            name={item.name}
            work={item.work}
            phone={item.phone}
            email={item.email}
            image={item.image}
          />
        ))}
    </div>
    <Pagination
              activePage={data.current_page}
              itemsCountPerPage={data.per_page}
              totalItemsCount={data.total}
              pageRangeDisplayed={5}
              innerClass="flex justify-center space-x-5 mb-2 border-gray-400 w-full  bottom-0   items-center mt-10"
              itemClass=" bg-white  font-Poppins-Regular py-1 px-3 rounded-lg"
              activeClass="bg-[#B7C835] text-[#FFFFFF]"
              onChange={handlePageChange.bind(this)}
            />

            {/* <EmployerContainer/> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Staff;
