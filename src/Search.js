import React from "react";
import "./Search.css";

export default function Search() {
  return (
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
  );
}
