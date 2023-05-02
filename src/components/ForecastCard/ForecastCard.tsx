import { WeatherDataProps } from "../../interfaces/weatherTypes";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import "./ForecastCard.css"

function ForecastCard(props: WeatherDataProps) {
  
  if (!props.weatherData) {
    return null;
  }
  
  return (
    <section className="forecast-card-section">
      <div className="forecast-card">
        <h2 className="forecast-card-title">
          Next 7days...
        </h2>
        <div className="forecast-card-info">
          <div className="days-of-week mon">
            MON
            <WeatherIcon weatherId={props.weatherData.weather[0].id} />
            <p className="days-of-week-degrees">{Math.trunc(props.weatherData.forecast[0].temp)}ºC</p>
          </div>
          <div className="days-of-week thu">
            THU
            <WeatherIcon weatherId={800} />
            <p className="days-of-week-degrees">{Math.trunc(props.weatherData.forecast[1].temp)}ºC</p>
          </div>
          <div className="days-of-week wed">
            WED
            <WeatherIcon weatherId={800} />
            <p className="days-of-week-degrees">{Math.trunc(props.weatherData.forecast[2].temp)}ºC</p>
          </div>
          <div className="days-of-week thu">
            TUE
            <WeatherIcon weatherId={800} />
            <p className="days-of-week-degrees">{Math.trunc(props.weatherData.forecast[3].temp)}ºC</p>
          </div>
          <div className="days-of-week fri">
            FRI
            <WeatherIcon weatherId={800} />
            <p className="days-of-week-degrees">{Math.trunc(props.weatherData.forecast[4].temp)}ºC</p>
          </div>
          <div className="days-of-week sat">
            SAT
            <WeatherIcon weatherId={800} />
            <p className="days-of-week-degrees">{Math.trunc(props.weatherData.forecast[5].temp)}ºC</p>
          </div>
          <div className="days-of-week sun">
            SUN
            <WeatherIcon weatherId={800} />
            <p className="days-of-week-degrees">{Math.trunc(props.weatherData.forecast[6].temp)}ºC</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ForecastCard;