
import Company from "./about/Company";
import { cards } from "../../data/about";
import AboutCard from "./about/AboutCard";
import WhyWe from "./about/WhyWe";
import AboutInfo from "./about/AboutInfo";
const About = () => {
  return (
    <div className="pt-28">
      <AboutInfo />
      <section className="flex border-b-2 border-[#6B92F9] pb-14 flex-col justify-center items-center p-8 md:p-10">
        <Company />
        <div className="flex w-full justify-between flex-wrap md:flex-nowrap items-center gap-20 md:gap-10 mt-8 py-10">
          {cards.map((goal) => (
            <AboutCard data={goal} />
          ))}
        </div>
        <WhyWe /> 
      </section>
    </div>
  );
};

export default About;
