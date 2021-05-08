import React from "react";
import "./Weather.css";
export default function () {
    return (
        <div className="large-card mx-auto mt-3 shadow p-3 mb-5">
            <div className="card-body">
                <form className="search-form" id="search-form">
                    <div className="row">
                        <div className="col-9">
                            <input
                                type="text"
                                id="search-text-input"
                                className="form-control shadow-sm"
                                placeholder="Search for your city"
                                autocomplete="off"
                                autofocus="on"
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
                    CityDate
                <div className="row">
                        <div className="col-6">
                            Weather
                  </div>
                        <div className="col-6">
                            WeatherInfoList
                  </div>
                    </div>
                WeatherForcast
              </div>
            </div>
        </div>
    );
}