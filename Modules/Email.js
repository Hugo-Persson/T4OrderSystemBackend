const nodemailer = require("nodemailer");
const {
    google
} = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
    process.env.CLIENTID, // ClientID
    process.env.CLIENTSECRET, // Client Secret
    "https://developers.google.com/oauthplayground" // Redirect URL
);

module.exports = {
    sendVerificationCode: sendVerificationCode
}
oauth2Client.setCredentials({
    refresh_token: process.env.REFRESHTOKEN
});
const accessToken = oauth2Client.getAccessToken()
// Here you set the email credentials 
console.log("USER", process.env.EMAILUSER);
console.log("PASS", process.env.EMAILPASS);
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: process.env.EMAILUSER,
        clientId: process.env.CLIENTID,
        clientSecret: process.env.CLIENTSECRET,
        refreshToken: process.env.REFRESHTOKEN,
        accessToken: accessToken
    },
    tls: {
        rejectUnauthorized: false
    }
});

function sendVerificationCode(to, code) {
    const mailOptions = {
        from: "noreply@gmail.com", // this is what the client should see that it is from
        to: to,
        subject: "Verification code",
        html: codeEmailBody(code)
    }
    // This returns the promise
    return transporter.sendMail(mailOptions);
}

function codeEmailBody(code) {
    // This just creates the body for the email that the user will see when they get the code
    return `
    <div>
    <h2><b>Din verifikations kod är: <span style="text-decoration:underline">${code}</span></b></h2>

    </div>
    `
}