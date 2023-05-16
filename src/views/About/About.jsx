import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300 ">
      <div className=" flex flex-col justify-center items-center w-full h-full ">
        <div className=" max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8 ">
          <div className=" sm:text-right pb-8 pl-4 ">
            <p className=" text-4xl font-bold inline border-b-4 border-[#8A3985] ">
              Sobre mi
            </p>
          </div>
          <div></div>
        </div>
        <div className=" max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 ">
          <div className=" text-4xl font-bold sm:text-right ">
            <p>
              Hola, soy Agustin, un placer conocerte. 
            </p>
            <p>
                En este apartado de comentare un poco de mi,
            </p>
          </div>
          <div>
            <p>
                Estoy conectado a la tecnologia desde ya 7 años, tengo una pasion gigante por las programacion,
                sus infinitas posibilidades y la manera en que nos muestra el mundo. Actualmente estoy en busca de nuevos proyectos, para crecer en conocimiento
                y poder mejorar como programador. Estoy abierto a propuestas y a conocer gente nueva de la cual pueda aprender.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
