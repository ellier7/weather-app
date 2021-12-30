import React, { FormEvent, useState } from "react";
import { getZip, WeatherData } from "../api";

//styles
import { Wrapper } from "../App.styles";

function ZipCode() {
  const [zip, setZip] = useState<number>(0);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [weather, setWeather] = useState<WeatherData>({
    name: "",
    weather: [],
  });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    getZip(zip).then((res) => {
      setWeather({
        name: res.name,
        weather: res.weather,
      });
      setShowResults(true);
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
        <button type="submit">Submit</button>
      </form>
      {showResults ? (
        <div>
          <p>
            <b>Location:</b> {weather.name}
          </p>
          {weather.weather.map((w) => {
            return (
              <div className="flex">
                <b>Weather:</b> {w.description}
                <img
                  alt="icon"
                  src={`https://openweathermap.org/img/wn/${w.icon}.png`}
                />
              </div>
            );
          })}
        </div>
      ) : null}
    </Wrapper>
  );
}

export default ZipCode;
