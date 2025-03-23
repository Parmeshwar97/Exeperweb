import { FaCheckCircle  } from "react-icons/fa";
const ServiceCard = ({ data }) => {
  const { service, details, serviceImage } = data;
  return (
    <div className="p-10 relative bg-[#1F2937] rounded-md flex pb-8 flex-col gap-6">
      <h3 className="text-2xl font-semibold text-center">{service}</h3>
      <ul>
        {details.map((item) => (
          <li className="text-[#D1D5DB] border-b-1 py-4 flex items-center justify-between">
            {item}
            <FaCheckCircle color="#22C55E" />
          </li>
        ))}
      </ul>
      <button className="px-7 py-3 w-fit cursor-pointer self-center rounded-md bg-[#D1D5DB] text-black">
        Contact Support
      </button>
      <div className="absolute -top-10 right-40">
        <img src={serviceImage} alt="Service" className="w-20 h-20" />
      </div>
    </div>
  );
};

export default ServiceCard;
