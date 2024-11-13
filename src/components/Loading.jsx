import React from "react";

const Loading = ({className}) => {
  return (
    <div
      className={`animate-pulse bg-gray-300 dark:bg-gray-700 ${className}`}
    ></div>
  );
};

export default Loading;
