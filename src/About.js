import React from "react";

function About() {
    return (
        <div className="about">
          <header className="App-header">
            <h1 className="chicago2" style={{color: "#63D471"}}>ABOUT ME</h1>
                <div className="Thanks">
                    <h1 className="shimmer">
                        Thank you for visiting my website!
                    </h1>
                    <p className="chicago">
                        I received my Bachelor's degree in Computer Science December 2022 and my Master of Engineering degree in Computer Science December 2024.
                    </p>
                    <p className="chicago">
                    The focuses for my masters were Human-Computer Interaction and Software Development & Applications. I have an interest in front-end development and design, as well as 3D animation and video editing. 
                    </p>
                </div>
                <div className="Interests">
                    <p className="width">
                        <h2 className="chicago" style={{color: "#63D471"}}>My Interests</h2>
                        <div class="text-container">
                            <p className="chicago3">
                                I am a movie buff and I have a physical disc collection of roughly 700 DVDs and Blu-rays.
                            </p>
                            <p className="chicago4">
                                I received my 4th degree black belt at the age of 15.
                            </p>
                        </div>
                        <div class="text-container">
                            <p className="chicago3">
                                I love to go disc golfing and trying different IPAS.
                            </p>
                            <p className="chicago4">
                                Playing board games with friends (I am obsessed with Catan)
                            </p>
                        </div>
                    </p>
                </div>
            </header>
        </div>
    );
}

export default About;