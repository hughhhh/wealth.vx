import React from "react";
import ReactDOM from "react-dom";

import Table from "./Table";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <h1>wealth.vx</h1>
      </div>
      <div style={{ display: "flex" }}>dfsafdsafs</div>
      <Table />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
