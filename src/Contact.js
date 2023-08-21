import React from "react";

function Contact() {
    return (
        <div className="App">
          <header className="App-header">
                <h1 className="chicago" style={{color: "#63D471"}}>Contact Me</h1>
                <h2 className="chicago">
                    Email: alexm00@vt.edu
                </h2>
                <h2 className="chicago">
                    Phone: 571-314-3856
                </h2>
                <h2>
                    <a
                        className="App-link"
                        href="https://www.linkedin.com/in/alex-truxess-7702b1170"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <div className="chicago">LinkedIn</div>
                    </a>
                </h2>
            </header>
        </div>
    );
}

export default Contact;