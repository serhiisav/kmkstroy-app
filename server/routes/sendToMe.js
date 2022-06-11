const express = require('express')
const sendToMeRouter = express.Router()
const nodemailer = require('nodemailer')
const { google } = require('googleapis');

const OAuth2 = google.auth.OAuth2;
const OAuth2_client = new OAuth2(
    process.env.REACT_APP_CLIENT_ID,
    process.env.REACT_APP_CLIENT_SECRET,
    process.env.REACT_APP_REDIRECT_URIS
);

OAuth2_client.setCredentials({ refresh_token: process.env.REACT_APP_REFRESH_TOKEN });

const accessToken = OAuth2_client.getAccessToken();

function getHtmlMessage(req) {
    return `
    <h3>Ви отримали повідомлення від: <span style='font-weight: normal'>${req.body.name}</span></h3>
    <h4>Компанія: <span style='font-weight: normal'>${req.body.company}</span></h4>
    <h4>Телефон: <span style='font-weight: normal'>${req.body.phone}</span></h4>
    <h4>Мій email: <span style='font-weight: normal'>${req.body.email}</span></h4>
    <p>${req.body.message}</p>
`;
}

const transport = {
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
};

const transporter = nodemailer.createTransport(transport);
transporter.verify((error, success) => {
    if (error) {
        console.error("Error verify!: ", error);
    } else {
        console.log('users ready to mail myself', success);
    }
})


sendToMeRouter.post('/', (req, res, next) => {

    const mailOptions = {
        from: `The KMKSTROY SITE <${process.env.REACT_APP_USER}>`,
        to: process.env.REACT_APP_MAILTO,
        subject: 'A Message From The KMKSTROY SITE',
        html: getHtmlMessage(req),
    }

    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            console.log("error: ", err);
            res.json({
                status: 'fail',
                code: 400
            })
        } else {
            console.log("success: ", data);
            res.json({
                status: 'success',
                code: 200
            })
        }
    })

})

console.log("from sendToMe")

module.exports = sendToMeRouter