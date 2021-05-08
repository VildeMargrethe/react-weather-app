import React from "react";
import "./WeatherForecast.css";

export default function WeatherForcast() {
  return (
    <div className="day-card mx-auto mt-3 shadow p-3 mb-5">
      <div className="row weather-forecast" id="weather-forecast"></div>
    </div>
  );
}
