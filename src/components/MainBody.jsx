import { data } from "../data/mainbody";
import Innovations from "./Innovations";
const MainBody = () => {
  return (
    <div className="flex flex-col w-full gap-28 translate-y-24 border-y-2 border-[#6B92F9] bg-[#111827] py-12 px-40">
      <div className="text-center w-1/2 self-center">
        <h1 className="text-5xl font-bold mb-4">Empowering Business</h1>
        <p className="text-xl">
          Growth Through Advanced Technology Solutions, Analytics and
          Professionally Trained Personnel
        </p>
      </div>
      {data.map((item) => (
        <Innovations key={item.id} data={item}/>
      ))}
    </div>
  );
};

export default MainBody;
