import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <div>
      <div className="flex justify-between items-center h-24 mx-auto max-w-[1240px] px-4  text-white">
        <h1 className="w-full text-3xl font-bold text-[#31E1F7]">
          Aziz-Portfolio
        </h1>
        <ul className="hidden md:flex">
          <li className="p-4">
            <Link
              to="hero"
              spy={true}
              style={{ cursor: "pointer" }}
              smooth={true}
              offset={50}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className="p-4">
            <Link
              to="about"
              style={{ cursor: "pointer" }}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="p-4">
            <Link
              to="skill"
              spy={true}
              style={{ cursor: "pointer" }}
              smooth={true}
              offset={50}
              duration={500}
            >
              Skils
            </Link>
          </li>
          <li className="p-4">
            <Link
              to="experience"
              spy={true}
              style={{ cursor: "pointer" }}
              smooth={true}
              offset={50}
              duration={500}
            >
              Experience
            </Link>
          </li>
          <li className="p-4">
            <Link
              to="project"
              spy={true}
              style={{ cursor: "pointer" }}
              smooth={true}
              offset={50}
              duration={500}
            >
              Project
            </Link>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu scale={20} />}
        </div>
        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-bold text-[#31E1F7] m-4">
            Z-Project
          </h1>
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4 border-b border-gray-600">Skill</li>
          <li className="p-4 border-b border-gray-600">Experience</li>
          <li className="p-4">Project</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
