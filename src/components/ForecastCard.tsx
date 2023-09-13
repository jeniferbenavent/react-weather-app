import "../styles/ForecastCard.css"

import { ForecastInfo } from "./ForecastInfo";
import { WeatherDataProps } from "../interfaces/weatherTypes";

export const ForecastCard = (props: WeatherDataProps) => {
  
  if (!props.weatherData) {
    return null;
  }
  
  return (
    <section className="forecast-card-section">
      <div className="forecast-card">
        <h2 className="forecast-card-title">
          Next 7days...
        </h2>
        <ForecastInfo weatherData={props.weatherData} />
      </div>
    </section>
  );
}