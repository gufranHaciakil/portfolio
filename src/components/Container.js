import React from "react";

const Container = ({ children }) => {
  return (
    <div className="mt-20 w-[90%] mx-auto">
      {children}
      <hr className="border-[rgb(238 238 238 / 53%)] mx-auto mt-10" />
    </div>
  );
};

export default Container;
