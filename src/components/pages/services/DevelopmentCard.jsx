const DevelopmentCard = ({ data }) => {
  const { service, desc, Icon } = data;
  return (
    <div
      className="flex flex-col bg-[#F6F7F9] text-center rounded-lg text-black md:w-[450px] md:h-[350px] p-5 hover:-translate-y-3 transition-all "
      style={{ fontFamily: "Segoe UI" }}
    >
      <div className="self-center bg-[#3B82F6] rounded-full p-4 mb-5">
        <Icon size="60" color="white" />
      </div>
      <h3 className="text-[#1D4ED8] font-semibold text-2xl">{service}</h3>
      <p className="text-[#4B5563] my-3">{desc}</p>
      <button className="px-5 py-3 w-fit self-center mt-5 text-white rounded-md  bg-[#3B82F6] hover:bg-[#1D4ED8] hover:scale-105 transition-all duration-300">
        Read More
      </button>
    </div>
  );
};

export default DevelopmentCard;
