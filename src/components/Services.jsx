import { services } from "../data/serviceData";
import SectionHeading from "./SectionHeadnings";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="flex flex-col w-full gap-28 py-12 pt-24 px-32">
      <SectionHeading
        heading={"Some of our Services"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa provident temporibus ipsum saepe ratione optio cons equuntur."
        }
      />
      <div className="grid grid-cols-3 gap-8 justify-center">
        {services.map((service) => (
          <ServiceCard data={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
