import React from "react";
import Current from "./Current";
import Search from "./Search";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <Current />
        <footer>
          This project was coded by Andrea Pinales and it is {""}
          <a
            href="https://github.com/Andrea-Pinales/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
