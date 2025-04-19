import { FaStar } from "react-icons/fa";
import SectionHeading from "./SectionHeadings";
import { skills } from "../data/skills";
import Stars from "./Stars";

const OurSkills = () => {
  return (
    <div
      className="flex flex-col w-full gap-28 py-24 border-y-2 border-[#6B92F9]"
      style={{ fontFamily: "'Segoe UI'" }}
    >
      <div className="align-center justify-center flex flex-col text-center w-full">
        <Stars/>
        <SectionHeading heading={"Our Skills"} />
      </div>

      <div className="flex gap-10 mx-40">
        <div className="flex flex-col gap-10 w-5/12">
          <h3 className="text-5xl font-semibold self-center mb-10">
            Technologies
          </h3>
          <p className="text-[#D4F0FC] text-xl">
            Using advanced technology to bring you high-end solutions in new
            media, web, and e-learning
          </p>
          <p className="text-[#AFAFAF]">
            At Exeperweb, we believe in walking at pace with the growing
            technology, and that is how we deliver results beyond expectations.
            We make use of the latest software and technology platforms to
            develop high-end and technically advanced solutions.
          </p>
        </div>
        <div className="flex flex-wrap gap-5 w-6/12 justify-center">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className={`w-44 cursor-pointer hover:scale-105 transition-all h-36 border-2 rounded-xl justify-center flex flex-col items-center gap-5`}
              style={{ borderColor: skill.color }}
            >
              <div className="text-6xl">{<skill.logo />}</div>
              <strong>{skill.skill}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurSkills;
