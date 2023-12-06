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
} from "@tanstack/react-table";
const MockUser = () => {
  const data = useMemo(() => mdata, []);
  const [sorting, setSorting] = useState([]);

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
  });
  //   console.log(column);

  return (
    <>
      <div className="container mt-20 ms-12 bg-white">
        <div>
          <table>
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      <div className="border border-black px-2 flex items-center ">
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
            <tbody className="border border-black p-2">
              {table.getRowModel().rows.map((row) => (
                <tr className="border border-black p-2" key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td className="border border-black p-2" key={cell.id}>
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
          <button
            onClick={() => table.setPageIndex(0)}
            className="w-24 border border-black rounded-2xl m-2 bg-lime-300"
          >
            First
          </button>
          <button
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
            className="w-24 border border-black rounded-2xl m-2 bg-lime-300"
          >
            Previous
          </button>
          <button
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
            className="w-24 border border-black rounded-2xl m-2 bg-lime-300"
          >
            Next
          </button>
          <button
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            className="w-24 border border-black rounded-2xl m-2 bg-lime-300"
          >
            Last
          </button>
        </div>
      </div>
    </>
  );
};

export default MockUser;
