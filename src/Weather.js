import './Weather.css';

export default function Weather(){
    return(
        <div className="Weather">
            <form>
                <input type="search" placeholder='Enter a city...' className='formInput' />
                <input type='submit' value='Search' className='formSubmit' />
            </form>
            <h1>New York</h1>
            <ul>
                <li>Sunday 05:20</li>
                <li>Mostly cloudy</li>
            </ul>
            <div className='row'>
                <div className='col-6'>
                    <img src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" alt="Mostly cloudy"/>
                    25°C|°F
                </div>
                <div className='col-6'>
                    <ul>
                        <li>Precipitatio: 41%</li>
                        <li>Humidity: 94%</li>
                        <li>Wind: 14km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}