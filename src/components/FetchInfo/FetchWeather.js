import Forecast from "../Weather/WeeklyForecast"
import WeeklyForecast from "../Weather/WeeklyForecast";
import CurrentWeather from "../Weather/CurrentWeather";
import Reach, {useState, useEffect} from 'react';

const FetchWeather = props => {

    const part = "alerts,minutely,current,hourly";

    const [tempMin, setTempMin] = useState();
    const [tempMax, setTempMax] = useState();
    const [CurrentTemp, setCurrentTemp] = useState();
    const [description, setDescription] = useState();
    const [lat, setLat] = useState(43.6532);
    const [lon, setLon] = useState(79.3832);
    const weeklyWeather = {};
    const [week, setWeek] = useState();
    const [icon, setIcon] = useState();
    


    const key = 'ae5f9e70469e66fb635ad4283fca585d';
    //const url_daily = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${props.city}&cnt=5&appid=${key}`;
    const url_current = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${key}&units=metric`;
    const url_one = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${key}&units=metric`;

    useEffect(() =>{
        const fetchCurrent = setTimeout(() => {
            fetch(url_current)
            .then(response => response.json())
            .then(data => {
                setTempMin(data.main.temp_min);
                setTempMax(data.main.temp_max);
                setDescription(data.weather[0].description);
                setCurrentTemp(data.main.temp);
                setLat(data.coord.lat);
                setLon(data.coord.lon);
                setIcon(`http://openweathermap.org/img/w/${data.weather[0].icon}.png`);
            });
        }, 50);

        return () => {
            clearTimeout(fetchCurrent);
        };

    }, [props.city])

    

    useEffect(() =>{
        let current = 0;
        let temp = [];
        const fetchDaily = setTimeout(() => {
            fetch(url_one)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                [current, ...temp] = data.daily;
                setWeek(temp);
            });
        }, 50);

        return () => {
            clearTimeout(fetchDaily);
        };
    }, [props.city]);

    

    return(
     <div>
         <CurrentWeather
            city = {props.city}
            low = {tempMin}
            high = {tempMax}
            temp = {CurrentTemp}
            desc = {description}
            iconURL = {icon}
         ></CurrentWeather>

         {week && 
            <WeeklyForecast
                weeklyWeather={week}
            >{}</WeeklyForecast>
        
         
        }   
     </div>   
    );
};

export default FetchWeather;