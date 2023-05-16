import React from "react";
import PF from "../../assets/PF.jpg";

const Proyects = () => {
  return (
    <div
      name="proyects"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div className=" pb-8 ">
          <p className=" text-4xl font-bold inline border-b-4 border-[#8A3985]  ">
            Proyectos
          </p>
          <p className=" py-6 ">
            {"// "} Echa un vistazo a mis ultimos proyectos !!{" "}
          </p>
        </div>
        {/* Container */}
        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${PF})` }}
            className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Gym-commerce
              </span>
              <div className="pt-8 text-center">
                <a href="https://cardigangym-santiaguero91.vercel.app/">
                  <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg  ">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/agustin-vacca/Gym-commerce">
                  <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg  ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Other Proyect */}
            {/* <div
            style={{ backgroundImage: `url(${PF})` }}
            className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
             Hover Effect 
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Gym-commerce
              </span>
              <div className="pt-8 text-center">
                <a href="https://cardigangym-santiaguero91.vercel.app/">
                  <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg  ">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/agustin-vacca/Gym-commerce">
                  <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg  ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div> */}

        </div>
      </div>
    </div>
  );
};

export default Proyects;
