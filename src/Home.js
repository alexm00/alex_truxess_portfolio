import React from "react";
import logo from './Headshot Fall 2024.jpeg';


//typing animation
import Typical from 'react-typical';

//font
  import "./fonts/ChicagoNormal.ttf";

function clickMe(){
    alert('Name: Alex Truxess\nOccupation: Just graduated with a Master of Engineering!\nField: Computer Science\nFocus: Software Dev and Human-Computer Interaction\nCurrent Location: Northern Virginia')
}

function Home() {
    return (
        <div className="home">
          <header className="App-header">
            <h1 className="chicago2" style={{color: "#63D471"}}>Welcome to my personal portfolio!</h1>
            <p>
                <img src={logo} className="App-logo" alt="logo"/>
            </p>
            <p>
              <button onClick={clickMe}>
                <div className="chicago7">Display Information</div>
              </button>
            </p>
            
            <div className="chicago">
              <Typical
                loop={1}
                wrapper='b'
                steps={['Loading protocols...', 1000,
                ' Loading protocols...', 1000,
                'Loading protocols...', 1000,
                'Identification verified.', 1000,
                'Hello...', 3000,
                'We have received new intel.', 1500, 
                'There is someone who could be useful to us.', 3000,
                'Your mission,', 1500,
                'should you choose to accept it,', 1500,
                'find Alex Truxess...', 1500,
                'find Alex Truxess... and recruit him to your team.', 1000]}/>
            </div>
          </header>
        </div>
    
      );
}

export default Home;