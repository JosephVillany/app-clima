import React, {useState} from "react";

//Importo Hooks llamado de la API
import { useUrl } from "../../Hooks/useUrl";


//Componentes
// Importo el formulario del clima donde va a realizar la busqueda
import ClimaForm from "../../componentes/Home/Form/ClimaForm"
import CardClima from "../../componentes/CardClima";
import Ini from "../../componentes/Ini";


const Home =()=>{

// Todos los Hooks
    const[cityName, setCityName]= useState("");
    const [search, setSearch] = useState("");

    const handleCity=({value})=> {
        setCityName(value);
    }


        const handleSearchClima = async e =>{
            e.preventDefault();
            setSearch(cityName);
            

        }

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=f4d2c2ca4396e4ff4033c5632dafd446`
        const {data, pendiente} = useUrl(url);

    return(
        <div className="bg-gradient-to-t from-green-400 to-blue-500 justify-center">

            <div className="flex-col max-w-sm mx-auto  w-96 bg-gradient-to-t from-green-400 to-blue-500 min-h-screen">
                 
                 <ClimaForm 
                     handleCity={handleCity}
                    handleSearchClima={handleSearchClima}
                 />
                 {data?(
                         <CardClima 

                            cityName={data.name}
                            temp={data.main.temp}
                            weather={data.weather}
                            cambio={pendiente}
                            humidity={data.main.humidity}
                            time={data.timezone}
                            speed={data.wind.speed}

                         />
                     ): <Ini/>
                 }


            </div>

        </div>
    )
}

export default Home