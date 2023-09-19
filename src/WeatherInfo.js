import FormatedDate from './FormatedDate';
import WeatherTemperature from './WeatherTemperature';
import './WeatherInfo.css';

export default function WeatherInfo(props){
    return (
        <div className='WeatherInfo'>
            <h1>{props.data.currentCity},{" "}{props.data.country}</h1>
            <ul>
                <li>
                    <FormatedDate date={props.data.date} />
                </li>
                <li className='text-capitalize'>{props.data.description}</li>
            </ul>
            <div className='row mt-3'>
                <div className='col-6 mt-0'>
                    <img src={props.data.iconUrl} className='cityIcon' alt={props.data.description} />
                    <WeatherTemperature celsius={props.data.temperature} />
                </div>
                <div className='col-6'>
                    <ul>
                        <li>Pressure: {Math.round(props.data.pressure)}kg/m/s^2</li>
                        <li>Humidity: {props.data.humidity}%</li>
                        <li>Wind: {Math.round(props.data.wind)}km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}