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
        text: "Your code is: " + code
    }
    return transporter.sendMail(mailOptions);
}