import { WeatherDataProps } from '../../interfaces/weatherTypes';
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
                <img src="/src/assets/icons/cloudy.png" alt="Icon that indicates the weather of the city." width="95px"/>
              </div>
              <div className="weather-card-info-degrees">{Math.trunc(props.weatherData.main.temp)}ºC</div>
            </div>
            <div className="weather-card-info-name">{props.weatherData.weather[0].description}</div>
          </div>
         
          <div className="weather-card-info-col2">
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherData;