import Link from "next/link";
import React from "react";

const LinkButton = ({ children, destination, className = "" }) => {
  return (
    <Link
      className={`flex items-center gap-2 hover:bg-accent text-accent-foreground ${className}`}
      href={destination}>
      {children}
    </Link>
  );
};

export default LinkButton;
