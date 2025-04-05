import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './countries.css'

const Countries = ({countriesPromise}) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags,setVisitedFlags] = useState([]);
    
    const countries = use(countriesPromise);

    const handleVisitedFlag = (flag) =>{
        const newVisitedFlags = [...visitedFlags,flag];
        setVisitedFlags(newVisitedFlags);
    }

    const handleVisitedCountries = (country) => {
        console.log('country visited clicked to be added',country);
        const newVisitedCountries = [...visitedCountries, country]
       setVisitedCountries(newVisitedCountries);
    }
    
    return (
        <div>
            <h1>Travelling Countries: {countries.length}</h1>
            <h3>Traveled so far: {visitedCountries.length}</h3>
            <div className='visited-Flags-container'>
                {
                    visitedFlags.map(flag => <img src={flag}></img>)
                }
            </div>
            <ol>
                {
                    visitedCountries.map(country => <li>{country.name.common}</li>)
                }
            </ol>
            <div className='countries'>
            {
                countries.map(country => <Country key={country.cca3}handleVisitedCountries={handleVisitedCountries}
                    handleVisitedFlag = {handleVisitedFlag} country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;