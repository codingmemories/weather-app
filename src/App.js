import React, { useState } from "react";

import WeatherInfo from "./components/WeatherInfo/WeatherInfo"
import WeatherForecast from "./components/WeatherForecast/WeatherForecast";

import "./App.css";

import axios from "axios";

export default function App(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("New York");

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
  
  function search() {
    const apiKey = "e8819fdd3d65c4ef37150f4000b98b6d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();

    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  const codeImg = {
    "01d": "./assets/day/clear.jpg",
    "01n": "./assets/night/clear.jpg",
    "02d": "./assets/day/cloudy.jpg",
    "02n": "./assets/night/cloudy.jpg",
    "03d": "./assets/day/cloudy.jpg",
    "03n": "./assets/night/cloudy.jpg",
    "04d": "./assets/day/cloudy.jpg",
    "04n": "./assets/night/cloudy.jpg",
    "09d": "./assets/day/rainy.jpg",
    "09n": "./assets/night/rainy.jpg",
    "10d": "./assets/day/rainy.jpg",
    "10n": "./assets/night/rainy.jpg",
    "11d": "./assets/day/thunderstorm.jpg",
    "11n": "./assets/night/thunderstorm.jpg",
    "13d": "./assets/day/snowy.jpg",
    "13n": "./assets/night/snowy.jpg",
    "50d": "./assets/day/fog.jpg",
    "50n": "./assets/night/fog.jpg",
  }

  const bgImg = codeImg[weatherData.icon];

  if (weatherData.ready) {
  return (
    <div className="App" 
    style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="container weather">
      
      <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>

        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />

        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/vasylyna-lykhogodenko/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vasylyna Lykhogodenko
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/codingmemories/weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://weather-app-current-weather.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>{" "}
        </footer>
      </div>
    </div>
  ); } else {
    search();

    return "Loading...";
  }
}
