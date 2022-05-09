const nodemailer = require('nodemailer');
const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
require('dotenv').config({ path: '../.env' })

const port = process.env.PORT || 5000;
const app = express();
const { google } = require('googleapis');
app.use(cors({
    origin: '*'
}));

// const https = require('https')
// const fs = require('fs')
// const httpsOptions = {
//     key: fs.readFileSync('./security/cert.key'),
//     cert: fs.readFileSync('./security/cert.pem')
// }

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

const oauth2Client = new google.auth.OAuth2(
    process.env.REACT_APP_CLIENT_ID,
    process.env.REACT_APP_CLIENT_SECRET,
    process.env.REACT_APP_REDIRECT_URIS
);

oauth2Client.setCredentials({ refresh_token: process.env.REACT_APP_REFRESH_TOKEN });

app.post('/', (req, res) => {
    const html_message = `
        <h3>Ви отримали повідомлення від: <span style='font-weight: normal'>${req.body.name}</span></h3>
        <h4>Компанія: <span style='font-weight: normal'>${req.body.company}</span></h4>
        <h4>Телефон: <span style='font-weight: normal'>${req.body.phone}</span></h4>
        <h4>Мій email: <span style='font-weight: normal'>${req.body.email}</span></h4>
        <p>${req.body.message}</p>
    `;

    const accessToken = oauth2Client.getAccessToken();
    const transport = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            type: 'OAuth2',
            user: process.env.REACT_APP_USER,
            clientId: process.env.REACT_APP_CLIENT_ID,
            clientSecret: process.env.REACT_APP_CLIENT_SECRET,
            refreshToken: process.env.REACT_APP_REFRESH_TOKEN,
            accessToken: accessToken
        }
    })
    const mail_options = {
        from: `The KMKSTROY SITE <${process.env.REACT_APP_USER}>`,
        to: process.env.REACT_APP_MAILTO,
        subject: 'A Message From The KMKSTROY SITE',
        html: html_message
    }

    transport.sendMail(mail_options, (error, result) => {
        if (error) {
            console.log('Error: ', error);
            res.status(400).send('Bad Request');
        } else {
            console.log('Success!: ', result);
            res.status(200).send('ok');
        }
    })
    res.end()

})

// const server = https.createServer(httpsOptions, app).listen(port, () => {
//     console.log('server running at ' + port)
// })

app.listen(port, () => {
    console.log(`Server running successfully on ${port}`);
});