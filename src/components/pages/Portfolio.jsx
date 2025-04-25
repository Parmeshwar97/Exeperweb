import React from "react";
import { projects } from "../../data/Projects";
import PortfolioCard from "../PortfolioCard";
import GetStarted from "./services/GetStarted";

const Portfolio = () => {
  return (
    <div style={{fontFamily:'Segoe UI'}}>
      <div className="md:pt-32 pt-22 flex px-5 md:px-0 flex-col items-center">
        <p className="text-lg font-semibold tracking-wide">Our Portfolio</p>
        <h2 className="font-bold text-3xl md:text-4xl my-2">Our Completed Projects</h2>
        <p className="md:w-[600px] mt-1 text-center">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </p>
      </div>
      <div className="flex flex-wrap md:p-20 p-5 gap-13 justify-between ">
        {projects.map((project) => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </div>
      <GetStarted backColor="#8028a0" />
    </div>
  );
};

export default Portfolio;
