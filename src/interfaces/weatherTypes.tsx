export type WeatherApiResponse = {
  cityName?: string;
  name: string;
  main: {
    temp: number,
    feels_like: number
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

export type WeatherIconProps = {
  weatherId: number;
  big?: boolean;
};