import React from "react";

const MyDay = () => {
  return (
    <div className="flex items-stretch h-64 gap-3 overflow-x-hidden">
      <RenderMyDay />
      <RenderMyDay />
      <RenderMyDay />
      <RenderMyDay />
      <RenderMyDay />
    </div>
  );
};

const RenderMyDay = () => {
  return (
    <div className="relative min-w-[140px] rounded-lg cursor-pointer overflow-hidden ">
      {/* my day image */}
      <div className="absolute inset-0 bg-gray-300 hover:scale-105"></div>

      {/* user profile */}
      <div className="absolute w-9 h-9 bg-red-300 border-blue-500 rounded-full border-[4px] top-3 left-3"></div>

      {/* user name */}
      <div className="absolute left-0 w-full text-xs font-semibold text-center bottom-3">
        Htet Aung Lin
      </div>
    </div>
  );
};

export default MyDay;
