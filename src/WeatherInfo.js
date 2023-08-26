import FormatedDate from './FormatedDate';
import WeatherTemperature from './WeatherTemperature';

export default function WeatherInfo(props){
    return (
        <div className='WeatherInfo'>
            <h1>{props.data.currentCity}</h1>
            <h2>{props.data.country}</h2>
            <ul>
                <li>
                    <FormatedDate date={props.data.date} />
                </li>
                <li className='text-capitalize'>{props.data.description}</li>
            </ul>
            <div className='row mt-3'>
                <div className='col-6'>
                    <img src={props.data.iconUrl} alt={props.data.description} />
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