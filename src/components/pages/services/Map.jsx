import map from "../../../assets/services/map.png";

const Map = () => {
  return (
    <div
      className="p-20 border-b-2 w-full border-blue-400"
      style={{ fontFamily: "Segoe UI" }}
    >
      <h3 className="text-4xl font-semibold text-center w-3xl mx-auto mb-20">
        More Than 10 Years We Provide Services All Over The World
      </h3>
      <div
        style={{ backgroundImage: `url(${map})` }}
        className="bg-cover flex justify-center bg-no-repeat w-full items-center  h-[700px] relative"
      >
        <div className="flex w-8/12 justify-between h-8/12 justify-self-center">
          <div className="bg-white rounded-xl h-fit mt-8 w-fit p-5 text-black">
            <p className="text-3xl font-bold mb-3">2K+</p>
            <p className="text-[#4B5563]">Companies Helped</p>
          </div>
          <div className="bg-white rounded-xl self-end h-fit w-fit p-5 text-black">
            <p className="text-3xl font-bold mb-3">25%</p>
            <p className="text-[#4B5563]">Average Performance Increase</p>
          </div>
          <div className="bg-white rounded-xl h-fit w-fit self-center p-5 text-black">
            <p className="text-3xl font-bold mb-3">70%</p>
            <p className="text-[#4B5563]">Companies Purchase Again</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
