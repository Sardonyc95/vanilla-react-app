import Weather from './Weather'
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project is coded by <a href='https://fascinating-chimera-f34764.netlify.app/' rel='noreferrer' target='_blank'>Amavic</a> and is{" "}
          <a href="https://github.com/Sardonyc95/SheCodes.io" rel="noreferrer" target="_blank">
            Open source on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
