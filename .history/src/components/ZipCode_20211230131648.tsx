import React, { FormEvent } from "react";
import { getZip } from "../api";

function ZipCode() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newValue = e.target?[0];
    console.log(">>", newValue);
    //   getZip(e.currentTarget);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="number" placeholder="Zip Code"></input>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ZipCode;
