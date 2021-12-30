import React, { FormEvent, useState } from "react";
import { getZip } from "../api";

function ZipCode() {
  const [zip, setZip] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(zip);
    //   getZip(e.currentTarget);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Zip Code"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {zip}
    </>
  );
}

export default ZipCode;
