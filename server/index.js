// const nodemailer = require('nodemailer');
const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
require('dotenv').config({ path: '../.env' });
// require('dotenv').config();

const port = 5001;
const app = express();

const corsOptions = {
    "Content-Type": "application/json",
    "origin": "http://localhost:3000",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    // "preflightContinue": true,
    "optionsSuccessStatus": 200
}


// const https = require('https')
// const fs = require('fs')
// const httpsOptions = {
//     key: fs.readFileSync('cert.key'),
//     cert: fs.readFileSync('cert.pem')
// }

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))



app.use('/test', cors(corsOptions), require('./routes/sendToMe'))

// https.createServer(httpsOptions, app).listen(port, () => {
//     console.log('server running at ', port)
// })
app.listen(port, () => {
    console.log(`Server running successfully on ${port}`);
});
