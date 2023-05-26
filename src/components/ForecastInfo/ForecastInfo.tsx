import { WeatherDataProps } from "../../interfaces/weatherTypes";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import "./ForecastInfo.css"

function ForecastInfo(props: WeatherDataProps) {
  
  if (!props.weatherData) {
    return null;
  }
  const daysOfWeek = ['MON','TUE','WED','THU','FRI','SAT','SUN']
  const today = new Date().getDay();
  const reorderedDaysOfWeek = [...daysOfWeek.slice(today), ...daysOfWeek.slice(0, today)];

  return (
    <div className="forecast-card-info">
      {reorderedDaysOfWeek.map((day, index) => (
        <div className={`days-of-week ${day.toLowerCase()}`} key={index}>
          {day}
          {props.weatherData && 
            <WeatherIcon weatherId={props.weatherData.forecast[index].id} title={props.weatherData.forecast[index].description}/>
          }
          {props.weatherData && 
            <p className="days-of-week-degrees">{Math.trunc(props.weatherData.forecast[index].temp)}ºC</p>
          }
        </div>
      ))}
    </div>
  );
}

export default ForecastInfo;