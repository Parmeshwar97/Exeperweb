import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { FaStar } from "react-icons/fa";
const TestimonialsCard = ({ data }) => {
  const { profile, name, review } = data;
  return (
    <div className="bg-[#4B5563] h-[380px] flex relative flex-col w-80 rounded-lg p-5">
      <div className="flex justify-between items-center">
        <ImQuotesLeft fontSize={"2.5rem"} color="#D1D5DB" />
        <div className="flex gap-0.5">
          {Array(4)
            .fill()
            .map((_, i) => (
              <FaStar key={i} color="#FFA500" />
            ))}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-[#46A5DC] font-semibold text-lg mb-4">{name}</h3>
        <p className="text-sm/7 font-light break-words hyphens-auto">
          <i>{review}</i>
        </p>
      </div>
      <ImQuotesRight
        fontSize={"2.5rem"}
        className="self-end justify-end text-[#D1D5DB]"
      />

      <div className="absolute rounded-full -top-10 left-15">
        <img src={profile} alt="profile" className="rounded-full size-20 " />
      </div>
    </div>
  );
};

export default TestimonialsCard;
