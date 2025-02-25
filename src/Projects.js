// import React from "react";
import logo from './Moss1.jpg';
import logo2 from './Moss2.jpg';
import logo3 from './figma_home.jpg';
import logo4 from './figma_watch.jpg';
import logo5 from './Table in FC1.jpg';
import logo6 from './Process.png';
import logo7 from './IMG_6127.jpg';
import logo8 from './ONT_Lot_and_Quantity.png';
import logo9 from './ONT_Waffle_Pack.jpg';
import logo10 from './ONT_Sensor_Input.png';
import logo11 from './ONT_work_instructions_ex.png';
import logo12 from './ONT_Sensor_Scanning.png';
import logo13 from './vnc.png';

// import React, { useState } from 'react'
// import {Link} from 'react-scroll'
// import logo from './images/logo.png'

// import './VertNavBar.css'
import './NavBar.css'

function Projects() {

    // const [click, setClick] = useState(false)

    // const closeMenu = () => setClick(false)

    return (
        <div className="projects">
            <header className="App-header">
                {/* <div className='vertheader'>
                    <nav className='navbar'>
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className='nav-item'>
                                <Link to="sculptar" spy={true} smooth={true} offset={-50} duration={500} onClick={closeMenu}>SculptAR</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="mds" spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>MDS</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="parking" spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>Parking</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="gallery" spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>Gallery</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="anavation" spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>Anavation</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="streaming" spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>Streaming</Link>
                            </li>
                        </ul>
                    </nav>
                </div> */}

                <h1 className="chicago2" style={{color: "#63D471"}}>PROJECTS</h1>

                <div className ="Kyocera">
                    <p className="width">
                        <h2 className="chicago" style={{color: "#63D471"}}>Work with Kyocera</h2>
                        <div class="text-container">
                            <p className="chicago3">
                                This past summer I got the opportunity to intern with Kyocera in ATD of the Semiconductor Components Group on several projects.
                            </p>
                            <p className="chicago4">
                                My primary project was providing barcode serialization traceability for Oxford Nanopore Technologies, most notably for sensor die.
                            </p>
                        </div>
                        <div class="text-container">
                            <p className="chicago3">
                                Created an interface for machine operators in Python with tkinter and implemented it on three different stations.
                            </p>
                            <p className="chicago4">
                                Operators used to scan substrate 2D barcodes directly into Excel, which led to numerous cases of accidental human error.
                            </p>
                        </div>
                        <div class="text-container">
                            <p className="chicago3">
                                Worked with process engineers to design a procedure for how/when sensor die would be tracked within current operations.
                            </p>
                            <p className="chicago4">
                                Worked alongside another intern to design a table in which trays of substrates would be scanned and use my interface.
                            </p>
                        </div>
                        <div class="image-container">
                            <img src={logo5} className="App-logo3" style={{height: "30vmin"}} alt="logo" />
                            <img src={logo6} className="App-logo3" style={{height: "30vmin"}} alt="logo" />
                        </div>
                        <div class="text-container">
                            <p className="chicago3">
                                Operators used handheld bluetooth barcode scanners to scan lot #s (order #), lot quantities, our internal batch #s, vendor batch #s, and batch quantities quickly and accurately.
                            </p>
                            <p className="chicago4">
                                Scanners used to limit human error of typing and interface would automatically jump to the next text entry box to mitigate risk of scanning into the wrong box.
                            </p>
                        </div>
                        <div class="image-container">
                            <img src={logo7} className="App-logo3" style={{height: "30vmin"}} alt="logo" />
                            <img src={logo8} className="App-logo3" style={{height: "30vmin"}} alt="logo" />
                        </div>
                        <div class="image-container">
                            <img src={logo9} className="App-logo3" style={{height: "30vmin"}} alt="logo" />
                            <img src={logo10} className="App-logo3" style={{height: "30vmin"}} alt="logo" />
                        </div>
                        <div class="text-container">
                            <p className="chicago3">
                                Created work instructions for operators for when they run into any technical difficulities so they can handle issues without needing floor managers. 
                            </p>
                            <p className="chicago4">
                                "Full" or "Partial" tray notifies operators if they successfully scanned all substrates on a boat. Submit button turns green when scanned quantity matches lot quantity input. 
                            </p>
                        </div>
                        <div class="text-container">
                            <p className="chicago3">
                                Each time a batch quantity is reached, the operator is automatically transported to the sensor batch input page.
                            </p>
                            <p className="chicago4">
                                Hitting submit creates an Excel file and saves it to a corresponding folder to later make reports from.
                            </p>
                        </div>
                        <div class="image-container">
                            <img src={logo11} className="App-logo3" style={{height: "30vmin"}} alt="logo" />
                            <img src={logo12} className="App-logo3" style={{height: "30vmin"}} alt="logo" />
                        </div>
                        <div class="text-container">
                            <p className="chicago3">
                                For my other project, I worked with image processing, VNC Viewer remote access, parsing files, and tracking resistivity with an Arduino.
                            </p>
                            <p className="chicago4">
                                Sent alerts with Twilio SendGrid and automated logging data to Power BI on several machines: the AKS Inline Cleaner, the Mycronic, and the Heller.
                            </p>
                        </div>
                        <div class="image-container">
                            <img src={logo13} className="App-logo3" style={{height: "30vmin"}} alt="logo"></img>
                        </div>
                    </p>
                </div>

                <hr class="solid"></hr>

                <div className ="HokieHangout">
                    <p className="width">
                        <h2 className="chicago" style={{color: "#63D471"}}>Hokie Hangout</h2>
                        <div class="text-container">
                            <p className="chicago3">
                                For my Master's level capstone course, I helped work on the front-end of a social media mobile application.
                            </p>
                            <p className="chicago4">
                                This application was intended for Virginia Tech students to plan casual events and connect with each other. 
                            </p>
                        </div>
                        <p className="chicago3">
                            We used Expo with React and built a product we were proud of with tight time constraints in three sprints.
                        </p>
                        <p>
                            <a
                                className="App-link"
                                href="https://vtechworks.lib.vt.edu/items/201d15b6-0d0a-4511-8392-f9080dfdc641"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <div className="chicago5">vtechworks</div>
                            </a>
                        </p>
                    </p>
                </div>

                <hr class="solid"></hr>

                <div className ="SculptAR">
                    <p className="width">
                        <h2 className="chicago" style={{color: "#63D471"}}>SculptAR Park</h2>
                        <div class="text-container">
                            <p className="chicago3">
                                For my Virtual Environments course, I developed a high fidelity Figma app that serves as the design idea behind the UI for an AR Sculpture Park at Virginia Tech.
                            </p>
                            <p className="chicago4">
                                Users have the opportunity to manipulate sculptures themselves with placement, rotation, size, paint brush effects, and spray paint effects.
                            </p>
                        </div>
                        <p className="chicago3">
                            Users would also be able to place stickers, access a map to find other sculptures, and watch timelapses on the changes made to a scultpure over time.
                        </p>
                        <p>
                            <a
                                className="App-link"
                                href="https://www.figma.com/proto/LeI7t25YrCbKdZjjgJdOSp/ScupltAR-Wireframe?type=design&node-id=1-4&t=bJdC9ODSZYW5mBn4-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A4&show-proto-sidebar=1&mode=design"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <div className="chicago5" >SculptAR Figma App</div>
                            </a>
                        </p>
                    </p>
                </div>

                <hr class="solid"></hr>

                <div className = "MDS">
                    <p className="width">
                        <h2 className="chicago" style={{color: "#63D471"}}>MDS Dimension Reduction Gamification</h2>
                        <div class="text-container">
                            <p className="chicago3">
                                For my Information Visualization course, I worked with my team to create an educational "game" for learning MDS dimension reduction.
                            </p>
                            <p className="chicago4">
                                This tool is intended to help teach other students at Virginia Tech the concept of dimension reduction by creating the reduction themselves.
                            </p>
                        </div>
                        <p className="chicago3">
                            Users can place animals onto the screen and attempt to reduce the error as much as possible by using colors.
                        </p>
                        <p>
                            <a
                                className="App-link"
                                href="https://observablehq.com/d/f3da082a1f760a49"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <div className="chicago5">Observable Link</div>
                            </a>
                        </p>
                    </p>
                </div>

                {/* <div className = "MDS">

                    <h2 className="chicago" style={{marginRight: "50%", marginLeft: "3%", color: "#63D471"}}>MDS Dimension Reduction Gamification</h2>
                    <p className="chicago" style={{marginRight: "40%", marginLeft: "3%"}}>
                        For my Information Visualization course, I worked with my team to create an educational "game" for learning MDS dimension reduction.
                    </p>
                    <p className="chicago" style={{marginLeft: "40%", marginRight: "3%"}}>
                        This tool is intended to help teach other students at Virginia Tech the concept of dimension reduction by creating the reduction themselves.
                    </p>
                    <p className="chicago" style={{marginRight: "40%", marginLeft: "3%"}}>
                        Users can place animals onto the screen and attempt to reduce the error as much as possible by using colors.
                    </p>
                    <p>
                            <a
                                className="App-link"
                                href="https://observablehq.com/d/f3da082a1f760a49"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <div className="chicago" style={{marginLeft: "40%", marginRight: "3%"}}>Observable Link</div>
                            </a>
                        </p>
                </div> */}

                <hr class="solid"></hr>

                <div className = "Parking">
                    <p className="width">
                        <h2 className="chicago" style={{color: "#63D471"}}>Smart Parking App Prototype</h2>
                        <div class="text-container">
                            <p className="chicago3">
                                For my Models and Theories of Human-Computer Interaction course, I also developed a Figma app for my team which would serve as a smart parking service at Virginia Tech.
                            </p>
                            <p className="chicago4">
                                It allows users to determine which parking spots are open in different parking lots, and navigate to their selected locations. There is also the option to navigate back to your spot when users return to their vehicles.
                            </p>
                        </div>
                        <p className="chicago3">
                            Users can also utilize the application for paying their tickets, and parking passes would be used in coordination with gates to eliminate the need for parking officers. 
                        </p>
                        <p>
                            <a
                                className="App-link"
                                href="https://www.figma.com/proto/qxD2aut2j5SZQTUZyI9FDi/Parkopedia?type=design&node-id=201-2040&t=eVCs2wPC3Ybp6A5Z-1&scaling=min-zoom&page-id=201%3A1100&starting-point-node-id=201%3A2040&show-proto-sidebar=1&mode=design"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <div className="chicago5">Parkopedia Figma App</div>
                            </a>
                        </p>
                    </p>
                </div> 

                <hr class="solid"></hr>

                <div className = "Gallery">
                    <p className="width">
                        <h2 className="chicago" style={{color: "#63D471"}}>Virtual Art Gallery</h2>
                        <div class="text-container">
                            <p className="chicago3">
                                For my Human-Computer Interaction capstone for my Bachelor's degree, I assisted in working on a virtual art gallery within the metaverse using a 3D model of the Moss Arts Center at Virginia Tech.
                            </p>
                            <p className="chicago4">
                                Shown is a photo of the exhibit when it was close to finished, just missing some snap to view buttons that we had placed on the back right wall shown in the first image. 
                            </p>
                        </div>
                        <div class="text-container">
                            <p className="chicago3">
                                You had the ability to upload to the exhibit and display your own photos or videos.
                            </p>
                        </div>
                        <div class="image-container">
                            <img src={logo} className="App-logo3" style={{height: "30vmin"}}alt="logo" />
                            <img src={logo2} className="App-logo3" style={{height: "30vmin"}}alt="logo" />
                        </div>
                    </p>
                </div>

                <hr class="solid"></hr>     
                
                <div className = "Animation Work">
                    <p className="width">
                        <h2 className="chicago" style={{color: "#63D471"}}>Animation Work</h2>
                            <p className="chicago3">
                                I had the opportunity to take two animation classes within the Art major when pursuing my Bachelor's degree. Some of my projects are listed in the link below.
                            </p>
                            <p>
                                <a
                                    className="App-link"
                                    href="https://www.youtube.com/@truxess/videos"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                    <div className="chicago5">Animation Channel</div>
                                </a>
                            </p>
                    </p>
                </div>

                <hr class="solid"></hr>     

                <div className = "Anavation">
                    <p className="width">
                        <h2 className="chicago" style={{color: "#63D471"}}>Work with AnaVation</h2>
                        <div class="text-container">
                            <p className="chicago3">
                                Summer 2020 I got the opportunity to work with AnaVation for a Computer Science Internship, where I worked on networking sniffing project to be used for Army raids.
                            </p>
                            <p className="chicago4">
                                I worked on the back-end of the project, where I built an API with python. I then connected that API to a database using DynamoDB so that the front end could reach the data.
                            </p>
                        </div>
                    </p>
                </div>

                <hr class="solid"></hr>

                <div className = "Streaming">
                    <p className="width">
                        <h2 className="chicago" style={{color: "#63D471"}}>Streaming Service App Prototype</h2>
                        <div class="text-container">
                            <p className="chicago3">
                                For my Intro to Human-Computer interaction course our final project was a design for a streaming service that could access all other services. This way, you could access all of your subscriptions from one place.
                            </p>
                            <p className="chicago4">
                                Since it was during the time period when Covid-19 was still prominent, we also added in our design the ability to have watch parties with friends or random users who also had subscriptions to the same services.
                            </p>
                        </div>
                        <div class="text-container">
                            <p className="chicago3">
                                With the shift in which streaming services may just turning into the new "cable packages", we wanted to beat others to the chase of showing what that possible future may look like.
                            </p>
                        </div>
                        <div class="image-container">
                            <img src={logo3} className="App-logo3" style={{height: "30vmin"}} alt="logo" />
                            <img src={logo4} className="App-logo4" style={{height: "30vmin"}} alt="logo" />
                        </div> 
                    </p>
                </div>
            </header>
        </div>
    );
}

export default Projects;