const GetStarted = ({ backColor = "#11A4A4" }) => {
  return (
    <div className="py-20 w-full border-y-2 border-blue-400">
      <div
        className="flex p-20 w-full justify-between "
        style={{ backgroundColor: backColor }}
      >
        <div className="w-1/2">
          <p className="text-md font-semibold opacity-95 mb-1">
            Find the perfect team to realize your business Goal!
          </p>
          <p className="text-4xl font-bold">
            Get started Today and let us Take Care of the{" "}
            <span className="text-5xl bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text w-fit">
              Rest!
            </span>
          </p>
        </div>
        <div className="flex gap-3 items-center">
          <button className="py-3 h-fit px-8 rounded-md hover:bg-blue-800 bg-[#34B2B2]">
            Talk to Agent
          </button>
          <button className="h-fit py-3 px-8 rounded-md bg-green-500 hover:bg-green-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
export default GetStarted;
