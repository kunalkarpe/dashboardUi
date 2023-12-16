/* eslint-disable react/prop-types */
import { useMutation } from "@tanstack/react-query";
import { GrFormClose } from "react-icons/gr";
import { updateMembers } from "../Components/Sections/Api/api";
import { useQueryClient } from "@tanstack/react-query";
import GlobalForm from "./GLobalForm";

const EditModal = ({ closed, data }) => {
  const queryClient = useQueryClient();
  // eslint-disable-next-line react/prop-types
  const { name, email, gender, status, id } = data;
  const defaultValues = {
    id: id,
    name: name,
    email: email,
    gender: gender,
    status: status,
  };
  const inputFields = [
    {
      name: "name",
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
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
      ],
    },
    {
      name: "status",
      type: "select",
      options: [
        { value: "active", label: "Active" },
        { value: "inactive", label: "Inactive" },
      ],
    },
  ];

  const updateMutation = useMutation({
    mutationFn: updateMembers,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["listkey"] });
    },
  });

  const handleSubmit = (value, id) => {
    updateMutation.mutate({ id, ...value });
    closed();
  };
  return (
    <>
      <div className="fixed -top-8 bottom-0 left-0 right-0 bg-slate-200 bg-opacity-90 z-50">
        <div className=" container   fixed ">
          <div className="  rounded-2xl bg-slate-100 w-80 h-[68vh] border border-transparent shadow-lg top-5 relative top-[25vh] left-[40%]  ">
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
              <GlobalForm
                onSubmit={handleSubmit}
                defaultValues={defaultValues}
                inputFields={inputFields}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditModal;
