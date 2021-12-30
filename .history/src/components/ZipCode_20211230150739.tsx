import React, { FormEvent, useState } from "react";
import { getZip } from "../api";

function ZipCode() {
  const [zip, setZip] = useState(0);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    getZip(zip);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Zip Code"
          value={zip}
          onChange={(e) => setZip(e.target.value as any)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default ZipCode;
