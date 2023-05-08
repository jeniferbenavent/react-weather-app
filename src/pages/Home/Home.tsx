import { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import WeatherDataCard from '../../components/WeatherDataCard/WeatherDataCard';
import ForecastCard from '../../components/ForecastCard/ForecastCard';
import Footer from '../../components/Footer/Footer';
import { WeatherData } from '../../interfaces/weatherTypes';

function Home() {
  const [citySearched, setCitySearched] = useState<string>('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [location, setLocation] = useState<{ lat: number; lon: number } | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (error) => console.error(error)
    );
  }, []);


  const getWeatherData = async (location?: { lat: number; lon: number }) => {
    let url = `${import.meta.env.VITE_API_BASE_URL}weather?units=metric&appid=${import.meta.env.VITE_API_KEY}`;

    if (citySearched) {
      url = `${url}&q=${citySearched}`;
      
    } else if (location) {
      url = `${url}&lat=${location.lat}&lon=${location.lon}`;
    } else {
      return;
    }
    
    const response = await fetch(url);
    const data = await response.json();

    // Sacar los pronósticos del tiempo de los próximos 7 dias
    const forecastResponse = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}forecast?cnt=7&units=metric&appid=${import.meta.env.VITE_API_KEY}&lat=${data.coord.lat}&lon=${data.coord.lon}`
    );
    const forecastData = await forecastResponse.json();
      
    const weatherData: WeatherData = {
      cityName: citySearched,
      name: data.name,
      currentTemp: data.main.temp,
      forecast: forecastData.list.slice(0, 7).map((forecastItem: any) => ({
        day: forecastItem.dt_txt,
        temp: forecastItem.main.temp,
      })),
      main: data.main,
      weather: data.weather
    };
    setWeatherData(weatherData);
  };

  useEffect(() => {
    if (location) {
      getWeatherData(location);
    }else if (citySearched) {
      getWeatherData();
    }
  }, [location, citySearched]);

  const handleCityChange = (city: string) => {
    setCitySearched(city);
  };

  return (
    <>
      <SearchBar onSearchSubmit={ handleCityChange } />
      <WeatherDataCard weatherData={ weatherData }/>
      <ForecastCard weatherData={ weatherData }/>
      <Footer />
    </>
  );
}

export default Home;