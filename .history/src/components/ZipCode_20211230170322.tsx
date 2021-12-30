import React, { FormEvent, useState } from "react";
import { getByZip, getByCity, getHourlyByZip, WeatherData } from "../api";

//styles
import { Wrapper } from "../App.styles";

function ZipCode() {
  const [zip, setZip] = useState<number>(0);
  const [city, setCity] = useState<string>("");

  const [showResults, setShowResults] = useState<boolean>(false);
  const [weather, setWeather] = useState<WeatherData>({
    name: "",
    weather: [],
  });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (zip !== 0) {
      getByZip(zip).then((res) => {
        setWeather({
          name: res.name,
          weather: res.weather,
        });
      });
    } else if (city !== "") {
      getByCity(city).then((res) => {
        setWeather({
          name: res.name,
          weather: res.weather,
        });
      });
    }

    console.log(weather);
    setShowResults(true);
  }

  function showHourlyForecast() {
    getHourlyByZip(zip).then((res) => {
      console.log(res);
    });
  }
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Zip Code"
          onChange={(e) => setZip(e.target.value as any)}
        />
        <input
          type="text"
          placeholder="City"
          onChange={(e) => setCity(e.target.value as any)}
        />
        <button type="submit">Submit</button>
      </form>
      {showResults ? (
        <div className="flex">
          <p>
            <b>Location:</b> {weather.name}
          </p>
          {weather.weather.map((w) => {
            return (
              <div>
                <b>Weather:</b> {w.description}
                <img
                  alt="icon"
                  src={`https://openweathermap.org/img/wn/${w.icon}.png`}
                />
              </div>
            );
          })}

          <button onClick={showHourlyForecast}>Show Hourly</button>
        </div>
      ) : null}
    </Wrapper>
  );
}

export default ZipCode;
