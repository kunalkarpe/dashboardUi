import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import data from "./searchBar.constants";

export default function useSearchBar() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState();
  const [query, setQuery] = useState("");
  const inputRef = useRef(" ");

  const dropdownList =
    query === ""
      ? data
      : data.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  const handleSearch = () => {
    const value = data.find((data) =>
      data.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    );

    navigate(`${value.path}`);
  };
  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "/") {
        event.preventDefault();
        inputRef.current.focus();
      }
    };
    document.addEventListener("keypress", handleKey);
  }, []);

  return {
    selected,
    setSelected,
    handleSearch,
    dropdownList,
    // handleQuery,
    // showDropdown,
    query,
    inputRef,
    setQuery,
    data,
  };
}
