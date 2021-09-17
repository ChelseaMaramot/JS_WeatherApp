import './SearchCity.css';
import React, {useState} from 'react';
import FetchWeather from './FetchWeather';

const SearchCity = props =>{

    const [enteredCity, setEnteredCity] = useState();

    const cityChangeHandler = (event) =>{

        setEnteredCity(event.target.value);
    };

    const textHandler = (text) =>{
        let words = text.toLowerCase().split(" ");
        for (let i=0; i<words.length; i++){
            const lasts = words[i].slice(1);
            words[i] = words[i].charAt(0).toUpperCase() + lasts;
        }
        return words.join(' ');
    }

    const searchCityHandler = (event) =>{
        event.preventDefault();
        enteredCity && props.onChangeCity(textHandler(enteredCity));
        setEnteredCity("");
    };

    return (
        <form className="search">
            <input type="text" placeholder="Search for a city..." value={enteredCity} onChange={cityChangeHandler}></input>
            <button type="submit" onClick={searchCityHandler}></button>
        </form>
    );
};

export default SearchCity;