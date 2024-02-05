import { useState } from 'react';
import './country.css'
import Countrydetails from '../countryDeatil/countrydetails';
const Country = ({handleflag,country,handleVisitedcountries}) => {
    const {name,flags,population,area,cca3} = country
    const [visited,setVisited] = useState(false)

    // control all functions 
    const handleVisited = () =>{
        setVisited(!visited)
    }  

    return (
        <div className={`country ${visited ? 'visited': 'none-visited'}`}>

            <h3 style={{color: visited ? 'purple':'white'}}>Name : {name?.common}</h3>
            <img src={flags.png} alt="country_flag" />
            <p>populations {population}</p>
            <p>area {area}</p>
            <p>Code {cca3}</p>
            <button onClick={() => handleVisitedcountries(country)}>mark visited</button>
            <br />
            <button onClick={() => handleflag(flags.png)}>Add Flag</button>
            <br />
            <button onClick={handleVisited}>{visited  ? "visited":'going'}</button>
            {visited ? "I have visited this country" : "I have not visited this country"}
             <hr />
             <Countrydetails
                country={country}
                handleVisitedcountries ={handleVisitedcountries}
                handleflag = {handleflag}
             ></Countrydetails>
             
        </div>
    );
};


export default Country;
