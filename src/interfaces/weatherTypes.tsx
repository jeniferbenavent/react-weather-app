/*export type WeatherApiResponse = {
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
};*/

export type WeatherData = {
  cityName?: string;
  name: string;
  currentTemp: number;
  forecast: { day: string; temp: number }[];
  main: {
    temp: number,
    feels_like: number
  };
  weather: {
    id: number;
    description: string;
  }[];
}

export type ForecastData = {
  cityName?: string;
  name: string;
  currentTemp: number;
  forecast: { day: string; temp: number }[];
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
  onSubmit: (input: string) => void;
}

export type WeatherDataProps = {
  weatherData: WeatherData | null;
};

export type WeatherIconProps = {
  weatherId: number;
  big?: boolean;
};