import React from "react";
import WeatherIcon from "../WeatherIcon/WeatherIcon";

import "./WeatherForecast.css";

import axios from "axios";

export default function WeatherForecast() {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = `e8819fdd3d65c4ef37150f4000b98b6d`;
  let longitude = 40.7;
  let latitude = 74;
  let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="weatherForecast">
      <div className="row">
        <div className="col">
          <div className="weatherForecast-day">Thu</div>
          <WeatherIcon code="01d" size={36} />
          <div className="weatherForecast-temperatures">
            <span className="weatherForecast-temperature-max">19°</span>
            <span className="weatherForecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
