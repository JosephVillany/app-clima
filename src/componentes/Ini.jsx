import React from "react";

import logo1 from "../assets/svg/initiation/initiation1.svg"
import logo2 from "../assets/svg/initiation/initiation2.svg"

const Ini = () =>{


    return(
        <div className="text-center mt-0 flex-col">
            <img className="object-none object-right h-40 w-full" src={logo1} alt="weather"/>
            <h2 className="text-5xl mx-12 mb-8 font-bold text-text shadow-md rounded-lg"><span className="text-red  ">Busca!</span> el clima en tu ciudad</h2>

            <img className="object-none object-left h-40 w-full" src={logo2} alt="weather"/>
        </div>

    )
}

export default Ini;