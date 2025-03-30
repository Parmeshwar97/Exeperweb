
import SectionHeading from './SectionHeadnings';

import {reviews} from '../data/reviews';
import TestimonialsCard from './TestimonialsCard';
const Testimonials = () => {
  return (
    <div className="flex flex-col w-full gap-28 py-24 px-32 border-y-2 border-[#6B92F9]">
      <SectionHeading heading={"Testimonials"} description={"Customer 💝 Us"} />
      <div className="grid grid-cols-3 gap-8 justify-center">
        {reviews.map((review) => (
          <TestimonialsCard data={review} />
        ))}
      </div>
    </div>
  );
}

export default Testimonials