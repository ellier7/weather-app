import axios from "axios";

export interface Weather {
  name: string;
  weather: Array<object>;
}
const API_KEY = "1b6e23c302f427a659f4078a03855e00";
export const getZip = async (zip: number): Promise<Weather[]> => {
  const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${API_KEY}`;

  const res = await axios.get(url);

  return res.data.map((results: Weather) => ({
    weather: results.weather,
    name: results.name,
  }));
};
