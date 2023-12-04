import { AiTwotoneVideoCamera } from "react-icons/ai";
import boy1 from "../../../assets/boy1.avif";
import boy2 from "../../../assets/boy2.jpg";
import boy3 from "../../../assets/boy3.jpg";
import TeamMembers from "./Teammembers";
const Rightsidebar = () => {
  return (
    <>
      <section className="flex border border-transparent lg:w-[17vw]  md:w-full md:justify-around sm:w-full sm:justify-around ">
        <div className="flex lg:flex-col lg:w-full mx-2 mt-4 md:w-full md:justify-between  sm:w-full sm:justify-between">
          <div className="flex items-center border-transparent border-transparent-black lg:flex-col md:flex-col bg-[#219AA2] text-white  rounded-xl lg:w-[16vw] md:w-[34vw] md:h-52 sm:w-[40vw] sm:h-52 sm:flex-col sm:ms-4">
            <p className="text-lg mt-4 ms-4">Upgrade to Pro</p>
            <p className="text-2xl ms-4 mt-6">
              $4.20 /<span className="text-sm">Month</span>
            </p>
            <p className="text-sm mx-4 mt-2">$50 Billed Annually</p>

            <button className=" rounded-lg bg-lime-300 border-transparent  my-6 w-fit ms-4 px-2 border-transparent-transparent text-sm text-black p-1">
              Upgrade Now
            </button>
          </div>
          <div className="flex flex-col bg-white lg:mt-8 lg:me-8  md:mt-4 md:me-4 rounded-xl md:border-transparent  lg:w-[15vw] md:w-[30vw] md:h-52 md:mt-0 md:ms-4   sm:w-[40vw] sm:h-52 sm:mt-0 sm:-ms-4">
            <div className=" flex flex-col space-x-4 mt-4">
              <div className="flex">
                <div className="border-transparent border-transparent-transparent rounded-full ms-4 flex items-center bg-[#B9ABFF] p-1">
                  <AiTwotoneVideoCamera className="h-4  p-0.5" />
                </div>
                <div className="font-semibold ms-4">Daily Meeting</div>
              </div>
              <p className="text-xs  ms-12 mt-1.5 mb-4 ">
                12+ persons <span className="text-xs  ms-2">8.30 pm</span>
              </p>

              <div className="text-xs mt-4 ms-8  flex ">
                <div className="flex ">
                  <img
                    src={boy1}
                    alt=""
                    className="h-5 border-transparent border-transparent-transparent rounded-full  "
                  />
                </div>
                <div className="flex -left-2 relative ">
                  <img
                    src={boy2}
                    alt=""
                    className="h-5 border-transparent border-transparent-transparent rounded-full   "
                  />
                </div>
                <div className="flex -left-4 relative ">
                  <img
                    src={boy3}
                    alt=""
                    className="h-5 border-transparent border-transparent-transparent rounded-full   "
                  />
                </div>

                <div className="flex flex-col  ">
                  <p className="flex text-sm font-semibold">
                    They will conduct{" "}
                  </p>
                  <p className="flex text-sm font-semibold">the meeting</p>
                </div>
              </div>

              <button className="text-xs text-white bg-black rounded-lg p-2 mt-5 mb-5 ms-4 w-fit ">
                Click For meeting link
              </button>
            </div>
          </div>
          <TeamMembers />
        </div>
      </section>
    </>
  );
};
export default Rightsidebar;
