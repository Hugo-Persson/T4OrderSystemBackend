module.exports = app => {
    const authentication = require("./Authentication");
    const sendEmail = require("./Email");
    const models = require("./MongooseModels");
    const bcrypt = require("bcryptjs");
    const crypto = require("crypto");

    const {
        User,
        Order
    } = models;


    app.post("/registerUser", async (req, res) => {
        console.log("registerUser", req.body);
        try {
            req.body.email = req.body.email.toLowerCase();
            const {
                name,
                email
            } = req.body;
            if (await User.findOne({
                    email: email
                })) {
                console.log("Register email exists");
                res.json({
                    error: true,
                    message: "AccountExists"
                });
                return;
            }

            const verificationCode = await getVerificationCode(email);
            const tokenData = {
                type: "verifyRegistration",
                name: name,
                email: email,
                verificationCode: verificationCode,
                failedAttempts: 0

            };
            const token = await authentication.createJsonToken(tokenData, 1200000);
            res.cookie("verificationToken", token, {
                httpOnly: true,
                expires: new Date(Date.now() + 1200000), //20 minutes
                sameSite: "strict"

            });
            res.json({
                error: false,
                message: "Verify your email"
            });
        } catch (err) {
            console.log(err);
            res.json({
                error: true,
                message: err
            });
        }
    });

    app.post("/login", async (req, res) => {
        console.log("login")
        try {
            req.body.email = req.body.email.toLowerCase();
            const {
                email
            } = req.body;

            const user = await User.findOne({
                email: email
            });
            console.log("EMAIL", email)
            if (email === "adminsitedemo@example.com") {
                const authToken = await authentication.createAuthToken(email, user.admin);
                res.cookie("auth", authToken, {
                    httpOnly: true,
                    expires: new Date(Date.now() + 2 * 3600000),
                    sameSite: "strict"

                });
                console.log("HEYEE")
                res.json
                return;
            }
            if (!user) {
                console.log("account doesn't exist")
                res.json({
                    error: true,
                    message: "NoAccount"
                });
                return;
            }
            if (!user.active) {
                res.json({
                    error: true,
                    message: "NotActive"
                });
                return;
            }
            const verificationCode = await getVerificationCode(email);
            console.log("Ver code", verificationCode);
            const token = await authentication.createJsonToken({
                type: "verifyLogin",
                email: email,
                verificationCode: verificationCode,
                failedAttempts: 0
            }, 1200000);
            res.cookie("verificationToken", token, {
                httpOnly: true,
                expires: new Date(Date.now() + 1200000), //20 minutes
                sameSite: "strict"

            });
            res.json({
                error: false,
                message: "Email sent with verification code",
            });



        } catch (err) {
            res.json({
                error: true
            });
            console.log(err);
        }
    });
    app.post("/verifyWithCode", async (req, res) => {
        console.log("verify with code");
        try {
            const {
                verificationCode
            } = req.body;
            const token = req.cookies.verificationToken;
            if (token === undefined) {
                res.json({
                    error: true,
                    message: "NoToken"
                });
                return;
            }
            const tokenData = await authentication.decodeJsonToken(token);
            const {
                email,
                name,
                type,
                failedAttempts
            } = tokenData;

            if (!await bcrypt.compare(verificationCode, tokenData.verificationCode)) {
                tokenData.failedAttempts += 1;
                console.log(tokenData);
                const token = await authentication.createJsonToken(tokenData)
                res.cookie("verificationToken", token, {
                    httpOnly: true,
                    expires: new Date(Date.now() + 1200000), //20 minutes
                    sameSite: "strict"

                });



                if (tokenData.failedAttempts > 15) {
                    res.json({
                        error: true,
                        message: "TooManyWrongs"
                    });
                    res.clearCookie("verificationToken");
                    return;
                }
                res.json({
                    error: true,
                    message: "WrongCode"
                });
                return;
            }
            if (type !== "verifyLogin" && type !== "verifyRegistration") {
                res.json({
                    error: true,
                    message: "Invalid token"
                });
                return;
            }
            if (type === "verifyRegistration") {
                await createAccount(email, name, false);

            }

            // Code checkes out
            const user = await User.findOne({
                email: email
            }).lean();
            const authToken = await authentication.createAuthToken(email, user.admin);
            res.cookie("auth", authToken, {
                httpOnly: true,
                expires: new Date(Date.now() + 2 * 3600000),
                sameSite: "strict"

            });
            res.json({
                error: false,
                user: user

            });

        } catch (err) {
            res.json({
                error: true
            });
            console.log(err);
        }
    });

    async function getVerificationCode(email) {
        return new Promise(async (resolve, reject) => {
            try {
                const code = crypto.randomBytes(3).toString("hex");
                await sendEmail.sendVerificationCode(email, code);
                const encryptedCode = await authentication.encrypt(code);
                resolve(encryptedCode);
            } catch (err) {
                console.log(err)
                reject(err);
            }
        })

    }

    function createAccount(email, name, admin) {
        const newUser = new User({
            name: name,
            email: email,
            admin: admin
        });
        return newUser.save();
    }

}