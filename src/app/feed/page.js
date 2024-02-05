"use client";

import React from "react";
import { signOut } from "next-auth/react";
import LeftBar from "./(leftBar)/LeftBar";
import RightBar from "./(rightBar)/RightBar";

const Feed = () => {
  return (
    <div className="flex justify-center w-full bg-slate-200">
      {/* left nav bar */}
      <LeftBar />
      {/* main content */}
      <main className="w-full h-full max-w-[680px] min-h-[200vh] bg-red-300"></main>
      {/* right bar */}
      <RightBar />
    </div>
  );
};

export default Feed;
