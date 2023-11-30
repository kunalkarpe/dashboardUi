import { BiSolidMessageAltDots } from "react-icons/bi";
import { FaRegBell } from "react-icons/fa";
import girl from "../../assets/girl.avif";
import { RiUserShared2Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import useFetchUser from "../CustomHooks/usefetchData.js";
import useLogout from "../CustomHooks/uselogoutUser.js";
import { useMutation } from "@tanstack/react-query";

const Nav = () => {
  const { fetchData } = useLogout();
  const navigate = useNavigate();
  const { service } = useFetchUser();

  const logoutMutation = useMutation({
    mutationFn: fetchData,
    onSuccess: () => {
      localStorage.removeItem("token");
      navigate("/login");
    },
  });
  const handleLogOut = () => {
    logoutMutation.mutate();
  };

  return (
    <>
      <div className="z-10 flex fixed top-0  sm:black sm:border-transparent   justify-between md:w-full lg:w-[86vw] xl:w-[86vw]  2xl:w-[88vw] sm:w-full   lg:h-16 xl:h-16 2xl:h-16  sm:h-12 items-center border border-transparent bg-white lg:ms-[18px] ">
        <div className="flex flex-col sm:ms-4 lg:ms-4 xl:ms-4 2x:ms-4 border border-transparent">
          <h1 className="lg:text-2xl xl:text-2xl 2xl:text-2xl md:ms-4 sm:text-md font-bold items-baseline font-extrabold lg:mt-1 ">
            Dashboard
          </h1>
          <p className="lg:text-md xl:text-md 2xl:text-md sm:text-sm  text-slate-700 md:ms-4">
            14th Aug
          </p>
        </div>
        <div className="flex justify-around me-8">
          <div className="flex me-6">
            <div className=" flex items-center border border-gray-300  lg:p-3 xl:p-3 2xl:p-3 sm:px-2 sm:py-4   sm:h-[6vh] sm:mt-0.5 border-1  lg:rounded-xl xl:rounded-xl 2xl:rounded-xl sm:rounded-lg  bg-white">
              <BiSolidMessageAltDots />
            </div>
            <div className=" flex items-center border border-gray-300 lg:p-3 xl:p-3 2xl:p-3 lg:mx-2 xl:mx-2 2xl:mx-2 border-1  lg:rounded-xl xl:rounded-xl 2xl:rounded-xl sm:rounded-lg  bg-white sm:px-2 sm:py-4 sm:ms-2  sm:h-[6vh] sm:mt-0.5">
              <FaRegBell />
            </div>
          </div>
          <div className="flex items-center 2xl:text-xl xl:text-xl  lg:text-xl  sm:text-md sm:mr-2 md:pr-2 font-semibold justify-center">
            <img
              src={girl}
              alt=""
              className="lg:w-14 lg:h-12 xl:w-14 xl:h-12 2xl:w-14 2xl:h-12 sm:h-8 sm:w-8  md:h-8 md:w-8 rounded-full"
            />
            <div className="flex flex-col">
              <span className=" lg:ms-3 xl:ms-3 2xl:ms-3 sm:ms-2 sm:text-sm md:ms-2 md:text-sm sm:text-sm">
                {service?.data?.name}
              </span>
              <p className="lg:text-sm lg:ms-3 xl:text-sm xl:ms-3 2xl:text-sm 2xl:ms-3  sm:text-sm  sm:ms-2  sm:text-sm md:text-sm  md:ms-2 text-slate-500">
                {service?.data?.email}
              </p>
            </div>
          </div>
          <button
            className="flex justify-center items-center border border-slate-300 cursor:pointer rounded-lg px-2 bg-white"
            onClick={handleLogOut}
          >
            <RiUserShared2Fill />
            <p>Logout</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Nav;
