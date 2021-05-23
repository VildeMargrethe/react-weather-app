import React from "react";

export default function WeatherTemperature(props) {
    return (<div>
        <span className="temperature" id="temperature">
            {Math.round(props.celsius)}
        </span>
        <span className="units">
            {" "}°C
        </span>
    </div>);
}