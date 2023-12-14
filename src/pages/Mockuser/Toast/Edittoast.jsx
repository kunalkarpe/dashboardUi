import React from "react";
import { IoIosClose } from "react-icons/io";
import toast from "react-hot-toast";
const Edittoast = () =>
  toast.success(
    <>
      <div className="flex">
        <span>Member Edited sucessfully</span>

        <button
          onClick={() => toast.dismiss()}
          className="border border-white relative ms-2 p-0.5 rounded-full"
        >
          <IoIosClose />
        </button>
      </div>
    </>
  );

export default Edittoast;
