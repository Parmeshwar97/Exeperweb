import { ReactTyped } from "react-typed";

const HeroSection = () => {
  return (
    <div className="w-1/3 pt-28 ms-10">
      <div
        className="text-[#4CA2DB] text-8xl font-bold"
        style={{ fontFamily: "'Segoe UI'" }}
      >
        <h1 className="text-[2.6rem]">Here you can</h1>
        <ReactTyped
          strings={["Exeper", "Goal", "Power"]}
          typeSpeed={200}
          backSpeed={100}
          loop
        />
        <h1>Your</h1>
        <h1>Business</h1>
      </div>

      <p className="pt-3">
        Welcome and thank you for taking your time to take a look at our
        solutions, wee can ensure you that wee will take your Business to the
        next level, so hang in tight and lets Explore with Exeper web!
      </p>
      <div className="flex gap-5 pt-7">
        <button className="px-9 py-4 rounded-md  bg-[#60A5FA]">
          Get Started
        </button>
        <button className="px-9 py-4 rounded-md bg-[#9BB4D2]">
          Take a look
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
