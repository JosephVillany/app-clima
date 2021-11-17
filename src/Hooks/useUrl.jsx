/* eslint-disable no-throw-literal */
import  {useState, useEffect, } from 'react'


export const useUrl = ( url ) =>{

    const [data, setData] = useState(null);
    const [pendiente, setPendiente] = useState(true);
    const [error, setError] = useState( { er:true,status:"Search City",statusText:null } );

    useEffect( ()=> {

        const dataApiWeather = async (url) => {
            
            try {
                const response = await fetch(url)

                if( !response.ok ){
                    throw {
                        er:true, 
                        status: response.status,
                        statusText: response.statusText === "Not Found" || response.statusText === "Bad Request"? "Ocurrio un error": response.statusText
                    }

                }
                const data = await response.json();
                setPendiente(false);
                setData(data);

            } catch (er){
                setPendiente(true);
                setError( { er } )

            }

        }

            dataApiWeather(url);

    },[url]);

    return {data, pendiente, error}

}

