import React from "react";

const Contact = () => {
    return(
        <div name="contact" className=" w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
            <form method='POST' action="https://getform.io/f/3386e192-220a-4adf-b4c6-5c6683120ba8" className="flex flex-col max-w-[600px] w-full ">
                <div className="pb-8">
                    <p className=" text-4xl font-bold inline border-b-4 border-[#8A3985] text-gray-300"> Contactame </p>
                    <p className=" text-gray-300 py-4 "> {'// '} Enviame un mensaje a traves de este formulario o a mi email - agusvacca13@gmail.com </p>
                </div>
                <input className="bg-[#ccd6f6] p-2" type="text" placeholder="Su nombre" name='name' />
                <input className="my-4 p-2 bg-[#ccd6f6] " type="email" placeholder="Se email" name='email' />
                <textarea className="bg-[#ccd6f6]" name="message" rows="10" placeholder="Su mensaje" ></textarea>
                <button className="text-white border-2 hover:bg-[#8A3985] hover:border-[#8A3985] px-4 py-3 my-8 mx-auto flex items-center"> Enviar! </button>
            </form>

        </div>
    )
}

export default Contact;