import axios from "axios";

const API_KEY = "1b6e23c302f427a659f4078a03855e00";
export const getZip = (zip: number) => {
  const url = `api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${API_KEY}`;

  axios.get(url).then((res) => {
    console.log("RES", res);
  });
};
