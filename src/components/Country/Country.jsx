import { useState } from 'react';
import './Country.css';

const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {

    const { name, flags, population, area, cca3 } = country;

    const [visited, setVisited] = useState(false)

    const handleVisited = () => {
        setVisited(!visited)
    }

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3>Name: {name?.common}</h3>
            <img src={flags.png} alt={flags.alt} />
            {/* <p>Capital:</p>
            <p>Currencies:</p> */}
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>
            <button onClick={() => handleVisitedCountry(country)}>Mark visited</button>
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add flag</button>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Unvisited'}</button>
            <p>{visited ? 'I have visited this country.' : 'I want to visit this country.'}</p>
        </div>
    );
};

export default Country;