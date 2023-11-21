import { BiLogoDeviantart } from "react-icons/bi";
import { BiSolidDashboard } from "react-icons/bi";
import { AiOutlineTransaction } from "react-icons/ai";
import { BiStats } from "react-icons/bi";
import { TbReport } from "react-icons/tb";
import { RiTeamFill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { BiLogIn } from "react-icons/bi";
import girl from "../../assets/girl.avif";
import { useState } from "react";
import { Link } from "react-router-dom"; 

const Sidebar = () => {
  const sidebarData = [
    {
      id: 1,
      name: "Dashboard",
      icon: <BiSolidDashboard />,
      path: "/",
    },
    {
      id: 2,
      name: "Statistics",
      icon: <BiStats />,
      path: "/",
    },
    {
      id: 3,
      name: "Transaction",
      icon: <AiOutlineTransaction />,
      path: "/",
    },
    {
      id: 4,
      name: "User",
      icon: <RiTeamFill />,
      path: "/user ",
    },
    {
      id: 5,
      name: "Sell Reports",
      icon: <TbReport />,
      path: "/",
    },
    {
      id: 6,
      name: "Setting",
      icon: <IoMdSettings />,
      path: "/",
    },
  ];
  const [barData, setBarData] = useState(sidebarData);

  // For CLoseing and opening sidebar
  const [toggle, setToggle] = useState(false);
  const handleToogle = () => {
     
    if (!toggle) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  // For Drag and drop
  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("id", id);
    console.log(id, "is drag start id");
  };
  const dragOver = (e) => {
    e.preventDefault();
    console.log("Dragged over");
  };

  const handleDrop = (e, droppedItemId) => {
    const draggedId = e.dataTransfer.getData("id");
    console.log(draggedId, "is dragged id");

    // we are getting full object in item
    const item = barData.find((item) => item.id == draggedId);
    console.log(item, "is item which is filter from bardata = draggedid");

    if (!item) {
      return;
    }

    // New array is form without the id we have selected
    const updatedItem = barData.filter((item) => item.id != draggedId);
    console.log(updatedItem, "is bardata.id != dragged id");

    // geting the index where we want to place the div
    const targetedIndex = updatedItem.findIndex(
      (item) => item.id === droppedItemId
    );
    console.log(targetedIndex, "is target index");

    // Using splice method for changing the position
    if (targetedIndex != 0) {
      updatedItem.splice(targetedIndex + 1, 0, item);
      setBarData(updatedItem);
      console.log(updatedItem, "is new bardata");
    } else {
      updatedItem.splice(targetedIndex, 0, item);
      setBarData(updatedItem);
      console.log(updatedItem, "is new bardata");
    }
  };

 
  return (
    <>
      <div className=" flex lg:top-0 lg:left-0 lg:h-[100vh] lg:fixed sm:h-screen sm:top-0 sm:left-0 sm:fixed xs:h-screen xs:top-0 xs:left-0 xs:fixed z-40 ">
        <div
          className={`flex border border-transparent h-[108vh] top-0 left-0 relative fixed bg-white shadow-lg lg:w-[15vw]   md:${
            !toggle ? " w-[4vw]" : " w-[20vw]"
          } `}
        > 
          <aside
            className={`lg:w-[15vw]    md:${
              !toggle ? " w-[4vw]" : " w-[120vw]"
            }  sm:${
              !toggle ? " w-[5vw]" : " w-[120vw]"
            }  xs:w-[4vw]    sm:bg-white sm:border sm:border  md:flex-col border border-transparent  h-[140vh]`}
          >
            {" "}
            <Link to="/">
              <div className="flex  mt-2">
                <span>
                  <BiLogoDeviantart className="mt-3 ms-3 sm:ms-1 xs:ms-1 " />
                </span>
                <p
                  className={`text-lg mt-2 font-bold ms-4   md:${
                    !toggle ? "hidden" : "visible"
                  }  sm:${
                    !toggle ? "hidden" : "visible"
                  } lg:block     `}
                >
                  {" "}
                  Niond{" "}
                </p>
              </div>
            </Link>
            {/* For Buutons  */}
            <div
              className={`mt-6 ms-2 sm:ms-0 flex sm:flex-col md:flex-col border border-transparent bg-white lg:w-[13vw]  md:${
                !toggle ? " w-[3vw]" : " w-[18vw]"
              } sm:${
                !toggle ? " w-[5vw]" : " w-[18vw]"
              } md-4`}
            >
              {barData.map((items) => {
                return (
                  <>
                    <div
                      key={items.id}
                      draggable
                      onDragStart={(e) => handleDragStart(e, items.id)}
                      onDragOver={(e) => dragOver(e)}
                      onDrop={(e) => handleDrop(e, items.id)}
                      className="border border-transparent"
                    >
                      <Link to={items.path}>
                        <button
                          className={` hover:bg-lime-300 lg:py-2 lg:pr-8 md:py-1 md:pr-6 sm:pr-2 sm:py-1  hover:rounded-xl   border border-transparent md:${
                            !toggle ? " w-[2vw]" : "w-[16vw]"
                          } sm:${
                            !toggle ? " w-[4vw]" : "w-[16vw]"
                          } lg:w-[14vw] `}
                        >
                          <div className="flex ">
                            <span onClick={() => handleToogle()}>
                              
                                <div className="mt-2 ms-2  sm:ms-1   hover:rotate-180 transition duration-500 ease-in-out  ">
                                  {items.icon}
                                </div> 
                            </span>
                            <span
                              className={`text-md font-semibold ms-4  lg:block  md:${
                                !toggle ? "hidden" : "visible"
                              } sm:${
                                !toggle ? "hidden" : "visible"
                              }  `}
                            >
                              {items.name}
                            </span>
                          </div>
                        </button>
                      </Link>
                    </div>
                  </>
                );
              })}
            </div>
            {/* Buttons emds */}
            {/* For girl */}
            <div className="flex flex-col mt-24  lg:block md:hidden xs:hidden sm:hidden">
              <div className="container flex justify-center">
                <img
                  src={girl}
                  alt=""
                  className="w-14 h-12 rounded-full mt-10  "
                />
              </div>
              <div className="container justify-center flex ">
                <p className="font-semibold text-lg  mt-4">Nora Watson</p>
              </div>
              <div className="container justify-center flex">
                <p className="font-semibold text-sm text-slate-500  ">
                  Sales Manger
                </p>
              </div>
              <div className="container flex justify-center mt-8">
                <BiLogIn className="mt-2" />
                <p className="text-sm mt-2 ms-2"> Log Out </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
