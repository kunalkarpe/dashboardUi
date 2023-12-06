import { IoIosSearch } from "react-icons/io";
import { Fragment, useState } from "react";
import useSearchBar from "./useSearchBar";
import { Combobox, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import data from "./searchBar.constants";
import { useEffect } from "react";
const SearchBar = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const {
    handleKeyPress,
    selected,
    setSelected,
    handleSearch,
    dropdownList,
    setQuery,
    query,
    inputRef,
  } = useSearchBar();
  useEffect(() => {
    if (selected) {
      navigate(selected.path);
    }
  }, [selected]);

  return (
    <>
      <div className="flex   outline-none  w-72">
        <Combobox value={selected} onChange={setSelected}>
          <div className="relative mt-1   w-full">
            <div className="relative w-full cursor-default overflow-hidden rounded-2xl bg-white text-left shadow-md focus:outline-none  focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm  ">
              <Combobox.Input
                className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 outline-none"
                type="text"
                placeholder="Search here...."
                displayValue={(person) => person.name}
                onChange={(event) => {
                  setQuery(event.target.value);
                }}
                ref={inputRef}
                onFocus={() => setShow(true)}
                onBlur={() => setShow(false)}
                onKeyDown={handleKeyPress}
              />
              <Combobox.Button
                className=" flex absolute inset-y-0 right-0 items-center p-2 m-1 rounded-full bg-lime-300"
                onClick={handleSearch}
              >
                <IoIosSearch color="grey" />
              </Combobox.Button>
            </div>
            <Transition
              as={Fragment}
              show={show}
              leave="transition ease-in-out duration-00"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setQuery("")}
            >
              <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-2xl bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                {dropdownList.length === 0 && query !== "" ? (
                  <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                    Nothing found.
                  </div>
                ) : (
                  dropdownList.map((person) => (
                    <Combobox.Option
                      key={person.id}
                      onClick={() => {
                        navigate(person.path);
                      }}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4  hover:cursor-pointer hover:bg-lime-300 text-black ${
                          active ? "bg-lime-300 text-black" : "text-gray-900"
                        }`
                      }
                      value={person}
                    >
                      {({ selected, active }) => (
                        <>
                          <span>
                            <span
                              className={`block truncate ${
                                selected
                                  ? "font-medium disabled  "
                                  : "font-normal"
                              }`}
                            >
                              {person.name}
                            </span>
                          </span>
                          {selected ? (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                active ? "text-white" : "text-teal-600"
                              }`}
                            ></span>
                          ) : null}
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

export default SearchBar;
