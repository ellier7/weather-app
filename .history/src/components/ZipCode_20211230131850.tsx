import React, { FormEvent, useState } from "react";
import { getZip } from "../api";

function ZipCode() {
  const [zipCode, setZipCode] = useState();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(">>", zipCode);
    //   getZip(e.currentTarget);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="number" placeholder="Zip Code" value={zipCode}></input>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ZipCode;
