"use client";

import React from "react";
import { signOut } from "next-auth/react";

const page = () => {
  return (
    <div>
      <button onClick={() => signOut()}>SignOut</button>
    </div>
  );
};

export default page;
