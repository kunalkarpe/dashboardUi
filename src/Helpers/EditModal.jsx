/* eslint-disable react/prop-types */
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { updateMembers } from "../Api/api";
import { useQueryClient } from "@tanstack/react-query";

const EditModal = ({ closed, data }) => {
  const queryClient = useQueryClient();
  // eslint-disable-next-line react/prop-types
  const { name, email, gender, status, id } = data;
  const [value, setValue] = useState({
    id: id,
    name: name,
    email: email,
    gender: gender,
    status: status,
  });

  const updateMutation = useMutation({
    mutationFn: updateMembers,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["listkey"] });
    },
  });
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const handleSubmit = (value, id) => {
    updateMutation.mutate({ id, ...value });
    console.log(value);
    closed();
  };
  return (
    <>
      <div className="fixed -top-8 bottom-0 left-0 right-0 bg-slate-200 bg-opacity-90 z-50">
        <div className=" container   fixed ">
          <div className="  rounded-2xl bg-slate-100 w-80 h-[60vh] border border-transparent shadow-lg top-5 relative top-[25vh] left-[40%]  ">
            <div className="text-lg px-8 ms-8 mt-4 underline underline-offset-8">
              Edit
            </div>
            <button
              onClick={closed}
              className="mt-5 border border-black relative hover:cursor   -top-11 left-72  rounded-full"
            >
              <GrFormClose />
            </button>{" "}
            <div className="-top-20">
              <form
                action=""
                method="post"
                onSubmit={() => handleSubmit(value, value.id)}
              >
                <div className="grid grid-cols-10 py-2">
                  <div className="col-span-8 mx-12 px-2 ">
                    <input
                      name="name"
                      value={value.name}
                      type="text"
                      placeholder="Enter your Name "
                      className="border border-slate-300 rounded-lg ps-2 h-10 w-56"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-10 py-2">
                  <div className="col-span-4 mx-12 px-2">
                    <input
                      name="email"
                      value={value.email}
                      type="email"
                      placeholder="Enter your email"
                      className="border border-slate-300 rounded-lg ps-2  h-10 w-56"
                      onChange={handleChange}
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
                        name="gender"
                        value="male"
                        checked={value.gender == "male"}
                        onChange={handleChange}
                      />
                      <label htmlFor="male" className="ml-1">
                        Male
                      </label>

                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={value.gender == "female"}
                        onChange={handleChange}
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
                          name="status"
                          value="active"
                          checked={value.status == "active"}
                          onChange={handleChange}
                        />
                        <label htmlFor="Active" className="ml-1">
                          Active
                        </label>

                        <input
                          type="radio"
                          name="status"
                          value="inactive"
                          checked={value.status == "inactive"}
                          onChange={handleChange}
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

export default EditModal;
