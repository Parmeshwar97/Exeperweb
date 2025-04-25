import { services } from "../../data/developmentData";
import DevelopmentCard from "./services/DevelopmentCard";
import GetStarted from "./services/GetStarted";
import Stars from "../Stars";
import Map from "./services/Map";

const Services = () => {
  return (
    <div className="pt-32 flex flex-col items-center">
      <Stars starSize={"2rem"} smallStar={"1.4rem"} starGap={"8px"} />
      <h2 className="md:text-4xl text-3xl text-center font-semibold">Our Web Development Services</h2>
      <div className="h-1 w-32 mt-5 bg-blue-400 rounded-2xl"></div>

      <div className="flex gap-10 flex-wrap p-10">
        {services.map((item) => (
          <DevelopmentCard data={item} />
        ))}
      </div>
      <GetStarted />
      <Map />
    </div>
  );
};

export default Services;
