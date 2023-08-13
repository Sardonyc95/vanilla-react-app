import './Weather.css';

export default function Weather(){
    return(
        <div className="Weather">
            <form>
                <div className='row'>
                    <div className='col-9'>
                        <input type="search" placeholder='Enter a city...' className='formSearch' autoFocus='on' />
                    </div>
                    <div className='col-3'>
                        <input type='submit' value='Search' className='btn btn-primary w-100' />
                    </div>
                </div>
            </form>
            <h1>New York</h1>
            <ul>
                <li>Sunday 05:20</li>
                <li>Expect light rain</li>
            </ul>
            <div className='row mt-3'>
                <div className='col-6'>
                    <img src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" alt="Mostly cloudy"/>
                    <span className='temperature'>28</span>
                    <span className='celsuisUnit'>°C |</span>{" "}<span className='fahrenheitUnit'>°F</span>
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