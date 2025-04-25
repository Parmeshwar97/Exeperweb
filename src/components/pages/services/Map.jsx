import map from "../../../assets/services/map.png";
import mobileMap from "../../../assets/services/map_mobile.png";

const Map = () => {
  return (
    <>
      <div
        className=" md:p-20 py-10 border-b-2 w-full border-blue-400"
        style={{ fontFamily: "Segoe UI" }}
      >
        <style>
          {`
          .background {
            background-image: url(${map}); /* Default background */
          }
          @media (max-width: 768px) {
            .background {
              background-image: url(${mobileMap}); /* Mobile background */
            }
          }
        `}
        </style>
        <h3 className="md:text-4xl text-2xl font-semibold text-center md:w-3xl mx-auto md:mb-20">
          More Than 10 Years We Provide Services All Over The World
        </h3>
        <div className="background bg-cover flex justify-center bg-no-repeat w-full items-center h-[500px] md:h-[700px] relative">
          <div className="flex gap-5 md:gap-0 px-5 md:px-0 md:w-8/12 flex-wrap justify-between h-8/12 justify-self-center">
            <div className="bg-white  rounded-xl h-fit md:mt-8 w-full md:w-fit p-5 text-black">
              <p className="text-3xl font-bold mb-3">2K+</p>
              <p className="text-[#4B5563]">Companies Helped</p>
            </div>
            <div className="bg-white  rounded-xl self-end h-fit w-full md:w-fit p-5 text-black">
              <p className="text-3xl font-bold mb-3">25%</p>
              <p className="text-[#4B5563]">Average Performance Increase</p>
            </div>
            <div className="bg-white  rounded-xl h-fit w-full md:w-fit self-center p-5 text-black">
              <p className="text-3xl font-bold mb-3">70%</p>
              <p className="text-[#4B5563]">Companies Purchase Again</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;
