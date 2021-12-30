import React, { FormEvent } from "react";
import { getZip } from "../api";

function ZipCode() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    console.log(">>", e);
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
