"use client";

import React, { useEffect } from "react";
import Feed from "./(feed)/page";

const HomePage = () => {
  useEffect(() => {
    if (window.location.hash == "#_=_") {
      window.location.hash = "";
    }
  }, []);

  return <Feed />;
};

export default HomePage;
