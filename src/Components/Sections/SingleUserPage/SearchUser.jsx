import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { LuChevronsUpDown } from "react-icons/lu";
import { Combobox, Transition } from "@headlessui/react";
import { useQuery } from "@tanstack/react-query";
import { fetchMembers } from "../../../Api/api";
const SearchUser = () => {
  const [query, setQuery] = useState("");
  const { id } = useParams();
  // const queryClient = useQueryClient();
  const [selected, setSelected] = useState("");
  const {
    data: allmembers,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["listkey"],
    queryFn: fetchMembers,
  });

  useEffect(() => {
    if (allmembers?.length) {
      const newUser = allmembers?.find((user) => user.id == id);
      setSelected(newUser);
    }
  }, [allmembers, id]);

  if (isLoading) return "Loading";
  if (isError) return "Error";

  const filteredPeople =
    query === ""
      ? allmembers
      : allmembers?.filter((person) => {
          return person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""));
        });
  return (
    <>
      <div className="relative   w-[28vw] border border-transparent  rounded-2xl mt-4 ">
        <Combobox
          value={selected}
          onChange={(e) => {
            console.log(e);
          }}
        >
          <div className="relative mt-1">
            <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
              <Combobox.Label className=" font-semibold pb-2">
                Search For members{" "}
              </Combobox.Label>
              <Combobox.Input
                className="w-full border-transparent py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 z-20"
                displayValue={(person) => person.name}
                onChange={(event) => setQuery(event.target.value)}
              />
              <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2 z-20">
                <LuChevronsUpDown />
              </Combobox.Button>
            </div>
            <Transition
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setQuery("")}
            >
              <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto z-20 rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                {filteredPeople?.length === 0 && query !== "" ? (
                  <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                    No Members Found .
                  </div>
                ) : (
                  filteredPeople?.map((person) => (
                    <Combobox.Option
                      key={person.id}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? "bg-orange-200  text-black" : "text-gray-900"
                        }`
                      }
                      value={person}
                    >
                      {({ selected, active }) => (
                        <>
                          <Link to={`/singleuserdetails/${person.id}`}>
                            <span
                              className={`block truncate  flex ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              <div className=" flex justify-around  border border-slate-300 bg-white rounded-2xl m-2 shadow-lg   p-2">
                                <div className="flex flex-col border border-transparent break-all w-[19vw] ">
                                  <p className="flex  ">{person.name}</p>
                                  <p className="flex break-words w-[18vw]  text-sm text-slate-500  ">
                                    {person.email}
                                  </p>
                                </div>
                                <div className="flex  items-center justify-center self-center">
                                  <Link to={`/singleuserdetails/${person.id}`}>
                                    <MdKeyboardArrowRight />
                                  </Link>
                                </div>
                              </div>
                            </span>
                            {selected ? (
                              <span
                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                  active ? "text-white" : "text-teal-600"
                                }`}
                              ></span>
                            ) : null}
                          </Link>
                        </>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </Transition>
          </div>
        </Combobox>
      </div>
    </>
  );
};
export default SearchUser;
