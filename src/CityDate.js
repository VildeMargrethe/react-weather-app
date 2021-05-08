import React from "react";
import "./CityDate.css";

export default function CityDate() {
  return (
    <ul className="city-date-temp-list">
      <li>
        <h2 className="city" id="city-name"></h2>
      </li>
      <li className="today row">
        <p id="date"></p>
      </li>
    </ul>
  );
}
