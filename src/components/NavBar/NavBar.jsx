import React, { useState } from "react";
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../../assets/logo.png";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handlerClick = () => setNav(!nav);

  return (
    <div className=" fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 ">
      <div>
        <img src={Logo} alt="AVCC" style={{ width: "130px" }} />
      </div>

      {/* Menu */}
      <ul className="hidden md:flex font-bold">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Inicio
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            Sobre mi
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Habilidades
          </Link>
        </li>
        <li>
          <Link to="proyects" smooth={true} duration={500}>
            Proyectos
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contactame
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handlerClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex  flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handlerClick} to="home" smooth={true} duration={500}>
            Inicio
          </Link>{" "}
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handlerClick} to="about" smooth={true} duration={500}>
            Sobre mi
          </Link>{" "}
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handlerClick} to="skills" smooth={true} duration={500}>
            Habilidades
          </Link>{" "}
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handlerClick} to="proyects" smooth={true} duration={500}>
            Proyectos
          </Link>{" "}
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handlerClick} to="contact" smooth={true} duration={500}>
            Contactame
          </Link>{" "}
        </li>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          {/* Linkedin */}
          <li className=" w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 ">
            <a
              className=" flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/agustin-vacca-756575253/"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          {/* Github */}
          <li className=" w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] ">
            <a
              className=" flex justify-between items-center w-full text-gray-300"
              href="https://github.com/agustin-vacca"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          {/* Email */}
          <li className=" w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] ">
            <a
              className=" flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              <Link onClick={handlerClick} to="contact" smooth={true} duration={500}>
              Email
              </Link> <HiOutlineMail size={30} />
            </a>
          </li>
          {/* etc */}
          <li className=" w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] ">
            <a
              className=" flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
