import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Listbox, Transition } from "@headlessui/react";
import { RiExpandUpDownLine } from "react-icons/ri";

const GlobalForm = ({ onSubmit, inputFields, defaultValues }) => {
  const {
    control,
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
                className="flex flex-col justify-center items-center py-1 "
              >
                {fields.type === "select" ? (
                  <>
                    <div
                      key={index}
                      className="border border-transparent h-12 flex   w-52 items-center "
                    >
                      <Controller
                        rules={{ required: `${fields.name} is required ` }}
                        name={fields.name}
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <Listbox
                            value={field.value}
                            onChange={(value) => field.onChange(value)}
                          >
                            <Listbox.Label>{fields.name}: </Listbox.Label>
                            <Listbox.Button className="relative ml-4 w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                              <span className="block truncate">
                                {field.value || `Select ${fields.name}..`}
                              </span>
                              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <RiExpandUpDownLine
                                  className="h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                              </span>
                            </Listbox.Button>

                            <Transition
                              leave="transition ease-in duration-100"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <Listbox.Options className="absolute -translate-x-36 z-10   translate-y-4 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                {fields?.options?.map((options) => {
                                  return (
                                    <>
                                      <Listbox.Option
                                        className={({ active }) =>
                                          `relative cursor-default  select-none py-2 pl-10  pr-4  z-10 ${
                                            active
                                              ? "bg-amber-100 text-amber-900"
                                              : "text-gray-900"
                                          }`
                                        }
                                        value={options?.value}
                                      >
                                        {options?.value}
                                      </Listbox.Option>
                                    </>
                                  );
                                })}
                              </Listbox.Options>
                            </Transition>
                          </Listbox>
                        )}
                      />
                    </div>
                    {errors[fields.name] && (
                      <span className="flex text-xs text-red-500 w-44 border border-transparent -ms-6">
                        {" "}
                        {errors[fields.name].message}{" "}
                      </span>
                    )}
                  </>
                ) : (
                  ""
                )}

                {fields.type === "file" && fields.name === "image" ? (
                  <>
                    <div className="border border-transparent h-[9vh]">
                      <input
                        name={fields.name}
                        {...register(fields.name, {
                          required: `${fields.name} is required`,
                          validate: fields.validate,
                        })}
                        type={fields.type}
                        accept=".jpg, .jpeg, .png, .svg"
                        className="border border-slate-300 rounded-lg ps-2 h-10 w-56  p-1"
                      />
                      <div>
                        {errors[fields.name] && (
                          <span className="flex text-xs text-red-500 w-44 border border-transparent">
                            {errors[fields.name].message}
                          </span>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  ""
                )}

                {fields.type === "text" ||
                fields.type === "email" ||
                fields.type === "password" ? (
                  <>
                    <div className="border border-transparent h-[9vh] ">
                      <input
                        name={fields.name}
                        {...register(fields.name, {
                          required: `${fields.name} is required`,
                          pattern: fields.pattern,

                          validate: fields.validate,
                        })}
                        type={fields.type}
                        placeholder={fields.placeholder}
                        className="border border-slate-300 rounded-lg ps-2 h-10 w-56  p-1 "
                      />
                      <div>
                        {errors[fields.name] && (
                          <span className="flex text-xs text-red-500 w-44 border   border-transparent">
                            {errors[fields.name].message}
                          </span>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
            </>
          );
        })}

        <button
          className="border border-transparent fixed relative rounded-lg bg-lime-300   mt-4 w-44  mx-20"
          type="submit"
        >
          <p className="p-0.5 font-roboto">Submit</p>{" "}
        </button>
      </form>
    </>
  );
};

export default GlobalForm;
