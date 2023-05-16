import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import {Link} from "react-scroll"

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className=" max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full ">
        <p className="text-[#8A3985] "> Hola, mi nombre es </p>
        <h1 className=" text-4xl sm:text-7xl font-bold text-[#ccd6f6] ">
          {" "}
          Agustin Vacca{" "}
        </h1>
        <h2 className=" text-4xl sm:text-7xl font-bold text-[#8892b0] ">
          {" "}
          Soy desarrollador Full-Stack{" "}
        </h2>
        <p className=" text-[#8892b0] py-4 max-w-[700px] ">
          {" "}
          Me especializo principalmente en BackEnd, pero estoy aprendiendo y
          mejorando constantemente en ambos espacios. Mi meta es ser un poco
          mejor que ayer, lograr grandes avances en mi carrera de programador
          y esforzarme por perfeccionar los conocimientos ya adquiridos.{" "}
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#8A3985] hover:border-[#8A3985] ">
            <Link to="proyects" smooth={true} duration={500}>
              Mis trabajos
            </Link>
            <span className=" group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className=" ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
