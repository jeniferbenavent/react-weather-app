export type WeatherApiResponse = {
  cityName?: string;
  name: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: 16.68,
    temp_max: number,
    pressure: number,
    humidity: number
  };
  weather: {
    id: number;
    description: string;
  }[];
};

export type SearchBarProps = {
  onSearchSubmit: (value: string) => void;
};

export type WeatherDataProps = {
  weatherData: WeatherApiResponse | null;
};

export type TitleProps = {
  text: string;
};

export type WeatherIconProps = {
  weatherId: number;
  big?: boolean;
};