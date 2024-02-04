"use client";

import React from "react";
import { signOut } from "next-auth/react";
import Navbar from "@/components/Navbar";

const Feed = () => {
  return (
    <div>
      <Navbar />
      <button onClick={() => signOut()}>SignOut</button>
    </div>
  );
};

export default Feed;
