import { GrFormClose } from "react-icons/gr";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createMembers } from "../Api/api";
// eslint-disable-next-line react/prop-types
const Modal = ({ close }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  const queryClient = useQueryClient();
  const createMutation = useMutation({
    mutationFn: createMembers,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["listkey"] });
    },
  });
  const data = {
    name: name,
    email: email,
    gender: gender,
    status: status,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createMutation.mutate(data);
    close();
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
              <GrFormClose />
            </button>{" "}
            <div className="-top-20">
              <form action="" method="post" onSubmit={handleSubmit}>
                <div className="grid grid-cols-10 py-2">
                  <div className="col-span-8 mx-12 px-2 ">
                    <input
                      name="name"
                      value={name}
                      type="text"
                      placeholder="Enter your Name "
                      className="border border-slate-300 rounded-lg ps-2 h-10 w-56"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-10 py-2">
                  <div className="col-span-4 mx-12 px-2">
                    <input
                      name="email"
                      value={email}
                      type="email"
                      placeholder="Enter your email"
                      className="border border-slate-300 rounded-lg ps-2  h-10 w-56"
                      onChange={(e) => setEmail(e.target.value)}
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
                        value="male"
                        checked={gender === "male"}
                        onChange={(e) => setGender(e.target.value)}
                      />
                      <label htmlFor="male" className="ml-1">
                        Male
                      </label>

                      <input
                        type="radio"
                        value="female"
                        checked={gender === "female"}
                        onChange={(e) => setGender(e.target.value)}
                        className="ml-4"
                      />
                      <label htmlFor="female" className="ml-1">
                        Female
                      </label>
                    </div>
                    <div className="flex flex-col mt-2">
                      <label className="border-b-2  border-slate-300">
                        Set Status
                      </label>
                      <div className="mt-1">
                        <input
                          type="radio"
                          value="Active"
                          checked={status === "Active"}
                          onChange={(e) => setStatus(e.target.value)}
                        />
                        <label htmlFor="Active" className="ml-1">
                          Active
                        </label>

                        <input
                          type="radio"
                          value="Inactive"
                          checked={status === "Inactive"}
                          onChange={(e) => setStatus(e.target.value)}
                          className="ml-2"
                        />
                        <label htmlFor="Inactive" className="ml-1">
                          Inactive
                        </label>
                      </div>
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

export default Modal;
