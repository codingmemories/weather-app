import React from 'react';
import WeatherIcon from "../WeatherIcon/WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }
  
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <>
      <div className="weatherForecast-day">
            {day()}
            </div>
            <WeatherIcon code={props.data.weather[0].icon} size={36} />
            <div className="weatherForecast-temperatures">
              <span className="weatherForecast-temperature-max">
              {maxTemperature()}
              </span>
              <span className="weatherForecast-temperature-min">
              {minTemperature()}
              </span>
            </div>
    </>
  )
}
