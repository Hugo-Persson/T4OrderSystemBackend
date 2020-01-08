const nodemailer = require("nodemailer");

module.exports = {
    sendVerificationCode: sendVerificationCode
}
// Here you set the email credentials 
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAILUSER,
        pass: process.env.EMAILPASS
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
    <h2><b>Your verification code is <span style="text-decoration:underline">${code}</span></b></h2>

    </div>
    `
}