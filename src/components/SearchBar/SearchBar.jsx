import React from "react";
import { Label, Search, SearchIcon } from "./SearchBar.styled";

const SearchBar = () => {
  return (
    <Label htmlFor="search">
      <SearchIcon />
      <Search type="text" placeholder="search" id="search" />
    </Label>
  );
};

export default SearchBar;
