import React from "react";
import { useGlobalContext } from "./context";

const Search = () => {
  const { setSearch } = useGlobalContext();
  const searchItem = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="container p-4 mx-auto mt-5 mb-4">
      Search
      <input
        type="text"
        className="border border-black py-1 px-3 w-full"
        onChange={searchItem}
      />
    </div>
  );
};

export default Search;
