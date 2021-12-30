import axios from "axios";

export interface Weather {
  id: string;
  main: string;
  description: string;
  icon: string;
}

export interface WeatherData {
  name: string;
  weather: Weather[];
}
const API_KEY = "1b6e23c302f427a659f4078a03855e00";

export const getByZip = async (zip: number): Promise<WeatherData> => {
  const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${API_KEY}`;

  const res = await axios.get(url);

  let w: WeatherData = {
    weather: res.data.weather,
    name: res.data.name,
  };
  return w;
};

export const getByCity = async (cityName: string): Promise<WeatherData> => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;

  const res = await axios.get(url);

  let w: WeatherData = {
    weather: res.data.weather,
    name: res.data.name,
  };
  return w;
};

export const getHourlyForecast = async (zip: number): Promise<WeatherData> => {
  const url = `https://pro.openweathermap.org/data/2.5/forecast/hourly?zip=${zip}&appid=${API_KEY}`;
  const res = await axios.get(url);

  let w: WeatherData = {
    weather: res.data.weather,
    name: res.data.name,
  };
  return w;
};
