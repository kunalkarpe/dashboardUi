import React, { useMemo } from "react";
import mdata from "@src/MocakData/MOCK_DATA";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaFilter } from "react-icons/fa";
import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";
import {
  flexRender,
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
const MockUser = () => {
  const data = useMemo(() => mdata, []);
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");
  const [fetchedData, setFetchedData] = useState();
  const [toogle, setToogle] = useState(false);
  const columns = [
    {
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "First Name",
      accessorKey: "first_name",
      // cell: ({ row }) => {
      //   return (
      //     <>
      //       <span className="text-blue-800">{row.original.first_name}</span>
      //     </>
      //   );
      // },
    },
    {
      header: "Last Name",
      accessorKey: "last_name",
    },
    {
      header: "Email",
      accessorKey: "email",
      // cell: ({ row }) => {
      //   return (
      //     <>
      //       <span className="text-blue-800">{row.original.email}</span>
      //     </>
      //   );
      // },
    },
    {
      header: "Gender",
      accessorKey: "gender",
      cell: ({ row }) => {
        return (
          <>
            <span
              className={`${
                row.original.gender == "Male"
                  ? "text-orange-600"
                  : "text-gray-600"
              } ${
                row.original.gender == "Female"
                  ? "text-lime-600"
                  : "text-gray-600"
              }`}
            >
              <div className="flex items-center">
                {row.original.gender == "Male" ? <FaMale /> : <FaFemale />}
                {row.original.gender}
              </div>
            </span>
          </>
        );
      },
    },
    {
      header: "Button",
      accessorKey: "button",
      cell: ({ row }) => {
        return (
          <>
            <button
              className="text-[#E11441]   w-full  mr-2   flex  justify-center"
              onClick={() => {
                setFetchedData(JSON.stringify(row.original.first_name)),
                  alert(`Hello from ${row.original.first_name} `);
              }}
            >
              <BsThreeDots />
            </button>
          </>
        );
      },
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilteringChange: setFiltering,
  });

  const handleToogle = () => {
    if (toogle == false) {
      setToogle(true);
    } else {
      setToogle(false);
    }
  };
  // console.log();

  return (
    <>
      <div className="  mt-10 ms-12 bg-white flex w-[70vw]  px-4 border border-transparent  justify-center">
        <div className="border border-transparent w-[65vw] rounded-2xl p-2  justify-center">
          <input
            type="text"
            value={filtering}
            onChange={(e) => setFiltering(e.target.value)}
            className="border border-slate-300 rounded-lg shadow-md mb-2 p-1 outline-none"
            placeholder="Search here...."
          />
          <button
            className={`border border-slate-400 ms-10 rounded-lg p-2   `}
            onClick={handleToogle}
          >
            <FaFilter />
          </button>
          {toogle ? (
            <div className="absolute z-20 border border-slate-400 w-32 bg-white ms-72  -mt-10 h-fit  shadow rounded">
              <div className="p-1  border-b-2  mb-2 flex items-center justify-center">
                <label>Toggle </label>
              </div>
              {table.getAllLeafColumns().map((column) => {
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
                {table.getRowModel().rows.map((row, index) => (
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
          <div className="  flex justify-center">
            <button
              onClick={() => table.setPageIndex(0)}
              className="w-24 border  border-slate-400 rounded-2xl m-2 hover:bg-lime-400  hover:border-transparent"
            >
              First
            </button>
            <button
              disabled={table.getState().pagination.pageIndex + 1 == 1}
              onClick={() => table.previousPage()}
              className={`w-24 border border-slate-400 rounded-2xl m-2 hover:bg-lime-400  hover:border-transparent  disabled:cursor-not-allowed  `}
            >
              Previous
            </button>
            <div className="mt-2  ">
              <span className="text-[#E11441] mr-2">
                {table.getState().pagination.pageIndex + 1}
              </span>
              of
              <span className="ms-2">{table.getPageCount()}</span>
            </div>
            <button
              disabled={
                table.getState().pagination.pageIndex + 1 ==
                table.getPageCount()
              }
              onClick={() => table.nextPage()}
              className={`w-24 border  border-slate-400 rounded-2xl m-2 hover:bg-lime-400  hover:border-transparent disabled:cursor-not-allowed
                
              `}
            >
              Next
            </button>
            <button
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              className={`w-24 border border-slate-400 rounded-2xl m-2 hover:bg-lime-400 hover:border-transparent 
               `}
            >
              Last
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MockUser;
