import React from "react";

//components
import ZipCode from "./components/ZipCode";

//styles
import { GlobalStyle } from "./App.styles";

function App() {
  return (
    <>
      <GlobalStyle>
        <div className="App">
          <header className="App-header">React Weather App</header>
          <ZipCode />
        </div>
      </GlobalStyle>
    </>
  );
}

export default App;
