import React from "react";

const SectionHeading = ({ heading, description, isDivider = true }) => {
  return (
    <div className="text-center w-full md:w-1/2 self-center">
      <h1 className="text-3xl md:text-5xl font-bold md:mb-4">{heading}</h1>
      {isDivider && (
        <div className="h-1 mx-auto w-32 mt-3 md:mt-5 bg-blue-400 rounded-2xl"></div>
      )}
      <p className="text-xl mt-5 md:mt-0">{description}</p>
    </div>
  );
};

export default SectionHeading;
