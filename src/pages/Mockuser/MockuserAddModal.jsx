import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import GlobalForm from "@src/Helpers/GLobalForm";
import NotifyAdd from "./Toast/Addtoast";
import Error from "./Toast/Error";

const MockuserAddModal = ({ close, mockData, setMockData }) => {
  const imgUrlConvert = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const imgReader = reader.result;
        resolve(imgReader);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const onSubmit = async (data) => {
    console.log(data);
    if (data.image[0]) {
      const imageUrl = await imgUrlConvert(data.image[0]);
      data = { ...data, image: imageUrl };
    }

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

  const imageValidate = (value) => {
    const file = value[0];
    if (file.size > 50000) {
      return "File size is greater then 50kb";
    }
    const ImgType = ["image/jpeg", "image/png", "image/svg+xml"];
    if (!ImgType.includes(file.type)) {
      return "File not supported";
    }

    return true;
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
          /\d/.test(value) ? "Numbers are not allowed " : true,
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
          /\d/.test(value) ? "Numbers are not allowed  " : true,
        noSpaces: (value) =>
          /\s/.test(value) ? "Spaces are not allowed " : true,
      },
    },
    {
      name: "email",
      type: "email",
      placeholder: "Enter your  email... ",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i,
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
  return (
    <>
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-slate-200 bg-opacity-90 z-50">
        <div className=" container   fixed ">
          <div className="  rounded-2xl bg-slate-100 w-80 h-[76vh] border border-transparent shadow-lg top-5 relative top-[10vh] left-[40%]  ">
            <div className="text-lg px-8  mt-4 underline underline-offset-8">
              Add new Members
            </div>
            <button
              onClick={close}
              className="mt-5 border border-black relative hover:cursor   -top-11 left-72  rounded-full"
            >
              <IoCloseSharp />
            </button>{" "}
            <div className="-mt-4">
              <GlobalForm onSubmit={onSubmit} inputFields={inputFields} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MockuserAddModal;
