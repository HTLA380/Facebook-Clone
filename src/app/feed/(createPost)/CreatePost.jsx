import React from "react";
import { FaVideo } from "react-icons/fa";
import { ImFilePicture } from "react-icons/im";
import { BsEmojiSmile } from "react-icons/bs";

const CreatePost = () => {
  return (
    <div className="w-full px-4 py-2 mt-5 bg-gray-300 rounded-md">
      <div className="flex items-center gap-3 pb-2 border-b border-b-gray-500 ">
        {/* user profile */}
        <div className="w-8 h-8 bg-gray-800 rounded-full "></div>
        <button className="w-full px-3 py-2 text-left bg-white rounded-full">
          What's on your mind, Htet?
        </button>
      </div>
      <div className="flex items-center mt-2">
        <button className="flex items-center justify-center w-full gap-3 py-1 rounded-md">
          <FaVideo className="text-2xl text-red-500" />
          <p className="text-sm font-semibold">Live Video</p>
        </button>
        <button className="flex items-center justify-center w-full gap-3 py-1 rounded-md">
          <ImFilePicture className="text-2xl text-green-600" />
          <p className="text-sm font-semibold">Photo/video</p>
        </button>
        <button className="flex items-center justify-center w-full gap-3 py-1 rounded-md">
          <BsEmojiSmile className="text-2xl text-orange-600" />
          <p className="text-sm font-semibold">Feeling/activity</p>
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
