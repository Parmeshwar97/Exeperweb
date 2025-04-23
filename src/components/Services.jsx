import { services } from "../data/serviceData";
import SectionHeading from "./SectionHeadings";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="flex flex-col w-full gap-28 py-24 px-8 md:px-32">
      <SectionHeading
        heading={"Some of our Services"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa provident temporibus ipsum saepe ratione optio cons equuntur."
        }
        isDivider={false}
      />
      <div className="grid md:grid-cols-3 gap-20 md:gap-8 justify-center">
        {services.map((service) => (
          <ServiceCard data={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
