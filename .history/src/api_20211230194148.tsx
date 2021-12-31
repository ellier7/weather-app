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
  coord: { lat: number; lon: number };
}
const API_KEY = process.env.API_KEY;

export const getByZip = async (zip: number): Promise<WeatherData> => {
  const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${API_KEY}`;

  const res = await axios.get(url);

  let w: WeatherData = {
    weather: res.data.weather,
    name: res.data.name,
    coord: res.data.coord,
  };

  return w;
};

export const getByCity = async (cityName: string): Promise<WeatherData> => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;

  const res = await axios.get(url);

  let w: WeatherData = {
    weather: res.data.weather,
    name: res.data.name,
    coord: res.data.coord,
  };
  return w;
};

export const getHourlyForecast = async (weather: WeatherData): Promise<any> => {
  const lat = weather.coord.lat;
  const lon = weather.coord.lon;
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

  const res = await axios.get(url);
  console.log(res);
  return res.data;
};
