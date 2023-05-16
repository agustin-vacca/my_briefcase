import React from "react";
import HTML from "../../assets/html.png";
import CSS from "../../assets/Css.png";
import JS from "../../assets/JS.png";
import NODEJS from "../../assets/nodeJS.png";
import POSTGRESQL from "../../assets/postgreSQL.png";
import REACT from "../../assets/react.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className=" max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div>
          <p className=" text-4xl font-bold inline border-b-4 border-[#8A3985] ">
            Habilidades
          </p>
          <p className=" py-4 "> {"// "} Tecnologias con las que trabaje </p>
        </div>

        <div className=" w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 ">
          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className=" w-20 mx-auto " src={HTML} alt="HTML Icon" />
            <p className=" my-4"> HTML </p>
          </div>

          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className=" w-20 mx-auto " src={CSS} alt="CSS Icon" />
            <p className=" my-4"> CSS </p>
          </div>
 
            <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
              <img className=" w-20 mx-auto " src={JS} alt="JS Icon" />
              <p className=" my-4"> JavaScript </p>
            </div>

          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className=" w-20 mx-auto " src={REACT} alt="REACT Icon" />
            <p className=" my-4"> REACT </p>
          </div>

          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className=" w-20 mx-auto " src={NODEJS} alt="NODEJS Icon" />
            <p className=" my-4"> NODE.js </p>
          </div>

          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img
              className=" w-20 mx-auto "
              src={POSTGRESQL}
              alt="PostgreSQL Icon"
            />
            <p className=" my-4"> PostgreSQL </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
