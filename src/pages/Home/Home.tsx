import { useEffect, useState } from 'react';
import axios from 'axios';
import Title from '../../components/Title/Title';
import SearchBar from '../../components/SearchBar/SearchBar';
import WeatherDataCard from '../../components/WeatherDataCard/WeatherDataCard';
import Footer from '../../components/Footer/Footer';
import { WeatherApiResponse } from '../../interfaces/weatherTypes';

function Home() {
  const [citySearched, setCitySearched] = useState<string>('');
  const [weatherData, setWeatherData] = useState<WeatherApiResponse | null>(null);
  
  // Petición a la API y obtener los datos del clima.
  useEffect(() => {
    const getWeatherByLocation = async (latitude: number, longitude: number) => {
      try {
        const url = `${import.meta.env.VITE_API_BASE_URL}?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_API_KEY}&units=metric`;
        const { data } = await axios.get(url);
        
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
  }, [citySearched]);

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

  return (
    <>
      <Title text='React Weather App'/>
      <SearchBar onSearchSubmit={ getWeather } />
      <WeatherDataCard weatherData={ weatherData }/>
      <Footer />
    </>
  );
}

export default Home;
