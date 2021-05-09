import React from "react";
import DayAndTime from "./DayAndTime";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
    return (<div>
        <ul className="city-date-temp-list">
            <li>
                <h2 className="city">{props.data.city}</h2>
            </li>
            <li className="today row">
                <DayAndTime date={props.data.date} />
            </li>
        </ul>
        <div className="row">
            <div className="col-6">
                <div className="clearfix weather-temperature">
                    <img src="" alt="Clear" id="weather-icon" className="float-left" />
                    <span className="temperature" id="temperature"></span>
                    <span className="units">
                        <a href="#" id="celsius-link" className="active">
                            {Math.round(props.data.temperature)}{" "}
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
                    <li >
                        <p id="description">{props.data.description}</p>
                    </li>
                    <li>
                        <p>
                            Humidity: <span id="humidity">{Math.round(props.data.humidity)}</span>%</p>
                    </li>
                    <li>
                        <p>
                            Wind: <span id="wind">{Math.round(props.data.wind)}</span> km/h</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>);
}