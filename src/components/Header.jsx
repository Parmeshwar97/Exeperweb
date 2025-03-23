import { BsFillSunFill } from "react-icons/bs";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="fixed z-20 w-full text-white h-20 inset-0 backdrop-blur-xs top-0 flex justify-around items-center">
      <Link to="/">
        <img src={logo} alt="logo" className="w-[11rem]" />
      </Link>
      <nav>
        <ul className="flex gap-5 list-none">
          <NavLink to="/">
            <li className="px-1.5 py-2 hover:text-[#60a5fa]">Home</li>
          </NavLink>
          <NavLink to="/about">
            <li className="px-1.5 py-2 hover:text-[#60a5fa]">About</li>
          </NavLink>
          <NavLink to="/services">
            <li className="px-1.5 py-2 hover:text-[#60a5fa]">Services</li>
          </NavLink>
          <NavLink to="/portfolio" className="px-1.5 py-2 hover:text-[#60a5fa]">
            Portfolio
          </NavLink>
          <NavLink to="/blog">
            <li className="px-1.5 py-2 hover:text-[#60a5fa]">Blog</li>
          </NavLink>
          <NavLink to="/contact">
            <li className="px-1.5 py-2 hover:text-[#60a5fa]">Contact</li>
          </NavLink>
        </ul>
      </nav>
      <button>
        <BsFillSunFill className="text-3xl text-white" />
      </button>
    </div>
  );
};

export default Header;
