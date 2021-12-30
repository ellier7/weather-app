import React, { FormEvent, useState } from "react";
import { getZip } from "../api";

function ZipCode() {
  const [zip, setZip] = useState<number>(0);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    getZip(zip).then((res) => {
      console.log("RES", res);
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
    </>
  );
}

export default ZipCode;
