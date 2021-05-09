import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");
    function convertToFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function convertToCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }
    function fahrenheit() {
        return (props.celsius * 9) / 5 + 32;
    }


    if (unit === "celsius") {
        return (<div>
            <span className="temperature" id="temperature">{Math.round(props.celsius)}</span>
            <span className="units">
                {" "}°C{" "}
            |{" "}
                <a href="#" onClick={convertToFahrenheit} id="fahrenheit-link">
                    °F{" "}
                </a>
            </span>
        </div>);
    } else {
        return (<div>
            <span className="temperature" id="temperature">{Math.round(fahrenheit())}</span>
            <span className="units">
                <a href="#" onClick={convertToCelsius} id="fahrenheit-link">
                    °C{" "}
                </a>
                {" "}
            |{" "}°F{" "}
            </span>
        </div>);
    }

}