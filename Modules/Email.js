const nodemailer = require("nodemailer");

module.exports = {
    sendVerificationCode: sendVerificationCode
}
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "nor82879@gmail.com",
        pass: process.env.EMAILPASS
    }
});

function sendVerificationCode(to, code) {
    const mailOptions = {
        from: "noreply@something.com",
        to: to,
        subject: "Verification code",
        html: codeEmailBody(code)
    }
    return transporter.sendMail(mailOptions);
}

function codeEmailBody(code) {
    return `
    <div>
    <h2><b>Your verification code is <span style="text-decoration:underline">${code}</span></b></h2>

    </div>
    `
}