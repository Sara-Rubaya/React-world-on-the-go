import React, { useState } from 'react';
import './country.css';

const Country = ({country, handleVisitedCountries, handleVisitedFlag}) => {
    const [visited, setVisited] = useState(false);
    // console.log(handleVisitedCountries);


const handleVisited = () =>{
    // if(visited === true){
    //     setVisited(false)
    // }
    // else{
    //     setVisited(true);
    // }
    setVisited(!visited);
    handleVisitedCountries(country);
}

    return (
        <div className={`country fav-country  ${visited && 'country-visited'}`}>
            <h3>Name: {country.name.common}</h3>
            <img src={country.flags.png} alt="" />
            <p>Independent: {country.independent? 'Free': 'Not free'}</p>
            <p>Population: {country.population}</p>
            <button 
            className={visited ? 'btn-visited' : 'btn-not-visited'}
             onClick={handleVisited}>{
               visited ? 'Visited' : 'Not Visited' 
                }</button>
                <button onClick={() => handleVisitedFlag(country.flags.png)}>Add visited flag</button>
        </div>
    );
};

export default Country;