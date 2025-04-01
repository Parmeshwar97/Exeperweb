import Footer from "../Footer";
import Landing from "../Landing";
import MainBody from "../MainBody";
import OurSkills from "../OurSkills";
import Services from "../Services";
import Testimonials from "../Testimonials";
import WhyChoose from "../WhyChoose";
const Home = () => {
  return (
    <div className="text-white ">
      <Landing />
      <div className="bg-[#0f172a]">
        <MainBody />
        <Services />
        <Testimonials />
        <OurSkills />
        <WhyChoose />
      </div>
    </div>
  );
};

export default Home;
