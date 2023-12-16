import React, { useState } from "react";
import Edittoast from "./Toast/Edittoast";
import { IoIosClose } from "react-icons/io";
import GlobalForm from "@src/Helpers/GLobalForm";
import mockdata from "./MocakData/NewMockData";
const MockuserEditModal = ({
  close,
  editData,
  mockData,
  setMockData,
  setShow,
}) => {
  const { id, first_name, last_name, email, gender, image } = editData;
  const imageValidate = (value) => {
    const file = value[0];
    if (file.size > 50000) {
      return "File size is greater then 50kb";
    }
    const ImgType = ["image/.jpg", "image/.png", "image/.svg"];
    if (!ImgType.includes(file.type)) {
      return "File not supported";
    }

    return true;
  };
  const defaultValues = {
    first_name: first_name || "",
    last_name: last_name || "",
    gender: gender || "",
    email: email || "",
    image: image || "",
  };
  const inputFields = [
    {
      name: "first_name",
      type: "text",
      placeholder: "Enter your first name... ",
      pattern: {
        value: /^[a-zA-Z\s0-9]+$/,
        message: "Please Enter Albhabets Only  ",
      },
      validate: {
        noNumbers: (value) =>
          /\d/.test(value) ? "Numbers are not allowed  " : true,
        noSpaces: (value) =>
          /\s/.test(value) ? "Spaces are not allowed  " : true,
      },
    },
    {
      name: "last_name",
      type: "text",
      placeholder: "Enter your last name...",
      pattern: {
        value: /^[a-zA-Z\s0-9]+$/,
        message: "Please Enter Albhabets Only  ",
      },
      validate: {
        noNumbers: (value) =>
          /\d/.test(value) ? "Numbers are not allowed " : true,
        noSpaces: (value) =>
          /\s/.test(value) ? "Spaces are not allowed  " : true,
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
    {
      name: "image",
      type: "file",
      validate: imageValidate,
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
          <div className="  rounded-2xl bg-slate-100 w-80 h-[72vh] border border-transparent shadow-lg top-5 relative top-[12vh] left-[40%]  ">
            <div className="text-lg px-8  mt-4 underline underline-offset-8">
              Edit Members
            </div>
            <button
              onClick={close}
              className="mt-5 border border-black relative hover:cursor   -top-11 left-72  rounded-full"
            >
              <IoIosClose />
            </button>{" "}
            <div className="-mt-4">
              <GlobalForm
                onSubmit={onSubmit}
                inputFields={inputFields}
                defaultValues={defaultValues}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MockuserEditModal;
