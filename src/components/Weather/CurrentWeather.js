import './CurrentWeather.css';
import React, {useState} from 'react';


const CurrentWeather = (props) =>{
    return <div className="current-container">
        <div className="current-image"><img src={props.iconURL}/></div>
        <div className="city">{props.city}</div>
        <div className="currentTemp">{Math.round(props.temp)}℃</div>
        <div className="description">{props.desc}</div>
        <div className="low-high">{Math.round(props.low)}° / {Math.round(props.high)}°</div>
    </div>
};

export default CurrentWeather;
