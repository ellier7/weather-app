import React, { FormEvent, useState } from "react";
import { getZip, Weather } from "../api";

function ZipCode() {
  const [zip, setZip] = useState<number>(0);
  const [weather, setWeather] = useState<Weather>();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    getZip(zip).then((res) => {
      setWeather(res);
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
      {weather}
    </>
  );
}

export default ZipCode;
