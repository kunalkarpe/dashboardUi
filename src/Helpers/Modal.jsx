import { GrFormClose } from "react-icons/gr";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
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

  const schema = yup.object().shape({
    name: yup.string().required("First Name is Required!"),
    email: yup.string().email().required("Email is Required!"),
    gender: yup
      .string()
      .oneOf(["male", "female"])
      .required("Please select gender!"),
    status: yup
      .string()
      .oneOf(["Active", "Inactive"])
      .required("Please select status!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    createMutation.mutate(data);
    close();
  };

  const inputFields = [
    {
      name: "name",
      type: "text",
      placeholder: "Enter your  name... ",
    },

    {
      name: "email",
      type: "email",
      placeholder: "Enter your  email... ",
    },
    {
      name: "gender",
      type: "radio",
      options: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
      ],
    },
    {
      name: "status",
      type: "radio",
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
              <GlobalForm
                onSubmit={onSubmit}
                schema={schema}
                inputFields={inputFields}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
