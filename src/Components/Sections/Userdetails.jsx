import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoIosAdd } from "react-icons/io";
import Modal from "../../Helpers/Modal"
const Userdetails = () => {
  const { list } = useSelector((state) => state.allList);
  console.log(list);
  const { id } = useParams();
  console.log(id, "is id");


  const newList = list.filter((user) => user.id == id);
  console.log(newList);

  const userList = list.filter((user) => user.id != id);


  console.log(userList, "is userlist");
  console.log("hii");
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
      <div className="flex border border-transparent  mt-16 p-2">
        <div className="flex justify-between border border-transparent w-full">
          <div className="flex border border-transparent px-8 py-2">
            {newList.map((user) => {
              return (
                <div
                  className="container flex flex-col shadow-lg rounded-xl mt-2    w-[40vw] h-[56vh] bg-slate-50"
                  key={user.id}
                >
                  <img
                    src={user.src}
                    className="h-36 mt-2  w-32 rounded-full relative flex left-[29vw]"
                    alt=""
                  />
                  <div className="text-2xl font-semibold -mt-28 ms-8 flex">
                    Name : {user.name}
                  </div>
                  <div className="text-lg font-semibold mt-5 ms-8 ">
                    Title : {user.title}
                  </div>
                  <div className="mt-5 ms-9 flex flex-col">
                    <span className="text-md font-semibold flex">
                      Descripton :
                    </span>
                    <p className="mt-2 text-md font-roboto flex">
                      {user.name} is a been working as a {user.title} for last 2
                      years
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col px-8 py-4">
            <div className=" flex  flex-col list ms-20 border border-transparent w-96 rounded-2xl shadow-lg bg-slate-50 pb-8">
              <h6 className="flex  text-lg font-semibold ms-5 mt-5 underline underline-offset-8 ">
                List Of User
              </h6>
              <div className="container mt-5 border border-transparent px-1 flex flex-col">
                {userList.map((user) => {
                  return (
                    <>
                      <div className=" flex justify-around  border border-transparent rounded-2xl m-2 shadow-lg bg-zinc-200 p-2">
                        <img
                          src={user.src}
                          alt=""
                          className="h-8 w-7 rounded-full col-span-1 mt-2"
                        />
                        <div className="flex flex-col border border-transparent ">
                          <p className="flex  ">{user.name}</p>
                          <p className="flex   text-sm text-slate-500  ">
                            {user.title}
                          </p>
                        </div>
                        <div className="flex  items-center justify-center self-center">
                          <Link to={`/userdetails/${user.id}`}>
                            <MdKeyboardArrowRight />
                          </Link>
                        </div>
                      </div>
                    </>
                  );
                })}
                <button
                  className=" flex border rounded-2xl text-sm border-transparent ms-16 my-2  w-[16vw] py-2 bg-blue-100 justify-center"
                  onClick={openModal}
                >
                  <div className="flex px-0.5 bg-white border rounded-full border-transparent ">
                    <IoIosAdd className="h-5" />
                  </div>
                  <div className="flex"> Add More members</div>
                </button>
                {show && <Modal close={closeModal} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Userdetails;
