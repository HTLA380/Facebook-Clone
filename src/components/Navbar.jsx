import React from "react";

const Navbar = () => {
  return (
    <header className="p-2">
      <nav className="flex justify-between items-center h-14">
        {/* left */}
        <div className="w-52 h-full bg-gray-200"></div>
        {/* middle */}
        <div className="flex-grow h-full bg-gray-400"></div>
        {/* right */}
        <div className="w-52 h-full bg-gray-200"></div>
      </nav>
    </header>
  );
};

export default Navbar;
