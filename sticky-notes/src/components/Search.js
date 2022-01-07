import React from "react";
import "../index.css";
import { MdSearch } from "react-icons/md";

const Search = ({ searchText }) => {
  return (
    <div className="search">
      <MdSearch className="search-icons" size="1.3rem" />
      <input
        className="searchbar"
        onChange={(event) => searchText(event.target.value)}
        type="text"
        placeholder="type to search..."
      />
    </div>
  );
};

export default Search;
