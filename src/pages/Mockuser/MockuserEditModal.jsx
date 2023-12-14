import React, { useState } from "react";
import Edittoast from "./Toast/Edittoast";
import { IoIosClose } from "react-icons/io";
import GlobalForm from "@src/Helpers/GLobalForm";
const MockuserEditModal = ({
  close,
  editData,
  mockData,
  setMockData,
  setShow,
}) => {
  const { id, first_name, last_name, email, gender } = editData;

  const defaultValues = {
    first_name: first_name || "",
    last_name: last_name || "",
    gender: gender || "",
    email: email || "",
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
        { value: "Male", label: "Male" },
        { value: "Female", label: "Female" },
      ],
    },
  ];

  const findEditedIndex = mockData.findIndex((member) => member.id === id);
  const onSubmit = (data) => {
    const newArray = [...mockData];
    newArray.splice(findEditedIndex, 1, data);
    setMockData(newArray);
    close();
    Edittoast();
    setShow(false);
  };

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
            <GlobalForm
              onSubmit={onSubmit}
              inputFields={inputFields}
              defaultValues={defaultValues}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MockuserEditModal;
