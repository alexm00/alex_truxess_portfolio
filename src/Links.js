import React from "react";

function Links() {
    return (
        <div className="App">
          <header className="App-header">
                <h2>
                    <a
                        className="App-link"
                        href="https://www.linkedin.com/in/alex-truxess-7702b1170"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <div className="chicago">LinkedIn</div>
                    </a>
                    <p>
                        <a
                            className="App-link"
                            href="https://www.youtube.com/channel/UCvCvbkzjVlBV27hTX-T2org"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <div className="chicago">Animation Channel</div>
                        </a>
                    </p>
                </h2>
            </header>
        </div>
    );
}

export default Links;