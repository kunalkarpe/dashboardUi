import React from "react";
import { IoIosClose } from "react-icons/io";
import toast from "react-hot-toast";

const Error = () =>
  toast.error(
    <>
      <div className="flex">
        <span>User Already Existed !</span>

        <button
          onClick={() => toast.dismiss()}
          className="border border-white relative ms-2 p-0.5 rounded-full"
        >
          <IoIosClose />
        </button>
      </div>
    </>
  );

export default Error;
