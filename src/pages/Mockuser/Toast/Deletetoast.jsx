import React from "react";
import { IoIosClose } from "react-icons/io";
import toast from "react-hot-toast";

const Deletetoast = () =>
  toast.success(
    <>
      <div className="flex">
        <span>Member Deleted sucessfully</span>

        <button
          onClick={() => toast.dismiss()}
          className="border border-white relative ms-2 p-0.5 rounded-full"
        >
          <IoIosClose />
        </button>
      </div>
    </>
  );
export default Deletetoast;
