import React, { useState } from "react";
import Conditions from "../Conditions/Conditions";
import weather from "./weather.jpg";
import "./forecast-styles.css";

const Forecast = () => {
  let [city, setCity] = useState("");
  let [unit, setUnit] = useState("imperial");
  let [responseObj, setResponseObj] = useState({});

  const uriEncodedCity = encodeURIComponent(city);

  function getForecast(e) {
    e.preventDefault();

    fetch(
      `https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
          "x-rapidapi-key": "5cc607410cmsh9b21055551948e2p15397cjsn4a3aa4e4ede5"
        }
      }
    )
      .then(response => response.json())
      .then(response => {
        setResponseObj(response);
      });
  }

  return (
    <div
      className="weather-container card bg-light d-flex flex-column align-items-center col-12"
      style={{ width: 400 }}
    >
      <img className="card-img-top" src={weather} alt="Card image cap"></img>
      <div
        id="weather-headline"
        classname="card-title weather-headline bg-dark"
      >
        <h2> Check the weather</h2>
      </div>

      <form
        id="form"
        className="form-group d-flex flex-column align-items-center col-12"
        onSubmit={getForecast}
      >
        <div className="form-group col-8">
          <input
            type="text"
            placeholder="Enter City"
            maxLength="50"
            value={city}
            onChange={e => setCity(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="radio-buttons">
          <div className="form-check">
            <input
              type="radio"
              name="units"
              checked={unit === "imperial"}
              value="imperial"
              onChange={e => setUnit(e.target.value)}
              className="form-check-input"
            />
            <label className="form-check-label">Fahrenheit</label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              name="units"
              checked={unit === "metric"}
              value="metric"
              onChange={e => setUnit(e.target.value)}
              className="form-check-input"
            />
            <label className="form-check-label">Celcius</label>
          </div>
        </div>
        <div className="button-container">
          <button className="btn btn-success weather-btn btn-lg" type="submit">
            Get Forecast
          </button>
        </div>
      </form>

      <Conditions responseObj={responseObj} />
    </div>
  );
};

export default Forecast;
