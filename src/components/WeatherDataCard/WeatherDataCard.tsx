import moment from 'moment';
import { WeatherDataProps } from '../../interfaces/weatherTypes';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import './WeatherDataCard.css';

function WeatherData(props: WeatherDataProps) {

  if (!props.weatherData) {
    return null;
  }
  
  return (
    <>
      <div className="weather-card">
        <div className="weather-card-dayTime">
        <h3 className="weather-card-dayTime-text">{ moment().format('dddd').slice(0, 3) } { moment().format('Do') }</h3>
          <p>Hoy en {props.weatherData.name}</p>
        </div>

        <div className="weather-card-icon">
          <WeatherIcon weatherId={props.weatherData.weather[0].id} big title={props.weatherData.weather[0].description}/>
        </div>

        <div className="weather-card-degrees">
          <h2 className="weather-card-degrees-text">
            {Math.trunc(props.weatherData.main.temp)}ºC
          </h2>
          <p className="weather-card-degrees-feelsLike">
            Feels like {Math.trunc(props.weatherData.main.feels_like)}ºC
          </p>
        </div>
      </div>
    </>
  );
}

export default WeatherData;