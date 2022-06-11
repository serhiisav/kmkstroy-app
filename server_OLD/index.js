const nodemailer = require('nodemailer');
const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
require('dotenv').config({ path: '../.env' });
// require('dotenv').config();

// const hostname = '190.124.47.67';
const port = 5001;
const app = express();
const { google } = require('googleapis');
app.use(cors({
    // "origin": ['https://kmkstroy.com.ua', 'https://kmkstroy.com.ua/app', 'http://kmkstroy.com.ua', 'http://kmkstroy.com.ua/app', 'https://127.0.0.1', 'http://127.0.0.1'],
    // origin: "*",
    // "methods": ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    // credentials: true,
    // allowedHeaders: ['Content-Type', 'Authorization'],
    // "Access-Control-Allow-Origin": "*",
    // // AccessControlAllowOrigin: '*',
    // // AccessControlAllowOrigin: ['https://kmkstroy.com.ua', 'http://kmkstroy.com.ua'],
    "Content-Type": "application/json",
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 200
}));


// app.options('*', cors())

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

app.post('/test', (req, res) => {
    mailer(req)
        .then(result => {
            console.log('Email sent...', result);
            if (result.response.status && result.response.status !== 200) {
                throw new Error(result.response.status)
            }
            // res.setHeader("Access-Control-Allow-Origin", "*");
            // res.writeHead(200, { "Access-Control-Allow-Origin": "*" });
            // res.sendStatus(200).end(result);
            // res.writeHead(200, { 'Content-Type': 'text/plain' })
            // res.end("result")
            res.sendStatus(200).end("result")

        })
        .catch((error) => {
            // console.log('ERROR! Status: ', error.message);
            // res.status(400).send(error);
            res.sendStatus(400).end(error);

        })
})

// app.get('/app', (req, res) => {
//     res.status(200).send('get ok');
// })

// https.createServer(httpsOptions, app).listen(port, () => {
//     console.log('server running at ', port)
// })
app.listen(port, () => {
    console.log(`Server running successfully on ${port}`);
});

// app.listen();