import logo from './headshot.jpg';
import './App.css';

//font
  import "./fonts/ChicagoNormal.ttf";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/channel/UCvCvbkzjVlBV27hTX-T2org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="chicago">Animation Channel</div>
        </a>
        <div className="chicago">Hello my name is Alex Truxess</div>
      </header>
    </div>
  );
}

export default App;
