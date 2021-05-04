import React from "react";
import Search from "./Search";
import CityDate from "./CityDate";
import Weather from "./Weather";
import WeatherInfoList from "./WeatherInfoList";
import WeatherForecast from "./WeatherForecast";
import Signature from "./Signature";
import "./Weather.css";

export default function(){
    return(
        <div className="App">
      <div className="container">
        <div className="large-card mx-auto mt-3 shadow p-3 mb-5">
          <div className="card-body">
            <Search />
            <div className="inner-card mt-3 w-110">
              <CityDate />
              <div className="row">
                <div className="col-6">
                  <Weather />
                </div>
                <div className="col-6">
                  <WeatherInfoList />
                </div>
              </div>
              <WeatherForecast />
            </div>
          </div>
        </div>
      </div>
      <Signature />
    </div>
        );
}