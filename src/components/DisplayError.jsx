import React, { useEffect } from "react";

const DisplayError = ({ error = "", time = 3000, setError }) => {
  useEffect(() => {
    setTimeout(() => setError(""), time);
  }, [error]);

  if (!error) return;

  return (
    <div className="w-full py-1.5 text-sm text-center bg-red-300 rounded-md">
      {error}
    </div>
  );
};

export default DisplayError;
