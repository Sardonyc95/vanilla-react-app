import logo from './logo.svg';
import './App.css';
import Search from './Search'

function App() {
  return (
    <div className="App">
      <div className='containerWrapper'>
        <Search />
        <div className='weatherDetails'>
          <h1>Lagos</h1>
          <ul>
            <li>Sunday 01:57</li>
            <li>Clouds</li>
          </ul>
        </div>

        <div className='weatherTempWrapper'>
          <div className='weatherIconTemp'>
            <img src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" alt="weather icon" />
            <div className='temperature'>
              <strong>28</strong>
              <span>°C</span>
            </div>
          </div>
          <div className='weatherForecast'>
            <ul>
              <li>Precipitation:</li>
              <li>Humidity:</li>
              <li>Wind:</li>
            </ul>
          </div>
        </div>
      </div>
      <p>
      vanilla react app project done by AVA. 
      <a href="https://github.com/Sardonyc95/vanilla-react-app" target='_blank'>Open source</a> on Github
      </p>
    </div>
  );
}

export default App;
