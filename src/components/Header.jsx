import { BsFillSunFill } from "react-icons/bs";
import { MdOutlineMenu } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState } from "react";
import Menu from "./Menu";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="fixed z-10 px-5 md:px-28 h-15 md:h-20 inset-0 backdrop-blur-xs top-0 justify-between items-center flex">
      <Link to="/">
        <img src={logo} alt="logo" className="w-[11rem]" />
      </Link>
      <nav className="md:flex hidden ">
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
          {/* <NavLink to="/blog">
            <li className="px-1.5 py-2 hover:text-[#60a5fa]">Blog</li>
          </NavLink> */}
          <NavLink to="/contact">
            <li className="px-1.5 py-2 hover:text-[#60a5fa]">Contact</li>
          </NavLink>
        </ul>
      </nav>
      <div className="flex gap-4">
        <button>
          <BsFillSunFill className="text-3xl text-white" />
        </button>
        <button className="flex md:hidden" onClick={() => setShowMenu(true)}>
          <MdOutlineMenu className="text-3xl text-white" />
        </button>
      </div>
      {showMenu && (
        <div className="w-full flex bg-[rgba(0,0,0,0.3)] top-0 left-0 -z-10 absolute h-dvh">
          {" "}
        </div>
      )}
      <Menu setShowMenu={setShowMenu} menu={showMenu} />
    </div>
  );
};

export default Header;
