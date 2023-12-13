import { BsThreeDots } from "react-icons/bs";
import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { BiMessageSquareEdit } from "react-icons/bi";
import MockuserAddModal from "./MockuserAddModal";
import MockuserEditModal from "./MockuserEditModal";
import Nav from "@src/Components/Navbar/Nav";
import Sidebar from "@src/Components/Sidebar/Sidebar";
import useMockUser from "./hooks/useMockuser";
import MockUserTable from "./MockuserTable";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
const MockUser = () => {
  const {
    handleEdit,
    handleDelete,
    togglePopover,
    handleToogle,
    close,
    openAddModal,
    mockData,
    setMockData,
    sorting,
    setSorting,
    filtering,
    setFiltering,
    toogle,
    show,
    setShow,
    openModal,
    editData,
    openEditMoadal,
    popoverItemId,
  } = useMockUser();

  const columns = [
    {
      header: "ID",
      accessorKey: "id",
      cell: ({ row }) => {
        return (
          <>
            <span>{row.index + 1}</span> 
          </>
        );
      },
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
            {show && popoverItemId == row.original.id && (
              <>
                <div className="container z-10 absolute h-11    -translate-y-12 -translate-x-3 border border-slate-400 w-20 rounded-lg   w-18   flex justify-center       bg-white ">
                  <div className="div flex items-center  py-1 justify-around mt-1 w-full">
                    <button className="items-center flex flex-col">
                      <BiMessageSquareEdit
                        className="text-orange-700"
                        onClick={() => handleEdit(row.original)}
                      />
                      <span className="text-xs">Edit</span>
                    </button>
                    <button className="flex flex-col  items-center">
                      <MdDelete
                        className="text-red-700"
                        onClick={() => handleDelete(row.original.id)}
                      />
                      <span className="text-xs">Delete</span>
                    </button>
                  </div>
                </div>
              </>
            )}
            <button
              className="text-[#E11441] relative  w-full  mr-2     flex  justify-center"
              onClick={() => {
                togglePopover(row.original.id);
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
    data: mockData,
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
  return (
    <>
      <Nav />
      <Sidebar />
      <MockUserTable
        table={table}
        filtering={filtering}
        setFiltering={setFiltering}
        handleToogle={handleToogle}
        openAddModal={openAddModal}
        toogle={toogle}
      />
      {openModal && (
        <MockuserAddModal
          close={close}
          mockData={mockData}
          setMockData={setMockData}
        />
      )}
      {openEditMoadal && (
        <MockuserEditModal
          close={close}
          editData={editData}
          mockData={mockData}
          setMockData={setMockData}
          setShow={setShow}
        />
      )}
    </>
  );
};

export default MockUser;
