
import { useEffect, useState } from 'react'
import Country from '../country/country';
import './countries.css'

const Countries = () => {
    const [countries,setCountries ] = useState([])
    const [visitedcountries,setVisitedcountries] = useState([])
    const [visitedflag,setVisitedflag] = useState([]);

    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])


    // start functions 
    const handleVisitedcountries = country => {
        setVisitedcountries([...visitedcountries, country])
    }
    const handleflag = flag =>{
        setVisitedflag([...visitedflag, flag])
    }

    return (
        <div >
            <h3>Countries : {countries.length}</h3>
            <div>
                <h5>list of visited country : {visitedcountries.length} </h5>
                {
                    visitedcountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                }
            </div>
            <div>
                <h5>Totla Flag you all ready visitd : {visitedflag.length}</h5>
                <div > 
                    {visitedflag.map((flag) => <img key={flag} className='flag-container' src={flag}></img>)}
                </div>
            </div>
            <div className='countries'>
            {
                countries.map(country => <Country handleflag={handleflag} handleVisitedcountries={handleVisitedcountries}  key={country.cca3} country={country} ></Country> )
            }
            </div>
        </div>
    );
};

export default Countries;