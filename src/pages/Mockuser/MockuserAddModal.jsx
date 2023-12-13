import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import toast from "react-hot-toast";
import * as yup from "yup";
import GlobalForm from "@src/Helpers/GLobalForm";

const MockuserAddModal = ({ close, mockData, setMockData }) => {
  const notifyAdd = () => toast.success("People added succesfully!");
  const notifyUserExist = () => toast.error("User already exist");

  const onSubmit = (data) => {
    const userExist = mockData.some(
      (person) =>
        person.first_name.toLowerCase() === data.first_name.toLowerCase()
    );
    if (userExist) {
      notifyUserExist();
      close();
    } else {
      setMockData([data, ...mockData]);
      close();
      notifyAdd();
    }
  };

  const inputFields = [
    {
      name: "first_name",
      type: "text",
      placeholder: "Enter your first name... ",
    },
    {
      name: "last_name",
      type: "text",
      placeholder: "Enter your last name...",
    },
    {
      name: "email",
      type: "email",
      placeholder: "Enter your  email... ",
    },
    {
      name: "gender",
      type: "radio",
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
