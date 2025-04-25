import pic1 from "../../../assets/about/about_pic1.png";
import { FaCircleDot } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
const AboutInfo = () => {
  return (
    <section>
      <h1 className="text-[3rem] mx-auto text-transparent bg-clip-text font-extrabold bg-gradient-to-r my-5 from-blue-500 to-emerald-500 w-fit">
        About Us
      </h1>
      <div className="flex flex-wrap md:flex-nowrap md:p-10  border-b-2  pb-28 border-[#6B92F9] font-['sans-serif'] ">
        <img
          src={pic1}
          alt="picture"
          className="w-[350px] md:w-[650px] mx-auto rounded-2xl hover:-translate-y-3 transition-all duration-300"
        />
        <div
          className="p-8 flex flex-col gap-5"
          style={{ fontFamily: "sans-serif" }}
        >
          <h3 className="text-2xl md:text-4xl font-semibold md:w-9/12 mx-auto pt-16 pb-5 text-center text-[#3B82F6]">
            "We provide best design solution in town"
          </h3>

          <p>
            At Exeperweb, we are a passionate team of web development experts
            committed to creating cutting-edge, custom web solutions that
            elevate your online presence and drive business success. With years
            of experience and a relentless pursuit of excellence, we have become
            a trusted partner for businesses seeking to establish a powerful
            digital footprint.
          </p>
          <ul className="flex flex-col gap-2 text-lg">
            <li className="flex items-center">
              <FaCircleDot className="text-[#22C55E] mr-3" /> Prioritizing your
              goals and vision
            </li>
            <li className="flex items-center">
              <FaCircleDot className="text-[#22C55E] text-2xl md:text-lg mr-3" />{" "}
              A proven track record and a portfolio of successful projects
            </li>
            <li className="flex items-center">
              <FaCircleDot className="text-[#22C55E] mr-3" /> Pride in our
              commitment to quality
            </li>
          </ul>
          <div className="flex items-center flex-wrap gap-5  md:gap-40 p-5">
            <div className="flex items-center  mx-auto py-5 md:py-0 md:mx-0 gap-4">
              <div className="rounded-full p-4 hover:bg-black bg-blue-500">
                <FiPhoneCall size={"1.3rem"} />
              </div>
              <div className="text-lg/6 text-center md:text-start">
                <p>Call Anytime</p>
                <p className="font-bold text-xl">+1 (855) 663-6548</p>
              </div>
            </div>

            <button className="px-3 py-2 mx-auto md:mx-0 h-fit hover:bg-blue-700 bg-blue-500 rounded">
              VIEW PORTFOLIO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInfo;
