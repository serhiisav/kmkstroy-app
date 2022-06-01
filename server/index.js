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

const OAuth2 = google.auth.OAuth2;
const OAuth2_client = new OAuth2(
    process.env.REACT_APP_CLIENT_ID,
    process.env.REACT_APP_CLIENT_SECRET,
    process.env.REACT_APP_REDIRECT_URIS
);

OAuth2_client.setCredentials({ refresh_token: process.env.REACT_APP_REFRESH_TOKEN });

function getHtmlMessage(req) {
    return `
    <h3>Ви отримали повідомлення від: <span style='font-weight: normal'>${req.body.name}</span></h3>
    <h4>Компанія: <span style='font-weight: normal'>${req.body.company}</span></h4>
    <h4>Телефон: <span style='font-weight: normal'>${req.body.phone}</span></h4>
    <h4>Мій email: <span style='font-weight: normal'>${req.body.email}</span></h4>
    <p>${req.body.message}</p>
`;
}

async function mailer(req) {
    try {

        const accessToken = await OAuth2_client.getAccessToken();
        const transport = nodemailer.createTransport({
            // pool: true,
            service: 'Gmail',
            auth: {
                type: 'OAuth2',
                user: process.env.REACT_APP_USER,
                clientId: process.env.REACT_APP_CLIENT_ID,
                clientSecret: process.env.REACT_APP_CLIENT_SECRET,
                refreshToken: process.env.REACT_APP_REFRESH_TOKEN,
                accessToken: accessToken,
            },
        });

        const mail_options = {
            from: `The KMKSTROY SITE <${process.env.REACT_APP_USER}>`,
            to: process.env.REACT_APP_MAILTO,
            subject: 'A Message From The KMKSTROY SITE',
            html: getHtmlMessage(req),
        }

        const result = await transport.sendMail(mail_options)
        return result;

    } catch (error) {
        return error
    }
}

app.post('/', (req, res) => {

    mailer(req)
        .then(result => {
            console.log('Email sent...', result);
            if (result.response.status && result.response.status !== 200) {
                throw new Error(result.response.status)
            }
            res.type('application/json').sendStatus(200).end()
        })
        .catch((error) => {
            console.log('ERROR! Status: ', error.message);
            res.type('application/json').sendStatus(400).end()
        })
})

// const server = https.createServer(httpsOptions, app).listen(port, () => {
//     console.log('server running at ' + port)
// })

app.listen(port, () => {
    console.log(`Server running successfully on ${port}`);
});