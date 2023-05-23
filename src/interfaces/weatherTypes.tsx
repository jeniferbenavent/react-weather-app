export type WeatherData = {
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

export type SearchBarProps = {
  onSearchSubmit: (value: string) => void;
};

export type WeatherDataProps = {
  weatherData: WeatherData | null;
};

export type WeatherIconProps = {
  weatherId: number;
  big?: boolean;
  title: string;
};