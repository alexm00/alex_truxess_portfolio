import React from "react";

function About() {
    return (
        <div className="App">
          <header className="App-header">
                <h1 className="chicago">About Me</h1>
                <p className="chicago">
                    Hello and thank you for visiting my website!
                </p>
                <p className="chicago" style={{marginRight: "3%", marginLeft: "3%"}}>
                    I received my Bachelor's degree in Computer Science December 2022 and I'm currently pursuing my Master of Engineering from Virginia Tech. I plan to graduate May 2024.
                </p>
                <h2 className="chicago" style={{marginRight: "62%", color: "#63D471"}}>My Interests</h2>
                <div className="chicago" style={{marginRight: "50%", marginLeft: "3%"}}>
                    I am a movie buff and I have a physical disc collection of over 600 DVDs and Blu-rays.
                </div>
                <div className="chicago" style={{marginLeft: "50%", marginRight: "3%"}}>
                    I received my 4th degree black belt at the age of 15.
                </div>
                <div className="chicago" style={{marginRight: "50%", marginLeft: "3%"}}>
                    I love to go disc golfing and trying different IPAS.
                </div>
                <div className="chicago" style={{marginLeft: "50%", marginRight: "3%"}}>
                    Playing board games with friends (I am obsessed with Catan)
                </div>
            </header>
        </div>
    );
}

export default About;