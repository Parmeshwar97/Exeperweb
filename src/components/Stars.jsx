import { FaStar } from "react-icons/fa6";

const Stars = ({ starGap = "10px", starSize = "3rem", smallStar = "2rem" }) => {
  return (
    <div
      className="flex justify-self-center self-center mb-7 w-fit"
      style={{ gap: starGap }}
    >
      {Array(3)
        .fill()
        .map((_, i) => {
          if (i === 1) {
            return <FaStar key={i} color="#EAB308" fontSize={starSize} />;
          }
          return (
            <FaStar
              key={i}
              color="#9CA3AF"
              fontSize={smallStar}
              className="self-end"
            />
          );
        })}
    </div>
  );
};

export default Stars;
