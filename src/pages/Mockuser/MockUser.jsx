import React, { useMemo } from "react";
import mdata from "@src/MocakData/MOCK_DATA";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaFilter } from "react-icons/fa";
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
    },
    {
      header: "Last Name",
      accessorKey: "last_name",
    },
    {
      header: "Email",
      accessorKey: "email",
    },
    {
      header: "Gender",
      accessorKey: "gender",
    },
    {
      header: "Button",
      accessorKey: "button",
      cell: ({ row }) => {
        return (
          <>
            <button
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
  // console.log(table.getAllLeafColumns());

  const handleToogle = () => {
    if (toogle == false) {
      setToogle(true);
    } else {
      setToogle(false);
    }
  };

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
            className={`border border-slate-400 ms-12 rounded-lg p-2   ${
              toogle ? "bg-lime-300   text-red-600 " : ""
            }`}
            onClick={handleToogle}
          >
            <FaFilter />
          </button>

          <table className="w-full">
            <thead className="border border-black rounded-2xl w-full">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr
                  key={headerGroup.id}
                  className="border border-slate-400 bg-orange-300 rounded-2xl py-4   "
                >
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      <div className="  px-2 flex items-center ">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {
                          {
                            asc: <FaRegArrowAltCircleUp />,
                            desc: <FaArrowCircleDown />,
                          }[header.column.getIsSorted() ?? null]
                        }
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className=" p-2">
              {table.getRowModel().rows.map((row, index) => (
                <tr
                  className={`border border-slate-400 rounded-2xl  p-2 ${
                    index % 2 == 0 ? " bg-white" : "bg-neutral-300"
                  }`}
                  key={row.id}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td className="  p-2" key={cell.id}>
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
            <div className="mt-2">
              <span>
                {table.getState().pagination.pageIndex + 1} of{" "}
                {table.getPageCount()}
              </span>
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
        {toogle ? (
          <div className="flex flex-col relative z-20 border border-slate-400 w-32 bg-white ms-12 mt-12 h-fit  shadow rounded">
            <div className="p-1  border-b-2  mb-2 flex items-center justify-center">
              <label>Toggle </label>
            </div>
            {table.getAllLeafColumns().map((column) => {
              return (
                <div key={column.id} className="px-1">
                  <label>
                    <input
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
      </div>
    </>
  );
};

export default MockUser;
