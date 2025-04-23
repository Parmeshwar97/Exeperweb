import logo from "../assets/logo.png";
import { IoLogoYoutube } from "react-icons/io";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-[#0f172a] text-white">
      <div className="flex flex-wrap gap-2 md:gap-10 justify-around py-15">
        <div className="flex w-full flex-wrap flex-col gap-4 p-8 py-3 md:py-8 md:w-1/3">
          <img src={logo} alt="Exeperweb" width={"200px"} height={"80px"} />
          <p>
            At Exeperweb, we are a passionate team of web development experts
            committed to creating cutting-edge, custom web solutions that
            elevate your online presence and drive business success.
          </p>
          <div className="flex gap-5 text-3xl mt-5">
            <FaFacebookSquare className="hover:-translate-y-1 cursor-pointer transition" />
            <FaTwitterSquare className="hover:-translate-y-1 cursor-pointer transition" />
            <IoLogoYoutube className="hover:-translate-y-1 cursor-pointer transition" />
            <FaInstagramSquare className="hover:-translate-y-1 cursor-pointer transition" />
          </div>
        </div>
        <div className="flex flex-col w-full md:w-fit gap-2 md:gap-5 p-8 py-3 md:py-8 text-sm">
          <h4 className="text-blue-400 text-xl font-semibold">Useful Links</h4>
          <ul className="flex flex-col gap-4">
            <Link to="/about" className="hover:text-blue-400">
              <li>About</li>
            </Link>
            <Link className="hover:text-blue-400">
              <li>Services</li>
            </Link>
            <Link className="hover:text-blue-400">
              <li>Testimonials</li>
            </Link>
            <Link className="hover:text-blue-400">
              <li>Blog</li>
            </Link>
            <Link className="hover:text-blue-400">
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
        <div className="flex w-full md:w-fit flex-col gap-5 p-8 py-3 md:py-8 text-sm">
          <h4 className="text-blue-400 text-xl font-semibold">
            Contact Information
          </h4>
          <ul className="flex flex-col gap-4">
            <li>5028 North tripp ave, Chicago, Illinois 60630</li>
            <li>+1 (855) 663-6548</li>
            <li>contact@exeperweb.com</li>
          </ul>
        </div>
      </div>
      <div className="bg-[#1F2937] py-3 text-center text-sm">
        <p>All Rights Reserved 2023 - Exeper Web</p>
      </div>
    </div>
  );
};

export default Footer;
