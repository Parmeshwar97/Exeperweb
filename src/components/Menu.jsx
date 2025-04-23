import { IoMdClose } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Menu = ({ setShowMenu, menu }) => {
  return (
    <>
      <div
        className="w-[60vw] block md:hidden px-3 top-0 bg-black text-white  absolute h-dvh transition duration-500"
        style={{ transform: menu ? "translateX(-20px)" : "translateX(-500px)" }}
      >
        <div className="flex transition-all duration-300  items-center py-8 gap-10">
          <Link to="/">
            <img src={logo} alt="logo" className="" />
          </Link>
          <button onClick={() => setShowMenu(false)} className="h-fit">
            <IoMdClose size={"25"} />
          </button>
        </div>
        <nav>
          <ul className="flex flex-col gap-5 list-none">
            <NavLink to="/">
              <li className="px-1.5 py-2 hover:text-[#60a5fa]">Home</li>
            </NavLink>
            <NavLink to="/about">
              <li className="px-1.5 py-2 hover:text-[#60a5fa]">About</li>
            </NavLink>
            <NavLink to="/services">
              <li className="px-1.5 py-2 hover:text-[#60a5fa]">Services</li>
            </NavLink>
            <NavLink
              to="/portfolio"
              className="px-1.5 py-2 hover:text-[#60a5fa]"
            >
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
      </div>
    </>
  );
};

export default Menu;
