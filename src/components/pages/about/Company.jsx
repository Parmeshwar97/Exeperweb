import { FaStar } from "react-icons/fa6";

const Company = () => {
  return (
    <div className="flex flex-col items-center gap-3 p-10">
      <div className="flex self-center w-fit gap-2">
        {Array(3)
          .fill()
          .map((_, i) => {
            if (i === 1) {
              return <FaStar key={i} color="#EAB308" fontSize={"2rem"} />;
            }
            return (
              <FaStar
                key={i}
                color="#9CA3AF"
                fontSize={"1.4rem"}
                className="self-end"
              />
            );
          })}
      </div>
      <div className="flex items-center gap-3">
        <div className="w-28 h-1 rounded-md bg-blue-400"></div>
        <span className="font-semibold">DIGITAL EXPERIENCE</span>
        <div className="w-28 h-1 rounded-md bg-blue-400"></div>
      </div>
      <h2 className="text-[2.5rem] text-transparent bg-clip-text font-bold bg-gradient-to-r from-blue-500 to-emerald-500 w-fit">
        About Our Company
      </h2>
    </div>
  );
};

export default Company;