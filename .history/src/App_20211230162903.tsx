import React from "react";

//components
import ZipCode from "./components/ZipCode";

//styles
import { GlobalStyle } from "./App.styles";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">React Weather App</header>
        <ZipCode />
      </div>
    </>
  );
}

export default App;
