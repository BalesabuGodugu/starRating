import React from "react";
import ReactDOM from "react-dom";
import StarRating from "./starRating";
import Title from "./demo";
import "./styles.css";

let starRating = [
  { key: "very poor", value: -2 },
  { key: "poor", value: 1 },
  { key: "ok", value: 0 },
  { key: "Good", value: 1 },
  { key: "Very Good", value: 2 }
];

function App() {
  return (
    <div className="App">
      <StarRating ratings={starRating} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
