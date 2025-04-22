import Footer from "../Footer";
import Landing from "../Landing";
import MainBody from "../MainBody";
import OurSkills from "../OurSkills";
import Services from "../Services";
import Testimonials from "../Testimonials";
import WhyChoose from "../WhyChooseUs";
const Home = () => {
  return (
    <div className="relative">
      <Landing />
      <div>
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
