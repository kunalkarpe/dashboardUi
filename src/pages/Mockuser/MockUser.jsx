import React, { useMemo } from "react";
import mdata from "@src/MocakData/MOCK_DATA";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import { useState } from "react";
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

  const columns = [
    {
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "First name",
      accessorKey: "first_name",
    },
    {
      header: "Last name",
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
  //   console.log(column);

  return (
    <>
      <div className="container mt-10 ms-12 bg-white flex   px-4  justify-center">
        <div className="border border-slate-300 rounded-2xl p-2  justify-center">
          <input
            type="text"
            value={filtering}
            onChange={(e) => setFiltering(e.target.value)}
            className="border border-slate-300 rounded-lg shadow-md mb-2 p-1 outline-none"
            placeholder="Search here...."
          />
          <table>
            <thead className="border border-black rounded-2xl">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr
                  key={headerGroup.id}
                  className="border border-black rounded-2xl"
                >
                  {headerGroup.headers.map((header) => (
                    <th
                      className="b d"
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
              {table.getRowModel().rows.map((row) => (
                <tr
                  className="border border-slate-400 rounded-2xl  p-2"
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
              disabled={!table.getCanPreviousPage()}
              onClick={() => table.previousPage()}
              className={`w-24 border border-slate-400 rounded-2xl m-2 hover:bg-lime-400  hover:border-transparent  ${
                !table.getCanPreviousPage() ? "hidden" : "visible"
              }`}
            >
              Previous
            </button>
            <button
              disabled={!table.getCanNextPage()}
              onClick={() => table.nextPage()}
              className={`w-24 border  border-slate-400 rounded-2xl m-2 hover:bg-lime-400  hover:border-transparent ${
                !table.getCanNextPage() ? "hidden" : "visible"
              }`}
            >
              Next
            </button>
            <button
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              className="w-24 border border-slate-400 rounded-2xl m-2 hover:bg-lime-400 hover:border-transparent"
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
