import React from "react";
import DayAndTime from "./DayAndTime";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";
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
                    <WeatherIcon code={props.data.icon} />
                    <WeatherTemperature celsius={props.data.temperature} />
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