import Image from "../../assets/graph.jpg";
import { MdOutlineSegment } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import {SiAndroidstudio} from "react-icons/si"
import {GiAndroidMask} from "react-icons/gi"

const Regularsale = () => {
  return (
    <>
      <div className="grid grid-cols-6 pt-6">
        <div className="container w-50 col-span-2    ">
          <div>
            <div className="grid grid-cols-6 pt-4 ">
              <p className="col-span-5 text-3xl  font-bold ps-7">
                Regular Sale
              </p>{" "}
              <button className="col-span-1 bg-lime-300 p-2 px-6  w-24 h-9 rounded-lg items-center flex justify-center">
                Export
              </button>
            </div>

            <img src={Image} alt="" className="w-68 h-72 mt-8 " />
          </div>
        </div>
        <div className="col-span-2 ms-24">
          <div className="container   ">
            <div className="grid grid-rows-3  ">
              <div className=" container ms-6">
                <p className="text-3xl pt-4 font-bold">More Analysis</p>
                <p className="text-xl pt-2 text-zinc-500   font-semibold">
                  There are more to view
                </p>
              </div>
              <div className=" flex container mt-4">
                <div className=" grid grid-cols-12 content-evenly items-center justify-items-center font-semibold text-2xl ms-6">
                  <MdOutlineSegment className="col-span-1 rotate-90 " />
                  <p className="col-span-4 col-start-2 text-start pr-5 ">
                    Store Sale ratio
                  </p>
                  <MdKeyboardArrowRight className="col-span-1 ps-2 w-44" />
                </div>
              </div>
              <div className="flex mt-4 container">
                <div className=" grid grid-cols-12 content-evenly items-center justify-items-center font-semibold text-2xl ms-6">
                  <SiAndroidstudio className="col-span-1 " />
                  <p className="col-span-4 col-start-2 text-start pr-5">
                  Top Item Sold
                  </p>
                  <MdKeyboardArrowRight className="col-span-1 ps-2 w-44" />
                </div>
              </div>
              <div className="flex">
                <p className="text-xl pt-8 ps-6 pb-2">Analysis Created by <button className="bg-lime-300 p-2.5  w-10 rounded-full"><GiAndroidMask/></button> </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Regularsale;
