import { useState } from 'react';
import axios from 'axios';
import WeatherInfo from './WeatherInfo';
import WeatherForecast from './weatherForecast';
import './Weather.css';

export default function Weather(props){
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response){
        setWeatherData({
            ready: true,
            coordinates: response.data.coordinates,
            currentCity: response.data.city,
            country: response.data.country,
            date: new Date(response.data.time * 1000),
            description: response.data.condition.description,
            iconUrl: response.data.condition.icon_url,
            temperature: response.data.temperature.current,
            pressure: response.data.temperature.pressure,
            humidity: response.data.temperature.humidity,
            wind: response.data.wind.speed
        });
    }

    function search(){
        const apiKey = "ea3e8t0b7eb8132058cob149a9a9ff7f";
        let unit = "metric";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${unit}`;

        axios.get(apiUrl).then(handleResponse);
    }

    function handlesubmit(event){
        event.preventDefault();
        search();
    }
    function handleCity(event){
        setCity(event.target.value);
    }

if (weatherData.ready){
    return(
        <div className="Weather">
            <form onSubmit={handlesubmit}>
                <div className='row'>
                    <div className='col-9'>
                        <input type="search" placeholder='Enter a city...' onChange={handleCity} className='formSearch' autoFocus='on' />
                    </div>
                    <div className='col-3'>
                        <input type='submit' value='Search' className='btn btn-primary w-100' />
                    </div>
                </div>
            </form>
            <WeatherInfo data={weatherData} />
            <WeatherForecast coordinates={weatherData.coordinates} />
        </div>
    );
}else {
    search();
    return <p>Loading...</p>;
}

    
}