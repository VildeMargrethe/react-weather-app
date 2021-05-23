import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        setWeatherData({
            ready: true,
            coordinates: response.data.coord,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            wind: response.data.wind.speed,
            city: response.data.name,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    function search() {
        const apiKey = "f7f2f10d7d1c65f4aa2b4e518e688029";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    if (weatherData.ready) {
        return (
            <div className="large-card mx-auto mt-3 shadow p-3 mb-5">
                <div className="card-body">
                    <form onSubmit={handleSubmit} className="search-form" id="search-form">
                        <div className="row">
                            <div className="col-9">
                                <input
                                    type="text"
                                    id="search-text-input"
                                    className="form-control shadow-sm"
                                    placeholder="Search for your city"
                                    autocomplete="off"
                                    autofocus="on"
                                    onChange={handleCityChange}
                                />
                            </div>
                            <div className="col-3">
                                <button
                                    type="submit"
                                    id="search-button"
                                    className="fas fa-search-location btn btn-primary w-100">
                                    <i className="fas fa-search-location"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="inner-card mt-3 w-110">
                        <WeatherInfo data={weatherData} />
                        <WeatherForecast coordinates={weatherData.coordinates} />
                    </div>
                </div>
            </div>
        );
    } else {
        search();
        return "Loading...";
    }

}