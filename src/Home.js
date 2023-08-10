import React from "react";
import logo from './headshot.jpg';

//typing animation
import Typical from 'react-typical';

//font
  import "./fonts/ChicagoNormal.ttf";

function clickMe(){
    alert('Name: Alex Truxess\nOccupation: Graduate Student at Virginia Tech\nField: Masters of Engineering Program for Computer Science\nFocus: Human-Computer Interaction\nCurrent Location: Virginia')
}

function Home() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              <button onClick={clickMe}>
                <div className="chicago">Display Information</div>
              </button>
            </p>
            <a
              className="App-link"
              href="https://www.youtube.com/channel/UCvCvbkzjVlBV27hTX-T2org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="chicago">Animation Channel</div>
            </a>
            
            <div className="chicago">
              <Typical
                loop={1}
                wrapper='b'
                steps={['Loading protocols', 1000,
                ' Loading protocols', 1000,
                'Loading protocols', 1000,
                'Identification verified', 1000,
                'Hello...', 3000,
                'We have received new intel.', 1500, 
                'There is someone who could be useful to us.', 3000,
                'Your mission,', 1500,
                'if you choose to accept it,', 1500,
                'find Alex Truxess...', 1500,
                'find Alex Truxess... and recruit him to your team.', 1000]}/>
            </div>
          </header>
        </div>
    
      );
}

export default Home;