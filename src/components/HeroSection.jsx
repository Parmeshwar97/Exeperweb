import { ReactTyped } from "react-typed";

const HeroSection = () => {
  return (
    <div className="md:w-1/3 pt-28 px-8 pe-0 md:ps-10" style={{ fontFamily: "'Segoe UI'" }}>
      <div
        className="text-[#4CA2DB] text-6xl md:text-8xl font-bold"
       
      >
        <h1 className="text-2xl md:text-[2.6rem] bg-gradient-to-r from-[#4CA2DB] to-emerald-500 text-transparent bg-clip-text">Here you can</h1>
        <ReactTyped
          strings={["Exeper", "Goal", "Power"]}
          typeSpeed={200}
          backSpeed={100}
          loop
        />
        <h1 className="bg-gradient-to-r from-[#4CA2DB] to-emerald-500 text-transparent bg-clip-text">Your</h1>
        <h1 className="bg-gradient-to-r from-[#4CA2DB] to-emerald-500 text-transparent bg-clip-text">Business</h1>
      </div>

      <p className="pt-3 ">
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
