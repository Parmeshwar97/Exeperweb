import { useState } from "react";
import SectionHeading from "./SectionHeadings";
import { reviews } from "../data/reviews";
import TestimonialsCard from "./TestimonialsCard";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import Stars from "./Stars";

const Testimonials = () => {
  const [start, setStart] = useState(0);
  const isDisable = start === 0 ? true : false;
  const length = reviews.length;
  console.log(start, length);

  return (
    <div
      className="flex flex-col w-full gap-28 py-24 border-y-2 border-[#6B92F9]"
      style={{ fontFamily: "'Segoe UI'" }}
    >
      <div className="align-center justify-center flex flex-col text-center w-full">
        <Stars />
        <SectionHeading
          heading={"Testimonials"}
          description={"Customers 💝 Us"}
        />
      </div>
      <div className="flex justify-between md:px-10">
        <button
          disabled={start === 0}
          onClick={() => setStart((prevStart) => prevStart - 3)}
          className="disabled:text-[#4B5563]"
        >
          <MdOutlineArrowBackIos className="text-3xl " />
        </button>

        <div className="flex w-fit flex-wrap gap-30 justify-center transition-all duration-500">
          {reviews.slice(start, start + 3).map((review, i) => (
            <TestimonialsCard key={i} data={review} />
          ))}
        </div>

        <button
          disabled={start === length - 3}
          onClick={() => setStart((prevStart) => prevStart + 3)}
          className="disabled:text-[#4B5563]"
        >
          <MdOutlineArrowForwardIos className="text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
