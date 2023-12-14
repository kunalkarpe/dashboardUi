import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import GlobalForm from "@src/Helpers/GLobalForm";
import NotifyAdd from "./Toast/Addtoast";
import Error from "./Toast/Error";

const MockuserAddModal = ({ close, mockData, setMockData }) => {
  const onSubmit = (data) => {
    const userExist = mockData.some(
      (person) =>
        person.first_name.toLowerCase() === data.first_name.toLowerCase()
    );
    if (userExist) {
      Error();
      close();
    } else {
      setMockData([data, ...mockData]);
      close();
      NotifyAdd();
    }
  };

  const inputFields = [
    {
      name: "first_name",
      type: "text",
      placeholder: "Enter your first name... ",
      pattern: {
        value: /^[a-zA-Z\s]+$/,
        message: "Cannot use numbers and special character in Name",
      },
    },
    {
      name: "last_name",
      type: "text",
      placeholder: "Enter your last name...",
      pattern: {
        value: /^[a-zA-Z\s]+$/,
        message: "Cannot use numbers and special character in Name",
      },
    },
    {
      name: "email",
      type: "email",
      placeholder: "Enter your  email... ",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: "Invalid email address",
      },
    },
    {
      name: "gender",
      type: "select",
      options: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
      ],
    },
  ];
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
              <IoCloseSharp />
            </button>{" "}
            <div className="-top-20">
              <GlobalForm onSubmit={onSubmit} inputFields={inputFields} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MockuserAddModal;
