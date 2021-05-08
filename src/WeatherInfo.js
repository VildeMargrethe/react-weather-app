import React from "react";
import "./WeatherInfo.css";

export default function WeatherInfo() {
    return (<div>
        <ul className="city-date-temp-list">
            <li>
                <h2 className="city" id="city-name">Paris</h2>
            </li>
            <li className="today row">
                <p id="date">Saturday</p>
            </li>
        </ul>
        <div className="row">
            <div className="col-6">
                <div className="clearfix weather-temperature">
                    <img src="" alt="Clear" id="weather-icon" className="float-left" />
                    <span className="temperature" id="temperature"></span>
                    <span className="units">
                        <a href="#" id="celsius-link" className="active">
                            {" "}
          °C{" "}
                        </a>
        |{" "}
                        <a href="#" id="fahrenheit-link">
                            °F{" "}
                        </a>
                    </span>
                </div>
            </div>
            <div className="col-6">
                <ul className="weather-info-list">
                    <li>
                        <p id="description"></p>
                    </li>
                    <li>
                        <p>
                            Humidity: <span id="humidity"></span>%
        </p>
                    </li>
                    <li>
                        <p>
                            Wind: <span id="wind"></span> km/h
        </p>
                    </li>
                </ul>
            </div>
        </div>
    </div>);
}