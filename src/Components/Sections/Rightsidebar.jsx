import { useState } from "react";
import { AiTwotoneVideoCamera } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { IoIosAdd } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import Modal from "../../Helpers/Modal";
import boy1 from "../../assets/boy1.avif";
import boy2 from "../../assets/boy2.jpg";
import boy3 from "../../assets/boy3.jpg";
import { useDispatch, useSelector } from "react-redux";
import { addToList } from "../../Redux/Slice"; 


const fetchData = async () => {
   
  const res = await fetch("https://gorest.co.in/public/v2/users?page=1&per_page=4", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization":
        "Bearer 220b6e43e8696b05af547f479f4f2727fb0a688d1bd1c4add2ea9c9ee31f1126",
    },
  });
  const response = await res.json();
  // console.log(response, "is res");
   
  return response;
};

const Rightsidebar = () => { 
  const dispatch = useDispatch()
  const {  data: response } = useQuery({
    queryKey: ["memberkey"],
    queryFn: fetchData,
  });
  console.log(response, "is new res");
  if(response){
    dispatch(addToList(response))
  }
   
  const {list} = useSelector((state)=>state.allList)
  console.log(list)


  const [show, setShow] = useState(false);
  const closeModal = () => {
    setShow(false);
  };
  const openModal = () => {
    console.log("hii");
    setShow(true);
  };
 
  return (
    <>
      <div className="flex border border-transparent lg:w-[17vw]  md:w-full md:justify-around sm:w-full sm:justify-around ">
        <div className="flex lg:flex-col lg:w-full mx-2 mt-4 md:w-full md:justify-between  sm:w-full sm:justify-between">
          {/* First Box */}
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

          {/* Second Box */}
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

          {/* Third BOx */}
          <div className="flex bg-white lg:mt-4 lg:mb-2 lg:ms-3 rounded-xl lg:w-[16.5vw] md:w-[35vw] md:ms-0 md:me-2 sm:w-[35vw] sm:ms-0 sm:me-2 md:h-fit border border-transparent">
            <div className="flex flex-col lg:mt-4 md:mt-2 ">
              <p className="text-lg font-bold lg:ms-4 lg:mb-4 md:ms-2 md:mb-2 sm:ms-4 sm:mb-2 sm:mt-2 font-roboto">
                Team Member
              </p>
              
              {  response?.map((data, index) => {
                return (
                  <>
                    <div
                      className="flex justify-around w-[16.5vw] lg:my-2 md:my-1 sm:my-1  border border-transparent rounded-2xl shadow-lg"
                      key={index}
                    >
                      <div className="flex flex-col p-2 w-[15vw]">
                        <div className="flex lg:ms-4 md:ms-0 sm:ms-1 text-sm">
                          {data.name}
                        </div>
                        <div className="flex text-xs  lg:ms-4 md:ms-0  sm:ms-1 text-slate-400 text-ellipsis overflow-hidden">
                          {data.email}
                        </div>
                      </div>
                      <div className="flex lg:ms-2 md:me-4 sm:me-2 items-center justify-center self-center">
                      <Link to={`/userdetails/${data.id}`}>
                        <MdKeyboardArrowRight />
                      </Link>
                    </div>
                    </div>
                  </>
                );
              })}
              {/* {response.map((item) => {
                return (
                  <div
                    className="flex justify-between w-[17vw] lg:my-2 md:my-1 sm:my-1  border border-black"
                    key={item.id}
                  >
                    
                     
                    <div className="flex flex-col ">
                      <div className="flex lg:ms-4 md:ms-0 sm:ms-1 text-sm">
                        {item.name}
                      </div>
                      <div className="flex text-xs  lg:ms-4 md:ms-0  sm:ms-1 text-slate-400">
                        {item.email}
                      </div>
                    </div>

                   
                    <div className="flex lg:ms-2 md:me-4 sm:me-2 items-center justify-center self-center">
                      <Link to={`/userdetails/${item.id}`}>
                        <MdKeyboardArrowRight />
                      </Link>
                    </div>
                  </div>
                );
              })} */}

              <button
                className="border-transparent rounded-2xl text-sm border-transparent-transparent lg:ms-4 lg:my-2 lg:py-1.5  lg:px-9 md:px-8 md:ms-2 md:my-2  md:py-1.5  sm:px-8 sm:ms-2 sm:my-2  sm:py-1.5 bg-blue-100 flex space-x-2"
                onClick={openModal}
              >
                <div className="px-0.5 bg-white border-transparent rounded-full border-transparent-transparent ">
                  <IoIosAdd className="h-5" />
                </div>
                <div> Add More members</div>
              </button>
              {show && <Modal close={closeModal} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rightsidebar;
