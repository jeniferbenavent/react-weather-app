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
        <h4 className="weather-card-title">Current Weather</h4>
        <div className="weather-card-info">
          <div className="weather-card-info-col1">
            <div className="weather-card-info-city">{props.weatherData.name}</div>
            <div className="weather-card-info-icon-degrees">
              <div className="weather-card-info-icon">
                <WeatherIcon weatherId={props.weatherData.weather[0].id} big/>
              </div>
              <div className="weather-card-info-degrees">{Math.trunc(props.weatherData.main.temp)}ºC</div>
            </div>
            <div className="weather-card-info-name">{props.weatherData.weather[0].description}</div>
          </div>
         
          <div className="weather-card-info-col2">
            <p className="weather-card-title">Feels like {props.weatherData.main.feels_like}</p>
            <div className="weather-card-max-minimum">
              <div className="weather-card-max">
                <img src="src\assets\icons\placeholder.png" alt='Maximum temperature icon' width={30}/>
                {Math.trunc(props.weatherData.main.temp_max)}ºC
              </div>
              <div className="weather-card-minimum">
                <img src="src\assets\icons\placeholder.png" alt='Minimum temperature icon' width={30}/>
                {Math.trunc(props.weatherData.main.temp_min)}ºC
              </div>
            </div>
            <div className="weather-card-humidity-wind-preassure">
              <div className="weather-card-more-info-humidity">
                <img src="src\assets\icons\placeholder.png" alt='Humidity icon' width={30}/>
                <p>Humidity</p>
                {Math.trunc(props.weatherData.main.temp_max)}ºC
              </div>
              <div className="weather-card-more-info-wind">
                <img src="src\assets\icons\placeholder.png" alt='Wind icon' width={30}/>
                <p>Wind</p>
                {Math.trunc(props.weatherData.main.temp_max)}ºC
              </div>
              <div className="weather-card-more-info-preassure">
                <img src="src\assets\icons\placeholder.png" alt='Preassure icon' width={30}/>
                <p>Preassure</p>
                {Math.trunc(props.weatherData.main.temp_max)}ºC
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherData;