document.getElementById('submit').addEventListener('click', function() {
    var submitButton = document.getElementById('emailbox').value;
    submitButton.onclick = function() {
        var result = submitButton.value;
        // using Twilio SendGrid's v3 Node.js Library
        // https://github.com/sendgrid/sendgrid-nodejsd
        const sgMail = require('@sendgrid/mail')
        sgMail.setApiKey(process.env.SENDGRID_API_KEY)
        const msg = {
            to: 'alextkd1313@gmail.com', // Change to your recipient
            from: 'alextkd1313@gmail.com', // Change to your verified sender
            subject: 'Truxess.com Email',
            text: result,
        }
        sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })
    }
});