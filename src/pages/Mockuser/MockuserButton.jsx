import React from "react";

const MockuserButton = ({ table }) => {
  return (
    <>
      <div className="  flex justify-center">
        <button
          disabled={table.getState().pagination.pageIndex == 0}
          onClick={() => table.setPageIndex(0)}
          className="w-24 border  border-slate-400 rounded-2xl m-2 hover:bg-lime-400  hover:border-transparent disabled:cursor-not-allowed"
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
            table.getState().pagination.pageIndex + 1 == table.getPageCount()
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
               disabled:cursor-not-allowed `}
          disabled={
            table.getState().pagination.pageIndex + 1 == table.getPageCount()
          }
        >
          Last
        </button>
      </div>
    </>
  );
};

export default MockuserButton;
