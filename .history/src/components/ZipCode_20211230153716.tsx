import React, { FormEvent, useState } from "react";
import { getZip, Weather } from "../api";

function ZipCode() {
  const [zip, setZip] = useState<number>(0);
  const [weather, setWeather] = useState<Weather>({
    name: "",
    weather: [{ description: "" }],
  });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    getZip(zip).then((res) => {
      setWeather({
        name: res.name,
        weather: res.weather,
      });
      console.log(weather);
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
      {weather.name}
      {weather.weather.map((w) => {
        <div>{w}</div>;
      })}
    </>
  );
}

export default ZipCode;
