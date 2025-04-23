import { data } from "../data/mainbody";
import Innovations from "./Innovations";
import SectionHeadings from "./SectionHeadings";
const MainBody = () => {
  return (
    <div className="flex mt-20 flex-col gap-28 border-y-2 border-[#6B92F9] py-24 md:px-40 px-8">
      <SectionHeadings
        heading={"Empowering Business"}
        description="Growth Through Advanced Technology Solutions, Analytics and
        Professionally Trained Personnel"
        isDivider={false}
      />
      {data.map((item) => (
        <Innovations key={item.id} data={item} />
      ))}
    </div>
  );
};

export default MainBody;
