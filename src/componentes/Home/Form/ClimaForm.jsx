import React from "react";

const ClimaForm =( { handleCity,  handleSearchClima} )=>{
    return(
        <form className="flex justify-center text-text pt-10 focus:border-none" action="" onSubmit={(e)=> handleSearchClima(e)}>
            <input  className="p-1 rounded-l my-4 focus:bg-whiteAplha "  type="text"  
            placeholder="Ingrese  Ciudad"
             onChange={ ({target}) => handleCity(target)  }  />
            <input type="submit" value="Search!" className="rounded-r my-4" />
        </form>
    )
}

export default ClimaForm