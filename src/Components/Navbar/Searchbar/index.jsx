import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import useSearchBar from "./useSearchBar";
const SearchBar = () => {
  const {
    handleSearch,
    dropdownList,
    handleQuery,
    showDropdown,
    query,
    inputRef,
  } = useSearchBar();
  return (
    <>
      <section className="flex  flex-col  w-72 h-44 mt-[15vh]   ">
        <div className="flex   items-center px-4 py-1 mt-2">
          <input
            className="flex border border-slate-200 shadow-sm w-52 h-4 p-4 rounded-2xl    outline-none"
            placeholder="Search here..."
            ref={inputRef}
            value={query}
            onChange={handleQuery}
          ></input>
          <button
            className="flex ms-2 border border-slate-300 rounded-full p-2 bg-lime-300  "
            onClick={handleSearch}
          >
            <IoIosSearch color="grey" />
          </button>
        </div>
        {showDropdown && query !== "" && (
          <div className="flex flex-col items-start justify-start border border-transparent bg-white rounded-2xl p-4 shadow-lg">
            <div className="flex flex-col">
              {dropdownList.length == 0 ? (
                <>
                  <p>No Results Found!</p>
                </>
              ) : (
                dropdownList.map((items) => {
                  return (
                    <>
                      <div
                        className="flex hover:bg-lime-300  w-full border border-transparent w-60 p-1 rounded-2xl m-1 hover:bg-lime-300 items-center content-center hover:pointer"
                        key={items.id}
                      >
                        <Link to={items.path}>
                          <div className=" px-2 ">{items.name}</div>
                        </Link>
                      </div>
                    </>
                  );
                })
              )}
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default SearchBar;
