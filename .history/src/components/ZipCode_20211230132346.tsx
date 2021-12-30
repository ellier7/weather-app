import React, { FormEvent, useRef } from "react";
import { getZip } from "../api";

function ZipCode() {
  const zip = useRef();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(zip);
    //   getZip(e.currentTarget);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="number" placeholder="Zip Code" ref={zip} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ZipCode;
