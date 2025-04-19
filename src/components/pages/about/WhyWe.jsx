import React from "react";
import { FaStar } from "react-icons/fa6";
import Qualities from "./Qualities";
import { qualities } from "../../../data/about";
import gif from "../../../assets/about/coding_pic.gif";
import Stars from "../../Stars";
const WhyWe = () => {
  return (
    <div className="flex gap-20 pl-20 justify-end mt-24">
      <div className="w-7/12 ">
      
        <Stars starSize={"2rem"} smallStar={'1.4rem'} starGap={"8px"} />
        <div className="flex items-center mt-4 justify-self-center gap-3">
          <div className="w-28 h-1 rounded-md bg-blue-400"></div>
          <span className="text-center">WHY CHOOSE US</span>
          <div className="w-28 h-1 rounded-md bg-blue-400"></div>
        </div>
        <div className="flex flex-col gap-15 justify-center p-10">
          <h2 className="text-3xl text-transparent  bg-clip-text font-bold bg-gradient-to-r from-blue-500 to-emerald-500 w-fit">
            Save Time, Effort, Money With Exeperweb
          </h2>
          {qualities.map((quality, i) => (
            <Qualities key={i} data={quality} />
          ))}
        </div>
      </div>
      <img
        src={gif}
        alt="gif"
        className="w-[510px] h-[530px] rounded-s-[100px] rounded-ee-4xl"
      />
    </div>
  );
};

export default WhyWe;
