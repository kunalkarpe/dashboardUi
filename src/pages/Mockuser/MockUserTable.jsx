import React from "react";
import { IoPersonAddSharp } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FaFilter } from "react-icons/fa";
import { flexRender } from "@tanstack/react-table";
import MockuserButton from "./MockuserButton";
import Toasters from "./Toasters";
const MockUserTable = ({
  table,
  filtering,
  setFiltering,
  handleToogle,
  openAddModal,
  toogle,
}) => {
  return (
    <>
      <div className="  mt-16 ms-12 bg-white flex w-[70vw]  px-4 border border-transparent  justify-center">
        <div className="border border-transparent w-[65vw] rounded-2xl p-2  justify-center">
          <input
            type="text"
            value={filtering}
            onChange={(e) => setFiltering(e.target.value)}
            className="border border-slate-300 rounded-lg shadow-md mb-2 p-1 outline-none"
            placeholder="Search here...."
          />
          <button className="border border-slate-400 text-lime-600 rounded-lg ms-4 bg- p-2">
            <IoPersonAddSharp onClick={openAddModal} />
          </button>

          <button
            className={`border border-slate-400 ms-2 rounded-lg p-2   `}
            onClick={handleToogle}
          >
            <FaFilter />
          </button>
          {toogle ? (
            <div className="absolute z-20 border border-slate-400 w-32 bg-white ms-72  -mt-10 h-fit  shadow rounded">
              <div className="p-1  border-b-2  mb-2 flex items-center justify-center">
                <label>Toggle </label>
              </div>
              {table.getAllLeafColumns().map((column, index) => {
                return (
                  <div key={column.id} className="px-1">
                    <label>
                      <input
                        className={` `}
                        {...{
                          type: "checkbox",
                          checked: column.getIsVisible(),
                          onChange: column.getToggleVisibilityHandler(),
                        }}
                      />{" "}
                      {column.id}
                    </label>
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
          <div className="border border-slate-300  p-1 rounded-lg">
            <table className="w-full   ">
              <thead className="  w-full  ">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id} className="  rounded-lg py-2 ">
                    {headerGroup.headers.map((header) => (
                      <th
                        className="  border-b-2   border-slate-300  text-gray-800 font-semibold  py-1   "
                        key={header.id}
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        <div className="  px-2 flex items-center  ">
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {
                            {
                              asc: <IoIosArrowUp className="ms-1" />,
                              desc: <IoIosArrowDown className="ms-2" />,
                            }[header.column.getIsSorted() ?? null]
                          }
                        </div>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody className="  p-2">
                {table.getRowModel().rows.map((row) => (
                  <tr className={`   rounded-2xl  p-2  `} key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <td className={`  p-2  `} key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <MockuserButton table={table} />
        </div>
        <Toasters />
      </div>
    </>
  );
};

export default MockUserTable;
