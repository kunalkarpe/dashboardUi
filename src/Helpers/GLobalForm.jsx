import React from "react";
import { useForm } from "react-hook-form";

const GlobalForm = ({ onSubmit, inputFields }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      <form method="post" onSubmit={handleSubmit(onSubmit)}>
        {inputFields.map((fields, index) => {
          return (
            <>
              <div
                key={index}
                className="flex flex-col justify-center items-center py-1"
              >
                {fields.type === "radio" ? (
                  <>
                    <div
                      key={index}
                      className="border border-transparent flex justify-between w-52"
                    >
                      <label htmlFor={fields.name}>{fields.name} :</label>
                      {fields?.options.map((data) => {
                        return (
                          <>
                            <div className="flex  items-center justify-center  justify-between  ">
                              <input
                                type={fields.type}
                                {...register(fields.name, {
                                  required: `${fields.name} is required`,
                                })}
                                value={data.value}
                              />

                              <label className="ms-1" htmlFor={data.label}>
                                {data.label}
                              </label>
                            </div>
                          </>
                        );
                      })}
                    </div>
                    {errors[fields.name] && (
                      <span className="flex text-xs text-red-500 w-44 border border-transparent -ms-6">
                        {" "}
                        {errors[fields.name].message}{" "}
                      </span>
                    )}
                  </>
                ) : (
                  <>
                    <input
                      name={fields.name}
                      {...register(fields.name, {
                        required: `${fields.name} is required`,
                      })}
                      type={fields.type}
                      placeholder={fields.placeholder}
                      className="border border-slate-300 rounded-lg ps-2 h-10 w-56"
                    />{" "}
                    {errors[fields.name] && (
                      <span className="flex text-xs text-red-500 w-44 border -ms-8 border-transparent">
                        {errors[fields.name].message}
                      </span>
                    )}
                  </>
                )}
              </div>
            </>
          );
        })}

        <button
          className="border border-transparent   rounded-lg bg-lime-300   mt-4 w-44  mx-20"
          type="submit"
        >
          <p className="p-0.5 font-roboto">Submit</p>{" "}
        </button>
      </form>
    </>
  );
};

export default GlobalForm;
