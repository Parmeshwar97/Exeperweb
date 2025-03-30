import { ImQuotesLeft } from "react-icons/im";
import stars from '../assets/Profiles/stars.jpeg'
const TestimonialsCard = ({data}) => {
    const {profile,name,review} = data;
  return (
    <div className="bg-[#4B5563] rounded-lg p-12">
      <div className="flex justify-between">
        <ImQuotesLeft />
        <img src={stars} alt="stars" className="w-1/2" />
      </div>
      <h3>{name}</h3>
      <p>{review}</p>
    </div>
  );
};

export default TestimonialsCard;
