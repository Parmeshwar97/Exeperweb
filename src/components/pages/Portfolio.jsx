import React from "react";
import { projects } from "../../data/Projects";
import PortfolioCard from "../PortfolioCard";
import GetStarted from "./services/GetStarted";

const Portfolio = () => {
  return (
    <div>
      <div className="pt-32 flex  flex-col items-center">
        <p className="text-lg font-semibold tracking-wide">Our Portfolio</p>
        <h2 className="font-bold text-4xl my-3">Our Completed Projects</h2>
        <p className="w-[600px] text-center">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </p>
      </div>
      <div className="flex p-20 justify-between ">
        {projects.map((project) => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </div>
      <GetStarted backColor="#8028a0" />
    </div>
  );
};

export default Portfolio;
