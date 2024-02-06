"use client";

import React from "react";
import { signOut } from "next-auth/react";
import LeftBar from "./(leftBar)/LeftBar";
import RightBar from "./(rightBar)/RightBar";
import MyDay from "./(myDay)/MyDay";
import CreatePost from "./(createPost)/CreatePost";

const Feed = () => {
  return (
    <div className="flex justify-center w-full bg-slate-200">
      {/* left nav bar */}
      <LeftBar />
      {/* main content */}
      <main className="w-full h-full max-w-[680px] min-h-screen bg-red-300 pt-24">
        <MyDay />
        <CreatePost />
      </main>
      {/* right bar */}
      <RightBar />
    </div>
  );
};

export default Feed;
