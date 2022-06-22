import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather />
        <footer>
          Open-sourced code by Sara SM on {""}
          <a
            href="https://github.com/SaraSaria/react-weather-app"
            target="_blank"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}
