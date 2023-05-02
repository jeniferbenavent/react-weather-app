import { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from '../../components/SearchBar/SearchBar';
import WeatherDataCard from '../../components/WeatherDataCard/WeatherDataCard';
import ForecastCard from '../../components/ForecastCard/ForecastCard';
import Footer from '../../components/Footer/Footer';
import { WeatherData } from '../../interfaces/weatherTypes';

function Home() {
  const [citySearched, setCitySearched] = useState<string>('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [location, setLocation] = useState<{ lat: number; lon: number } | null>(null);

  useEffect(() => { // SACAR TU UBICACIÓN
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

    if (citySearched) { // Si por el contrario has dado a buscar una ciudad le pasa a la url el parámetro city.
      url = `${url}&q=${citySearched}`;
      console.log(url);
      
    } else if (location) { // Si hay una localización le añade a la url los parametros lat y lon.
      url = `${url}&lat=${location.lat}&lon=${location.lon}`;
    } else {
      return; // Si no, poner un error.
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
    if (location && !citySearched) {
      getWeatherData(location);
    }
  }, [location]);


  const handleCityChange = (city: string) => {
    setCitySearched(city);
  };

  return (
    <>
      <SearchBar onSubmit={handleCityChange} />
      <WeatherDataCard weatherData={ weatherData }/>
      <ForecastCard weatherData={ weatherData }/>
      <Footer />
    </>
  );
}

export default Home;
/*
  // Petición a la API y obtener los datos del clima.
  useEffect(() => {
    const getWeatherByLocation = async (latitude: number, longitude: number) => {
      try {
        const url = `${import.meta.env.VITE_API_BASE_URL}?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_API_KEY}&units=metric`;
        const { data } = await axios.get(url);
        console.log(url);
        setWeatherData({
          name: data.name,
          main: data.main,
          weather: data.weather
        });
      } catch (error) {
        console.error(error);
      }
    };

    // Obtener la ubicación actual del usuario y pasarle a getWeatherByLocation las coordenadas obtenidas.
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            getWeatherByLocation(position.coords.latitude, position.coords.longitude);
          },
          (error) => {
            console.error(error);
          }
        );
      } else {
        console.error('La Geolocalización no es soportada por el navegador.');
      }
    };
    if (!citySearched) {
      getLocation();
    }
  }, []);

  const getWeather = async (city: string) => {
    try {
      const url = `${import.meta.env.VITE_API_BASE_URL}?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric`;
      const { data } = await axios.get(url);
      setWeatherData ({
        cityName: city,
        name: data.name,
        main: data.main,
        weather: data.weather
      });
      setCitySearched('');
    } catch (error) {
      console.error(error);
    }
  };
*/