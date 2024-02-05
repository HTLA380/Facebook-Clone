"use client";

import React from "react";
import { signOut } from "next-auth/react";
import LeftBar from "./(leftBar)/LeftBar";

const Feed = () => {
  return (
    <div className="flex justify-center w-full bg-slate-200">
      {/* left nav bar */}
      <LeftBar />
      {/* main content */}
      <main className="w-full h-full max-w-[680px] min-h-[200vh] bg-red-300"></main>
      {/* right bar */}
      <div className="fixed top-0 right-0 w-full h-full bg-gray-300 max-w-96"></div>
    </div>
  );
};

export default Feed;
