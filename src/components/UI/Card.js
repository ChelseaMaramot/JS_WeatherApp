import './Card.css';

const Card = (props) =>{
    //<div className="range">{props.high + '° / ' + props.low + "°"}</div>
    return (
        <div className="card">
            <div className="day">{props.day}</div>
            <div><img src={props.iconURL}/></div>
            <div className="temp">{props.temp}° </div>
            
        </div>
    );
};

export default Card;