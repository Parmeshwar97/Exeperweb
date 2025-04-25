import { channels } from "../../data/channelsData";
import Channel from "./contact/Channel";
import rightDots from "../../assets/contact/rightPic.svg";
import leftDots from "../../assets/contact/leftPic.svg";
import bluePic from "../../assets/contact/bluePic.svg";
import Location from "./contact/Location";
import GetStarted from "./services/GetStarted";
const Contact = () => {
  return (
    <div>
      <div className="md:p-30 py-20 flex flex-wrap items-center justify-between border-b-2 border-blue-400">
        <div className="flex p-8 flex-col w-[550px] gap-5">
          <h3 className="font-bold text-green-500">Contact Us</h3>
          <h2 className="text-[2.5rem] font-semibold ">GET IN TOUCH WITH US</h2>
          <p className="text-[#9CA3AF] text-justify">
            Thank you for considering Exeperweb for your web development needs.
            We would love to hear from you and discuss how we can help elevate
            your online presence and achieve your digital objectives. Please
            feel free to reach out to us through any of the following channels.
          </p>
          <div className="flex mt-5 flex-col gap-8">
            {channels.map((channel) => (
              <Channel key={channel.id} data={channel} />
            ))}
          </div>
        </div>
        <div className="z-10 pt-14 mx-auto md:mx-0 relative">
          <div className="md:p-10 p-8 z-10 bg-white rounded-md text-black ">
            <form className="grid grid-cols-2 w-[300px] gap-3 md:w-[470px] gap-y-5">
              <input
                type="text"
                placeholder="Enter Name"
                className="border-1 border-[#E5E7EB]  rounded p-3"
              />
              <input
                type="email"
                placeholder="Enter Email"
                className="border-1 border-[#E5E7EB]  rounded p-3"
              />
              <input
                type="text"
                placeholder="Enter Subject"
                className="border-1 border-[#E5E7EB]  rounded p-3"
              />
              <input
                type="number"
                placeholder="Enter Phone"
                className="border-1  border-[#E5E7EB]  rounded p-3"
              />
              <select
                name="service"
                className="w-full border-1 border-[#E5E7EB] col-span-2 rounded p-3"
              >
                <option value="" disabled>
                  Select a service{" "}
                </option>
                <option value="web-dev">Web design & Development </option>
                <option value="mobile-app">Mobile app development</option>
                <option value="e-com">Ecommerce Web Development</option>
                <option value="maintain">Web Maintenance</option>
                <option value="wordpress">Wordpress Website Maintenance</option>
                <option value="react">React Custom Development</option>
                <option value="marketing">Digital Marketing </option>
                <option value="hosting">Domain & Hosting Services</option>
              </select>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={"3"}
                className="p-4 w-full rounded-md col-span-2 border-1 border-[#E5E7EB]"
                style={{ resize: "none" }}
              ></textarea>
              <button className="bg-blue-600 col-span-2 text-white w-full rounded py-3">
                Sent Message
              </button>
            </form>
          </div>
          <div className="absolute hidden md:block -z-10 -top-12 -right-10">
            <img src={bluePic} alt="dots" />
          </div>
          <div className="absolute  hidden md:block top-20 -right-10">
            <img src={rightDots} alt="dots" />
          </div>
          <div className="absolute hidden md:block -bottom-7 -z-10 -left-7">
            <img src={leftDots} alt="dots" />
          </div>
        </div>
      </div>
      <Location />
      <GetStarted backColor="#A02890" />
    </div>
  );
};

export default Contact;
