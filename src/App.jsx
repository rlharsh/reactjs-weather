import { useEffect, useState } from 'react';
import axios from "axios";

/* Import Modules/Components */
import Hero from './Components/Hero'

/* Import the Application CSS */
import './css/app.css'
 
function App() {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = '4d10ed201011714313e0ce633ce72e41';

  const geolocationAPI = navigator.geolocation;

  class WeatherData {
    constructor(data) {
      this.coord = data.coord;
      this.weather = data.weather;
      this.base = data.base;
      this.main = data.main;
      this.visibility = data.visibility;
      this.wind = data.wind;
      this.snow = data.snow;
      this.clouds = data.clouds;
      this.dt = data.dt;
      this.sys = data.sys;
      this.timezone = data.timezone;
      this.id = data.id;
      this.name = data.name;
      this.cod = data.cod;
    }
  }

  useEffect(() => {
    getUserCoordinates();
  }, []);

  useEffect(() => {
    if (lat != null) {
      getWeatherData();
    }
  }, [lat])

  function getWeatherData() {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=imperial`)
      .then(response => {
        const weatherData = new WeatherData(response.data);
        setWeatherData(weatherData);
      })
      .catch(error => {

      })
      .then(() => {
        
      })
  }
 
  const getUserCoordinates = () => {
    if (!geolocationAPI) {
      setError('Geolocation API is not available in your browser!')
    } else {
      geolocationAPI.getCurrentPosition((position) => {
        const { coords } = position;
        setLat(coords.latitude);
        setLong(coords.longitude);
      }, (error) => {
        setError('Something went wrong getting your position!')
      })
    }
  }

  return (
    <main className='main'>
      <Hero data={weatherData}/>
    </main>
  );
}
 
export default App;