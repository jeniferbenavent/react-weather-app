export interface WeatherData {
  cityName?: string;
  name: string;
  currentTemp: number;
  forecast: { day: string; temp: number; id: number; description: string }[];
  main: {
    temp: number,
    feels_like: number
  };
  weather: {
    id: number;
    description: string;
  }[];
}

export interface SearchBarProps {
  onSearchSubmit: (value: string) => void;
};

export interface WeatherDataProps  {
  weatherData: WeatherData | null;
};

export interface WeatherIconProps  {
  weatherId: number;
  big?: boolean;
  title: string;
};