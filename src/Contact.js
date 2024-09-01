import React from "react";
// import React, { useState } from "react";

// function init() {
//     var submitButton = document.getElementById("emailbox");
//     submitButton.onclick = function() {
//         var result = submitButton.value;
//         // using Twilio SendGrid's v3 Node.js Library
//         // https://github.com/sendgrid/sendgrid-nodejsd
//         const sgMail = require('@sendgrid/mail')
//         sgMail.setApiKey(process.env.SENDGRID_API_KEY)
//         const msg = {
//             to: 'alextkd1313@gmail.com', // Change to your recipient
//             from: 'alextkd1313@gmail.com', // Change to your verified sender
//             subject: 'Truxess.com Email',
//             text: result,
//         }
//         sgMail
//         .send(msg)
//         .then(() => {
//             console.log('Email sent')
//         })
//         .catch((error) => {
//             console.error(error)
//         })
//     }
//   }

function Contact() {
    // const [inputValue, setInputValue] = useState('');

    // const handleInputChange = (event) => {
    //     setInputValue(event.target.value);
    //     console.log(inputValue)
    // };

    // const handleSubmit = (e) => {
    //     console.log('here')
    //     e.preventDefault();
    //     var result = inputValue
    //     console.log(inputValue)
    //     // using Twilio SendGrid's v3 Node.js Library
    //     // https://github.com/sendgrid/sendgrid-nodejsd
    //     const sgMail = require('@sendgrid/mail')
    //     sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    //     const msg = {
    //         to: 'alextkd1313@gmail.com', // Change to your recipient
    //         from: 'alextkd1313@gmail.com', // Change to your verified sender
    //         subject: 'Truxess.com Email',
    //         text: result,
    //     }
    //     (async () => {
    //     try {
    //         await sgMail.send(msg);
    //     } catch (error) {
    //         console.error(error);

    //         if (error.response) {
    //         console.error(error.response.body)
    //         }
    //     }
    //     })();

    // }
 
    return (
        <div className="contact">
          <header className="App-header">
            <h1 className="chicago2" style={{color: "#63D471"}}>CONTACT ME</h1>
            <p className="width">
                <div className="Info">
                    <h2 className="chicago3">
                        Email: alexm00@vt.edu
                    </h2>
                    <h2 className="chicago4">
                        Phone: 571-314-3856
                    </h2>
                    <h2>
                        <a
                            className="App-link"
                            href="https://www.linkedin.com/in/alex-truxess-7702b1170"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <div className="chicago10">LinkedIn</div>
                        </a>
                    </h2>
                    {/* <form onSubmit={handleSubmit}>
                        <label className="chicago" for="fname">Send me an email with your contact information!</label><br></br>
                        <input className="chicago" type="text" id="emailbox" name="emailbox" onChange={handleInputChange} width="500px"/>
                        <button type="submit" id="submit" >
                            <div className="chicago">Send Email</div>
                        </button>
                    </form> */}
                </div>
            </p>
            </header>
        </div>
    );
}

// document.addEventListener('readystatechange', function() {
//     if (document.readyState === "complete") {
//         var emailContents = useState{}
//         var submitButton = document.getElementById("submit");
//         var emailContents = document.getElementById("emailbox").value;
//         console.log('here')
//         submitButton.onclick = function() {
//             // using Twilio SendGrid's v3 Node.js Library
//             // https://github.com/sendgrid/sendgrid-nodejsd
//             const sgMail = require('@sendgrid/mail')
//             sgMail.setApiKey(process.env.SENDGRID_API_KEY)
//             const msg = {
//                 to: 'alextkd1313@gmail.com', // Change to your recipient
//                 from: 'alextkd1313@gmail.com', // Change to your verified sender
//                 subject: 'Truxess.com Email',
//                 text: emailContents,
//             }
//             sgMail
//             .send(msg)
//             .then(() => {
//                 console.log('Email sent')
//             })
//             .catch((error) => {
//                 console.error(error)
//             })
//         }
//     }
//   });

// window.addEventListener('load',Loaded,false);

// function Loaded(){
//     // Now you can safely access and interact with the elements
//     document.getElementById('submit').addEventListener('click', function() {
//         var submitButton = document.getElementById('emailbox').value;
//         submitButton.onclick = function() {
//             var result = submitButton.value;
//             // using Twilio SendGrid's v3 Node.js Library
//             // https://github.com/sendgrid/sendgrid-nodejsd
//             const sgMail = require('@sendgrid/mail')
//             sgMail.setApiKey(process.env.SENDGRID_API_KEY)
//             const msg = {
//                 to: 'alextkd1313@gmail.com', // Change to your recipient
//                 from: 'alextkd1313@gmail.com', // Change to your verified sender
//                 subject: 'Truxess.com Email',
//                 text: result,
//             }
//             sgMail
//             .send(msg)
//             .then(() => {
//                 console.log('Email sent')
//             })
//             .catch((error) => {
//                 console.error(error)
//             })
//         }
//     });


// }

// document.getElementById('container').innerHTML = Contact();

// document.getElementById('submit').addEventListener('click', function() {
//     var submitButton = document.getElementById('emailbox').value;
//     submitButton.onclick = function() {
//         var result = submitButton.value;
//         // using Twilio SendGrid's v3 Node.js Library
//         // https://github.com/sendgrid/sendgrid-nodejsd
//         const sgMail = require('@sendgrid/mail')
//         sgMail.setApiKey(process.env.SENDGRID_API_KEY)
//         const msg = {
//             to: 'alextkd1313@gmail.com', // Change to your recipient
//             from: 'alextkd1313@gmail.com', // Change to your verified sender
//             subject: 'Truxess.com Email',
//             text: result,
//         }
//         sgMail
//         .send(msg)
//         .then(() => {
//             console.log('Email sent')
//         })
//         .catch((error) => {
//             console.error(error)
//         })
//     }
// });

export default Contact;