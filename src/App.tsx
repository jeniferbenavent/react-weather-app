import "./App.css";

import { Footer, ForecastCard, SearchBar, WeatherDataCard } from "./components";

import { useWeatherCast } from "./hooks/useWeatherCast";

const App = () => {
  
  const { handleCityChange, weatherData } = useWeatherCast();

  return (
    <>
      <SearchBar onSearchSubmit={ handleCityChange } />
      <WeatherDataCard weatherData={ weatherData }/>
      <ForecastCard weatherData={ weatherData }/>
      <Footer />
    </>
  );
}

export default App;