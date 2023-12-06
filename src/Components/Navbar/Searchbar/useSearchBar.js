import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import data from "./searchBar.constants";

export default function useSearchBar() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("");
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

  // const handleSearch = () => {
  //   const value = data.find((data) =>
  //     data.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  //   );

  //
  // };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      const value = data.find((person) =>
        person.name
          .toLocaleLowerCase()
          .replace(/\s+/g, "")
          .includes(query.toLocaleLowerCase().replace(/\s+/g, ""))
      );
      navigate(`${value.path}`);
      setQuery("");
    }
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
    dropdownList,
    handleKeyPress,
    query,
    inputRef,
    setQuery,
    data,
  };
}
