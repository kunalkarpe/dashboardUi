import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import data from "./searchBar.constants";

export default function useSearchBar() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef("null");
  const handleQuery = (e) => {
    setQuery(e.target.value);
    setShowDropdown(!false);
  };

  const handleSearch = () => {
    const value = data.filter((data) => data.name.toLocaleLowerCase() == query);
    navigate(`${value[0].path}`);
  };

  const dropdownList = data.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
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
    handleSearch,
    dropdownList,
    handleQuery,
    showDropdown,
    query,
    inputRef,
  };
}
