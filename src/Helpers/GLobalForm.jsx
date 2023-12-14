import React from "react";
import { useForm } from "react-hook-form";

const GlobalForm = ({ onSubmit, inputFields, defaultValues }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: defaultValues });
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
                {fields.type === "select" ? (
                  <>
                    <div
                      key={index}
                      className="border border-transparent flex   w-52"
                    >
                      <label htmlFor={fields.name}>{fields.name} : </label>
                      <select
                        className="ms-2 border border-slate-400 rounded-lg outline-none"
                        {...register(fields.name, {
                          required: `${fields.name} is required`,
                        })}
                      >
                        <option key={index} value="">
                          Select...
                        </option>
                        {fields?.options.map((data) => {
                          return (
                            <>
                              <option value={data.value}>{data.label}</option>
                            </>
                          );
                        })}
                      </select>
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
                        pattern: fields.pattern,
                      })}
                      type={fields.type}
                      placeholder={fields.placeholder}
                      className="border border-slate-300 rounded-lg ps-2 h-10 w-56"
                    />
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
