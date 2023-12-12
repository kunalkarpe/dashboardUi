import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

const MockuserAddModal = ({ close, mockData, setMockData }) => {
  const notifyAdd = () => toast.success("People added succesfully!");
  const notifyAlert = () => toast.error("Please fill the data");
  const notifyUserExist = () => toast.error("User already exist");
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    const userExist = mockData.some(
      (person) =>
        person.first_name.toLowerCase() === data.first_name.toLowerCase()
    );
    if (
      data.first_name == "" ||
      data.last_name == "" ||
      data.email == "" ||
      data.gender == ""
    ) {
      notifyAlert();
    } else if (userExist) {
      notifyUserExist();
      close();
    } else {
      setMockData([data, ...mockData]);
      close();
      notifyAdd();
    }
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
              <IoCloseSharp />
            </button>{" "}
            <div className="-top-20">
              <form method="post" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-10 py-2">
                  <div className="col-span-8 mx-12 px-2 ">
                    <input
                      name="first_name"
                      {...register("first_name", {
                        required: true,
                        minLength: 3,
                      })}
                      type="text"
                      placeholder="Enter your first name.. "
                      className="border border-slate-300 rounded-lg ps-2 h-10 w-56"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-10 py-2">
                  <div className="col-span-8 mx-12 px-2 ">
                    <input
                      name="last_name"
                      {...register("last_name")}
                      type="text"
                      placeholder="Enter your last name.. "
                      className="border border-slate-300 rounded-lg ps-2 h-10 w-56"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-10 py-2">
                  <div className="col-span-4 mx-12 px-2">
                    <input
                      name="email"
                      {...register("email")}
                      type="email"
                      placeholder="Enter your email"
                      className="border border-slate-300 rounded-lg ps-2  h-10 w-56"
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
                        {...register("gender")}
                        value="Male"
                      />
                      <label htmlFor="male" className="ml-1">
                        Male
                      </label>

                      <input
                        type="radio"
                        {...register("gender")}
                        value="Female"
                        className="ml-4"
                      />
                      <label htmlFor="female" className="ml-1">
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

export default MockuserAddModal;
