import React, { FormEvent } from "react";
import { getZip } from "../api";

function ZipCode() {
  function handleSubmit(e: any) {
    e.preventDefault();
    console.log(e.target[0].value);
    //   getZip(e.currentTarget);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="number" placeholder="Zip Code" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ZipCode;
