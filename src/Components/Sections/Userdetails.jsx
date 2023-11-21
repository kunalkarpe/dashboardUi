import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoIosAdd } from "react-icons/io";
import Modal from "../../Helpers/Modal";
import { Combobox,   Transition } from "@headlessui/react";
import { LuChevronsUpDown } from "react-icons/lu"; 

const Userdetails = () => {
  const { list } = useSelector((state) => state.allList);
  console.log(list);
  const { id } = useParams();
  // console.log(id, "is id");

  const newList = list.filter((user) => user.id == id);
  // console.log(newList);

  const userList = list.filter((user) => user.id != id);

  // console.log(userList, "is userlist");
  // console.log("hii");
  const [show, setShow] = useState(false);
  const closeModal = () => {
    setShow(false);
  };

  const openModal = () => {
    console.log("hii");
    setShow(true);
  };

  // For searching
  const [selected, setSelected] = useState(list[0]);
  const [query, setQuery] = useState("");
  const filteredPeople =
    query === ""
      ? list
      : list.filter((person) => {
          return person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""));
        }); 
  
  // console.log(filteredPeople, "is filtered people");
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
            <div className="bg-white px-4 border border-transparent rounded-2xl shadow-2xl ms-20">
              <div className="relative   w-[28vw] border border-transparent  rounded-2xl mt-4 ">
                
                <Combobox value={selected} onChange={setSelected}>
                  <div className="relative mt-1">
                    <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                    <Combobox.Label className=" font-semibold pb-2">Search For members </Combobox.Label>
                      <Combobox.Input
                        className="w-full border-transparent py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 z-20"
                        displayValue={(person) => person.name}
                        onChange={(event) => setQuery(event.target.value)}
                      />
                      <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2 z-20">
                        <LuChevronsUpDown />
                      </Combobox.Button>
                    </div>
                    <Transition
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                      afterLeave={() => setQuery("")}
                    >
                      <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto z-20 rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                        {filteredPeople.length === 0 && query !== "" ? (
                          <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                            No Members Found .
                          </div>
                        ) : (
                          filteredPeople.map((person) => (
                            <Combobox.Option
                              key={person.id}
                              className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                  active
                                    ? "bg-orange-200  text-black"
                                    : "text-gray-900"
                                }`
                              }
                              value={person}
                            >
                              {({ selected, active }) => (
                                <>
                                  <Link to={`/userdetails/${person.id}`}>
                                    <span
                                      className={`block truncate  flex${
                                        selected ? "font-medium" : "font-normal"
                                      }`}
                                    >
                                      {/* {person.name} */}
                                      <div className=" flex justify-around  border border-slate-300 bg-white rounded-2xl m-2 shadow-lg   p-2">
                                        <img
                                          src={person.src}
                                          alt=""
                                          className="h-8 w-7 rounded-full col-span-1 mt-2"
                                        />
                                        <div className="flex flex-col border border-transparent ">
                                          <p className="flex  ">
                                            {person.name}
                                          </p>
                                          <p className="flex   text-sm text-slate-500  ">
                                            {person.title}
                                          </p>
                                        </div>
                                        <div className="flex  items-center justify-center self-center">
                                          <Link
                                            to={`/userdetails/${person.id}`}
                                          >
                                            <MdKeyboardArrowRight />
                                          </Link>
                                        </div>
                                      </div>
                                    </span>

                                    {selected ? (
                                      <span
                                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                          active
                                            ? "text-white"
                                            : "text-teal-600"
                                        }`}
                                      >
                                        {/* <FaAngleRight /> */}
                                      </span>
                                    ) : null}
                                  </Link>
                                </>
                              )}
                            </Combobox.Option>
                          ))
                        )}
                      </Combobox.Options>
                    </Transition>
                  </div>
                </Combobox> 
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
      </div>
    </>
  );
};

export default Userdetails;
