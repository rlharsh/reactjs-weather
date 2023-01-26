import React, { useEffect, useState } from 'react'



/* Import the CSS for Hero */
import '../css/hero.css'

import TempIcon from '../assets/icons/01d.svg';

import  SunnyDay from '../assets/icons/01d.svg'
import  SunnyNight from '../assets/icons/01n.svg'
import  CloudDay from '../assets/icons/02d.svg'
import  CloudNight from '../assets/icons/02n.svg'
import  BrokenCloudsDay from '../assets/icons/04d.svg'
import  BrokenCloudsNight from '../assets/icons/04n.svg'
import  RainShowersDay from '../assets/icons/09d.svg'
import  RainShowersNight from '../assets/icons/09n.svg'
import  RainDay from '../assets/icons/10d.svg'
import  RainNight from '../assets/icons/10n.svg'
import  ThunderstormDay from '../assets/icons/11d.svg'
import  ThunderstormNight from '../assets/icons/11n.svg'
import  SnowDay from '../assets/icons/13d.svg'
import  SnowNight from '../assets/icons/13n.svg'
import  MistDay from '../assets/icons/50d.svg'
import  MistNight from '../assets/icons/50n.svg'

const Hero = (props) => {

    const [city, setCity] = useState();
    const [lat, setLat] = useState();
    const [lon, setLon] = useState();
    const [time, setTime] = useState(null);
    const [temp, setTemp] = useState(null);
    const [weatherIcon, setWeatherIcon] = useState(TempIcon);
    const [weatherDescription, setWeatherDescription] = useState(null);
    const [high, setHight] = useState(null);
    const [low, setLow] = useState(null);
    const [windSpeed, setWindSpeed] = useState(null);
    const [humidity, setHumidity] = useState(null);
    const [sunrise, setSunrise] = useState(null);
    const [sunset, setSunset] = useState(null);


    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    

    setTimeout(() => { 
        setTime(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
    }, 1000);

    month = date.toLocaleString('default', { month: 'long' });
    
    useEffect(() => {
        if (props.data != null) {
            console.log(props.data);
            setCity(props.data.name);
            setLat(props.data.coord.lat);
            setLon(props.data.coord.lon);
            setTemp(props.data.main.temp);
            setHight(props.data.main.temp_max);
            setLow(props.data.main.temp_min);
            setWeatherDescription(props.data.weather[0].description);
            setWindSpeed(props.data.wind.speed);
            setHumidity(props.data.main.humidity);
            setSunrise(unixToNormal(props.data.sys.sunrise));
            setSunset(unixToNormal(props.data.sys.sunset));
            getWeatherIcon();
        }
    }, [props]);

    function getWeatherIcon() {
        switch (props.data.weather[0].icon) {
            case '01d':
                setWeatherIcon(SunnyDay);
                break;
            case '01n':
                setWeatherIcon(SunnyNight);
                break;
            case '02d':
                setWeatherIcon(CloudDay);
                break;
            case '02n':
                setWeatherIcon(CloudNight);
                break;
            case '03d':
                setWeatherIcon(CloudDay);
                break;
            case '03n':
                setWeatherIcon(CloudNight);
                break;
            case '04d':
                setWeatherIcon(BrokenCloudsDay);
                break;
            case '04n':
                setWeatherIcon(BrokenCloudsNight);
                break;
            case '09d':
                setWeatherIcon(RainShowersDay);
                break;
            case '09n':
                setWeatherIcon(RainShowersNight);
                break;
            case '10d':
                setWeatherIcon(RainDay);
                break;
            case '10n':
                setWeatherIcon(RainNight);
                break;
            case '11d':
                setWeatherIcon(ThunderstormDay);
                break;
            case '11n':
                setWeatherIcon(ThunderstormNight);
                break;
            case '13d':
                setWeatherIcon(SnowDay);
                break;
            case '13n':
                setWeatherIcon(SnowNight);
                break;
            case '50d':
                setWeatherIcon(MistDay);
                break;
            case '50n':
                setWeatherIcon(MistNight);
                break;
        }
    }

    function unixToNormal(unixTime) {
        var date = new Date(unixTime * 1000);
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var seconds = "0" + date.getSeconds();
        var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        return formattedTime;
      }

    return (
        <>
            <div className="location">
                <div className="location__geographic">
                    <h1>{city}</h1>
                    <p>{lat}, {lon}</p>
                </div>
                <div className="location__date">
                    <h2>{`${day} • ${month} • ${year}`}</h2>
                    <p>{time}</p>
                </div>
            </div>
            <div className='hero'>
                <div className="hero__weather-card">
                    <div className="hero__weather-card__weather-container">
                        <img className="hero__weather-card__weather-container__image" src={weatherIcon} alt="icon" />
                        <div className="hero__weather-card__weather-status-container">
                            <p className='hero__weather-card__weather-status-container__temp'>{temp | 0}F</p>
                            <p>{weatherDescription}</p>
                        </div>
                    </div>
                    <div className="hero__weather-card__weather-information">
                        <div>
                            <h2>{high}</h2>
                            <p>High</p>
                        </div>
                        <div>
                            <h2>{windSpeed}</h2>
                            <p>Wind Speed</p>
                        </div>
                        <div>
                            <h2>{sunrise}</h2>
                            <p>Sunrise</p>
                        </div>
                        <div>
                            <h2>{low}</h2>
                            <p>Low</p>
                        </div>
                        <div>
                            <h2>{humidity}</h2>
                            <p>Humidity</p>
                        </div>
                        <div>
                            <h2>{sunset}</h2>
                            <p>Sunset</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero