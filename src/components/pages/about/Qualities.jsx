import { BsFillPatchCheckFill } from "react-icons/bs";
const Qualities = ({ data }) => {
  const { quality, desc } = data;
  return (
    <div className="flex gap-5 items-center" style={{ fontFamily: "Segoe UI" }}>
        <div><BsFillPatchCheckFill className="text-5xl text-blue-600"/></div>
      <div>
        <p className="font-semibold">{quality}</p>
        <p>{desc}</p>
      </div>
    </div>
  );
};
export default Qualities;
