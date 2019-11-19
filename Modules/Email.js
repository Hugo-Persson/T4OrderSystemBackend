const nodemailer = require("nodemailer");

module.exports = {
    sendVerificationCode: sendVerificationCode,
}

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'giovanna.vandervort24@ethereal.email',
        pass: 'xz8cAppugdFFPegqjd'
    }
});


function sendVerificationCode(to, verificationCode) {
    const mailOptions = {
        from: "test@test.com",
        to: to,
        subject: "Verification code",
        text: `Your verification code is ${verificationCode}`
    }
    return transporter.sendMail(mailOptions);
}