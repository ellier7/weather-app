import React, { FormEvent, useState } from "react";
import { getZip, WeatherData } from "../api";

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
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Zip Code"
          onChange={(e) => setZip(e.target.value as any)}
        />
        <button type="submit">Submit</button>
      </form>

      {weather.name ? `Location: ${weather.name}` : null}
      {weather.weather.map((w) => {
        return <div>{w.description}</div>;
      })}
    </>
  );
}

export default ZipCode;
