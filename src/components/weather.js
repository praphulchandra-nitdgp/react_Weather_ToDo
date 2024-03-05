import React from 'react';
import './Weather.css';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDroplet } from '@fortawesome/free-solid-svg-icons'
import { faWind } from '@fortawesome/free-solid-svg-icons'
import Navbar from './Navbar';
import Footer from './footer';

const api = {
  key :'f27b269d54e4fa1e72993364a80fa8bd',
  base : "https://api.openweathermap.org/data/2.5/",
};

const Weather = () => {
  const [search,setSearch] = useState("");
  const [weather, displayWeather] = useState({});
 const [error,setError] = useState("");

  const getWeather = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('City not found');
        }
        return response.json();
      })
      .then(data => {
        displayWeather(data);
      })
      .catch(error => {
        setError(error.message);
        alert(error.message);
      });
  };

  
  return (
    <>
     <Navbar />
       <section className='hero-section'>
        <div id="weather-container">
        <h2>WeatherForYou!</h2>
        <input type="text" id="city" placeholder="Enter city" onChange={(e) => setSearch(e.target.value)}/>
        <button onClick={getWeather}>Search</button>

        {typeof weather.main !== "undefined" ? ( 
        <><div className="body">
           <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt=''></img>
            <p id="city">{weather.name}</p>
            <p id="temp">{weather.main.temp}°C</p>
            <p id="description">{weather.weather[0].description}</p>

          </div>
          <div className="detail">
              <div className="col">
                <div>
                 <i><FontAwesomeIcon icon={faDroplet} /></i>
                  <p id="humidity">{weather.main.humidity}%</p>
                  <p>Humidity</p>
                </div>
              </div>
              <div className="col">
                <div>
                <i><FontAwesomeIcon icon={faWind} /></i>
                  <p id="wind">{weather.wind.speed}m/s</p>
                  <p>WindSpeed</p>
                </div>
              </div>
          </div></>
            ) : ("")
          }
        </div>  
      </section>
      <div className="footer">
    <Footer/>
    </div>
      </>
  );
}

export default Weather;
