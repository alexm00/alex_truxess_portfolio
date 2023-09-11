import React from "react";
import logo from './Moss1.jpg';
import logo2 from './Moss2.jpg';
import logo3 from './figma_home.jpg'
import logo4 from './figma_watch.jpg'

function Projects() {
    return (
        <div>
            <header>
                <h1 className="chicago" style={{color: "#63D471"}}>Projects</h1>
                <h2 className="chicago" style={{marginRight: "50%", marginLeft: "3%", color: "#63D471"}}>Virtual Art Gallery</h2>
                <p className="chicago" style={{marginRight: "40%", marginLeft: "3%"}}>
                    For my Human-Computer Interaction capstone for my Bachelor's degree, I assisted in working on a virtual art gallery within the metaverse using a 3D model of the Moss Arts Center at Virginia Tech.
                </p>
                <p className="chicago" style={{marginLeft: "40%", marginRight: "3%"}}>
                    Shown is a photo of the exhibit when it was close to finished, just missing some snap to view buttons that we had placed on the back right wall shown in the first image. 
                </p>
                <img src={logo} className="App-logo" alt="logo" />
                <p className="chicago" style={{marginRight: "3%", marginLeft: "3%"}}>
                    You had the ability to upload to the exhibit and display your own photos or videos.
                </p>
                <img src={logo2} className="App-logo" alt="logo" />
                <h2 className="chicago" style={{marginRight: "50%", marginLeft: "3%", color: "#63D471"}}>Animation Work</h2>
                <p className="chicago" style={{marginRight: "40%", marginLeft: "3%"}}>
                    I had the opportunity to take two animation classes within the Art major when pursuing my Bachelor's degree. Some of my projects are listed in the link below.
                </p>
                <p>
                        <a
                            className="App-link"
                            href="https://www.youtube.com/channel/UCvCvbkzjVlBV27hTX-T2org"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <div className="chicago" style={{marginLeft: "40%", marginRight: "3%"}}>Animation Channel</div>
                        </a>
                    </p>
                <h2 className="chicago" style={{marginRight: "50%", marginLeft: "3%", color: "#63D471"}}>Work with AnaVation</h2>
                <p className="chicago" style={{marginRight: "40%", marginLeft: "3%"}}>
                    Summer 2020 I got the opportunity to work with AnaVation for a Computer Science Internship, where I worked on networking sniffing project to be used for Army raids.
                </p>
                <p className="chicago" style={{marginLeft: "40%", marginRight: "3%"}}>
                    I worked on the back-end of the project, where I built an API with python. I then connected that API to a database using DynamoDB so that the front end could reach the data.
                </p>
                <h2 className="chicago" style={{marginRight: "50%", marginLeft: "3%", color: "#63D471"}}>Figma Project</h2>
                <p className="chicago" style={{marginRight: "40%", marginLeft: "3%"}}>
                    For my Intro to Human-Computer interaction course our final project was a design for a streaming service that could access all other services. This way, you could access all of your subscriptions from one place.
                </p>
                <p className="chicago" style={{marginLeft: "40%", marginRight: "3%"}}>
                    Since it was during the time period when Covid-19 was still prominent, we also added in our design the ability to have watch parties with friends or random users who also had subscriptions to the same services.
                </p>
                <img src={logo3} className="App-logo" alt="logo" />
                <p className="chicago" style={{marginRight: "3%", marginLeft: "3%"}}>
                    With the shift in which streaming services may just turning into the new "cable packages", we wanted to beat others to the chase of showing what that possible future may look like.
                </p>
                <img src={logo4} className="App-logo" alt="logo" />
            </header>
        </div>
    );
}

export default Projects;