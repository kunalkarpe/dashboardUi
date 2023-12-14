import React, { useState } from "react";
import Edittoast from "./Toast/Edittoast";
import { IoIosClose } from "react-icons/io";

const MockuserEditModal = ({
  close,
  editData,
  mockData,
  setMockData,
  setShow,
}) => {
  const { id, first_name, last_name, email, gender } = editData;
  const [value, setValue] = useState({
    id: id,
    first_name: first_name,
    last_name: last_name,
    gender: gender,
    email: email,
  });
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArray = [...mockData];
    newArray.splice(findEditedIndex, 1, value);
    setMockData(newArray);
    close();
    Edittoast();
    setShow(false);
  };

  const findEditedIndex = mockData.findIndex((data) => data.id === id);
  return (
    <>
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-slate-200 bg-opacity-90 z-50">
        <div className=" container   fixed ">
          <div className="  rounded-2xl bg-slate-100 w-80 h-[60vh] border border-transparent shadow-lg top-5 relative top-[25vh] left-[40%]  ">
            <div className="text-lg px-8  mt-4 underline underline-offset-8">
              Add new Members
            </div>
            <button
              onClick={close}
              className="mt-5 border border-black relative hover:cursor   -top-11 left-72  rounded-full"
            >
              <IoIosClose />
            </button>{" "}
            <div className="-top-20">
              <form action="" method="post" onSubmit={handleSubmit}>
                <div className="grid grid-cols-10 py-2">
                  <div className="col-span-8 mx-12 px-2 ">
                    <input
                      name="first_name"
                      value={value.first_name}
                      type="text"
                      placeholder="Enter your first name.. "
                      className="border border-slate-300 rounded-lg ps-2 h-10 w-56"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-10 py-2">
                  <div className="col-span-8 mx-12 px-2 ">
                    <input
                      name="last_name"
                      value={value.last_name}
                      type="text"
                      placeholder="Enter your last name.. "
                      className="border border-slate-300 rounded-lg ps-2 h-10 w-56"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-10 py-2">
                  <div className="col-span-4 mx-12 px-2">
                    <input
                      name="email"
                      value={value.email}
                      type="email"
                      placeholder="Enter your email"
                      className="border border-slate-300 rounded-lg ps-2  h-10 w-56"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex ">
                  <div className="col-span-4 mx-12 px-2">
                    <label className="border-b-2  border-slate-300">
                      Select Gender
                    </label>
                    <div className="mt-2">
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={value.gender === "Male"}
                        onChange={handleChange}
                      />
                      <label htmlFor="Male" className="ml-1">
                        Male
                      </label>

                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={value.gender === "Female"}
                        onChange={handleChange}
                        className="ml-4"
                      />
                      <label htmlFor="Female" className="ml-1">
                        Female
                      </label>
                    </div>
                  </div>
                </div>

                <button
                  className="border border-transparent   rounded-lg bg-lime-300   mt-4 w-44  mx-20"
                  type="submit"
                >
                  <p className="p-0.5 font-roboto">Submit</p>{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MockuserEditModal;
