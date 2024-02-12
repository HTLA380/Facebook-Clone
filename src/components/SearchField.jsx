import React from "react";
import { FiSearch } from "react-icons/fi";
import { Input } from "./ui/input";

const SearchField = () => {
  return (
    <div className="relative flex items-center ">
      <FiSearch className="absolute w-4 h-4 transform -translate-y-1/2 left-2 top-1/2 text-muted-foreground" />
      <Input placeholder="Your search..." className="pl-8 " />
    </div>
  );
};

export default SearchField;
