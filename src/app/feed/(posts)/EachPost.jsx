import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaXmark } from "react-icons/fa6";
import { AiOutlineLike } from "react-icons/ai";
import { FiMessageCircle } from "react-icons/fi";
import { FaShare } from "react-icons/fa";
const EachPost = () => {
  return (
    <div className="w-full mt-5 bg-gray-300 rounded-md">
      {/* ====== post header ====== */}
      <div className="px-4 py-3">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gray-500 rounded-full"></div>
          <div className="flex-grow h-10 bg-gray-500"></div>
          <div className="flex items-center gap-3">
            <button className="text-2xl text-gray-500">
              <BsThreeDots />
            </button>
            <button className="text-2xl text-gray-500">
              <FaXmark />
            </button>
          </div>
        </div>
        {/* post description */}
        <div className="w-full h-5 mt-3"></div>
      </div>

      {/* ============= post image ============= */}
      <div className="w-full h-[625px] bg-gray-500"></div>

      {/* ============= Post Footer =============  */}
      <div className="w-full px-4 py-2 ">
        {/* post activities */}
        <div className="flex justify-between ">
          <div className="flex items-center text-2xl">
            <div className="z-10 -mr-1 bg-gray-500 border border-gray-300 rounded-full w-7 h-7"></div>
            <div className="w-6 h-6 bg-gray-500 rounded-full"></div>
            <p className="w-16 h-5 bg-gray-500"></p>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1">
              <p className="w-10 h-5 bg-gray-500"></p>
              <div className="w-6 h-6 bg-gray-500 rounded-full"></div>
            </div>
            <div className="flex items-center gap-1">
              <p className="w-10 h-5 bg-gray-500"></p>
              <div className="w-6 h-6 bg-gray-500 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px my-2 bg-gray-400"></div>

        {/* post action buttons */}
        <div className="flex items-center gap-1">
          <button className="flex items-center justify-center w-full gap-2 py-2 text-gray-600 rounded-md">
            <AiOutlineLike size={25} />
            <p className="font-semibold ">Like</p>
          </button>
          <button className="flex items-center justify-center w-full gap-2 py-2 text-gray-600 rounded-md">
            <FiMessageCircle size={25} />
            <p className="font-semibold ">Comment</p>
          </button>
          <button className="flex items-center justify-center w-full gap-2 py-2 text-gray-600 rounded-md">
            <FaShare size={25} />
            <p className="font-semibold ">Share</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EachPost;
