import { data } from "../data/mainbody";
import Innovations from "./Innovations";
import SectionHeadings from "./SectionHeadings";
const MainBody = () => {
  return (
    <div className="flex flex-col w-full gap-28 border-y-2 border-[#6B92F9]  mt-24 pt-24 py-12 px-40">
      <SectionHeadings
        heading={"Empowering Business"}
        description="Growth Through Advanced Technology Solutions, Analytics and
        Professionally Trained Personnel"
      />
      {data.map((item) => (
        <Innovations key={item.id} data={item} />
      ))}
    </div>
  );
};

export default MainBody;
