"use client";

import React from "react";
import LeftBar from "./leftBar/LeftBar";
import MyDay from "./myDay/MyDay";
import CreatePost from "./createPost/CreatePost";
import Posts from "./posts/Posts";
import RightBar from "./rightBar/RightBar";

const Feed = () => {
  return (
    <div className="flex justify-center w-full bg-slate-200">
      {/* left nav bar */}
      <LeftBar />
      {/* main content */}
      <main className="w-full h-full max-w-[680px] min-h-screen bg-red-300 py-24">
        <MyDay />
        <CreatePost />
        <Posts />
      </main>
      {/* right bar */}
      <RightBar />
    </div>
  );
};

export default Feed;
