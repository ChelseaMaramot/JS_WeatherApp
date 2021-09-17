import Card from '../UI/Card.js'
import './WeeklyForecast.css'
import FetchWeather from '../FetchInfo/FetchWeather.js';

// Props would be an object 

const WeeklyForecast = props =>{
    const day_of_week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
     return <div className="day">
        {props.weeklyWeather.map(day =>
            <Card
                key = {2}
                day = {day_of_week[new Date(day.dt * 1000).getDay()]}
                temp = {Math.round(day.temp.day)}
                high = {Math.round(day.temp.max)}
                low = {Math.round(day.temp.min)}
                iconURL = {`http://openweathermap.org/img/w/${day.weather[0].icon}.png`}
            ></Card>
        )}
        
    </div>
}
export default WeeklyForecast;