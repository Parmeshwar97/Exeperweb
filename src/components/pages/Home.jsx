import Landing from "../Landing";
import MainBody from "../MainBody";
import Services from "../Services";
import Testimonials from "../Testimonials";
const Home = () => {
  return (
    <div className="text-white ">
      <Landing />
      <div className="bg-[#0f172a]">
        <MainBody />
        <Services />
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
