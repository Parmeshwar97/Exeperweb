import React from "react";

const SectionHeading = ({ heading, description }) => {
  return (
    <div className="text-center w-1/2 self-center">
      <h1 className="text-5xl font-bold mb-4">{heading}</h1>
      <p className="text-xl">{description}</p>
    </div>
  );
};

export default SectionHeading;
