// Basics
// Display 5-day weather forecast
// include name, current weather icon, temp, humidity, wind speed, etc
// Display both high and low temperatures of each day
// Include app images for sunny/rainy/cloudy/snowy weatehr
// Responsive and refresh every 5 minutes

// Extra
// User can click particular day of the week to see hourly forecast
// Add react router
// Add graphics library like vx

// src: https://www.upgrad.com/blog/react-project-ideas-topics-beginners/#3_Weather_App

import React, {useState} from "react";
import FetchWeather from "./components/FetchInfo/FetchWeather";
import Forecast from "./components/Weather/WeeklyForecast";
import SearchCity from "./components/FetchInfo/SearchCity";
import WeeklyForecast from "./components/Weather/WeeklyForecast";
import CurrentWeather from "./components/Weather/CurrentWeather";
import "./App.css";

function App() {

  const [enteredCity, setEnteredCity] = useState("Toronto");

  const changeCityHandler = (city) =>{
    setEnteredCity(city);
  };

  return (
    <div>
      <SearchCity
        onChangeCity={changeCityHandler}
      ></SearchCity>
      <FetchWeather
        city = {enteredCity}
      ></FetchWeather>
    </div>
  );
};

export default App;
