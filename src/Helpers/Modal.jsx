import { GrFormClose } from "react-icons/gr";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import GlobalForm from "./GLobalForm";
import { createMembers } from "../Components/Sections/Api/api";
// eslint-disable-next-line react/prop-types
const Modal = ({ close }) => {
  const queryClient = useQueryClient();
  const createMutation = useMutation({
    mutationFn: createMembers,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["listkey"] });
    },
  });

  const onSubmit = (data) => {
    createMutation.mutate(data);
    close();
  };

  const inputFields = [
    {
      name: "name",
      type: "text",
      placeholder: "Enter your  name... ",
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
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
      ],
    },
    {
      name: "status",
      type: "select",
      options: [
        { value: "Active", label: "Active" },
        { value: "Inactive", label: "Inactive" },
      ],
    },
  ];

  return (
    <>
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-slate-200 bg-opacity-90 z-50">
        <div className=" container   fixed ">
          <div className="  rounded-2xl bg-slate-100 w-80 h-[68vh] border border-transparent shadow-lg   relative top-[17vh] left-[40%]  ">
            <div className="text-lg px-8  mt-4 underline underline-offset-8">
              Add new Members
            </div>
            <button
              onClick={close}
              className="mt-5 border border-black relative hover:cursor   -top-11 left-72  rounded-full"
            >
              <GrFormClose />
            </button>{" "}
            <div className="flex  ">
              <GlobalForm onSubmit={onSubmit} inputFields={inputFields} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
