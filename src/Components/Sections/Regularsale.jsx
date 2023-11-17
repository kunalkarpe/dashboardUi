 import Image from "../../assets/graph.jpg";
import { MdOutlineSegment } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { SiAndroidstudio } from "react-icons/si";
import { GiAndroidMask } from "react-icons/gi";

const Regularsale = () => {
  return (
    <>
      <div className="flex justify-center  lg:mt-8 lg:ms-8 md:mt-8 md:mx-4 border border-transparent md:w-full">
        <div className="flex justify-around  ">
          {/* For left side */}
          <div className="flex ">
            <div className="container border border-transparent md:w-[70vw]  lg:w-[40vw] ">
              <div className="bg-white border border-transparent rounded-2xl border-transparent lg:px-4 lg:py-2 md:px-2 md:py-2">
                <div className="flex justify-between   border border-transparent  lg:mt-2 ">
                  <p className="flex items-center justify-items-center border border-transparent  text-xl  font-bold p-0">
                    Regular Sale
                  </p>{" "}
                  <button className=" flex border border-transparent bg-lime-300  lg:px-8 md:px-4  lg:w-12  lg:h-6 rounded-lg items-center flex justify-center lg:text-sm">
                    <span className="lg:text-md md:text-sm ">Export</span>
                  </button>
                </div>
                <img src={Image} alt="" className="lg:w-[38vw] lg:h-[30vh]  lg:mt-6 md:mt-4" />
              </div>
            </div>
          </div>

          {/* For right side */}
          <div className="flex lg:ms-8  md:ms-4  ">
            <div className="container   flex  flex-col border border-transparent md:w-[30vw] lg:w-[20vw]">
              <div className="flex flex-col lg:mt-4">
                <p className="text-xl  font-bold font-roboto md:ms-4 md:mt-4">More Analysis</p>
                <p className="text-md  text-zinc-500   font-semibold  md:ms-4 ">
                  There are more to view
                </p>
              </div>

              <div className="flex flex-col  lg:mt-6 lg:ms-1  md:ms-1 md:mt-4">
                {/* For 1st */}
                <div className="flex  border border-transparent lg:m-2 lg:px-2 lg:py-2 md:m-2 md:px-2 md:py-2 rounded-xl bg-white">
                  <span className="flex   ">
                    <MdOutlineSegment className="md:ms-2  rotate-90 " />
                  </span>
                  <p className="flex     text-start font-bold text-sm lg:ms-6 md:ms-4">
                    Store Sale ratio
                  </p>
                  <div className=" flex   lg:ms-12 md:ms-8 items-center ">
                    <MdKeyboardArrowRight />
                  </div>
                </div>

                {/* For 2nd */}
                <div className="flex  border border-transparent lg:m-2 lg:px-2 lg:py-2  md:m-2 md:px-2 md:py-2   rounded-xl bg-white">
                  <span className="flex     md:ms-2 items-center   ">
                    <SiAndroidstudio />
                  </span>
                  <p className="flex     text-start font-bold text-sm lg:ms-6 md:ms-6">
                    Top Item Sold
                  </p>
                  <div className=" flex   lg:ms-14 md:ms-8 items-center ">
                    <MdKeyboardArrowRight />
                  </div>
                </div>

                {/* For name */}
                <div className=" lg:mt-4">
                  <p className="text-sm   lg:ps-6 lg:pb-2 md:ps-6 md:mt-4 lg:mt-0">
                    Analysis Created by{" "}
                    <button className="bg-lime-300 lg:px-2 lg:py-2  lg:w-8 rounded-full ">
                      <GiAndroidMask />
                    </button>
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="container   ">
              <div className="grid grid-rows-3  ">
                <div className=" container ms-6">
                  <p className="text-xl pt-4 font-bold font-roboto">
                    More Analysis
                  </p>
                  <p className="text-md pt-2 text-zinc-500   font-semibold">
                    There are more to view
                  </p>
                </div>
                <div className="  mt-3   ">
                  <div className=" grid grid-cols-10 p-1.5 content-evenly items-center  font-roboto bg-white ms-6 mr-8 border border-transparent rounded-xl">
                    <MdOutlineSegment className="col-span-2 rotate-90  ms-6" />
                    <p className="col-span-4 col-start-3 text-start font-bold text-sm ms-3">
                      Store Sale ratio
                    </p>
                    <MdKeyboardArrowRight className="col-start-7 ms-14  col-end-11 " />
                  </div>
                  <div className="  grid grid-cols-10 p-1.5 content-evenly items-center  font-roboto bg-white ms-6 mr-8 border border-transparent rounded-xl mt-3">
                    <SiAndroidstudio className="col-span-2 ms-6 " />
                    <p className="col-span-4 col-start-3 text-start text-sm font-bold  ms-3 ">
                      Top Item Sold
                    </p>
                    <MdKeyboardArrowRight className="col-start-7 col-end-11 ms-14 " />
                  </div>
                </div>
                <div className=" mt-4">
                  <p className="text-sm col-span-8 ps-6 pb-2">
                    Analysis Created by{" "}
                    <button className="bg-lime-300 px-2 py-2  w-8 rounded-full ">
                      <GiAndroidMask />
                    </button>{" "}
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Regularsale;
