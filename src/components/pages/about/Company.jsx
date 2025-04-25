import Stars from "../../Stars";

const Company = () => {
  return (
    <div className="flex flex-col items-center gap-3 md:p-10">
      <Stars starSize={"2rem"} smallStar={"1.4rem"} starGap={"8px"} />
      <div className="flex items-center gap-3">
        <div className="md:w-28 w-20 h-1 rounded-md bg-blue-400"></div>
        <span className="font-semibold ">DIGITAL EXPERIENCE</span>
        <div className="md:w-28 w-20 h-1 rounded-md bg-blue-400"></div>
      </div>
      <h2 className="md:text-[2.5rem] py-5 md:py-0 text-3xl text-transparent bg-clip-text font-bold bg-gradient-to-r from-blue-500 to-emerald-500 w-fit">
        About Our Company
      </h2>
    </div>
  );
};

export default Company;