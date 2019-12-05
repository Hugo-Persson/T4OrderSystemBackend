module.exports = app => {
    const authentication = require("./Authentication");
    const sendEmail = require("./Email");
    const models = require("./MongooseModels");
    const bcrypt = require("bcryptjs");

    const {
        User,
        Order
    } = models;

    app.post("/registerUser", async (req, res) => {
        console.log("registerUser", req.body);
        try {

            const {
                name,
                email
            } = req.body;
            if (checkIfEmailExists(email)) {
                res.json({
                    error: true,
                    message: "AccountExists"
                });
            }

            const verificationCode = await getVerificationCode(email);
            const tokenData = {
                type: "verifyRegistration",
                name: name,
                email: email,
                verificationCode: verificationCode
            };
            console.log(verificationCode);
            const token = await authentication.createJsonToken(tokenData);
            res.json({
                error: false,
                data: {
                    token: token
                },
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
            const {
                email
            } = req.body;
            console.log(email);

            console.log(req.body);
            if (!await checkIfEmailExists(email)) {
                console.log("email doesn't exist")
                res.json({
                    error: true,
                    message: "NoAccount"
                });
                return;
            }
            /* const user = await User.findOne({
                email: email
            }); */
            const verificationCode = await getVerificationCode(email);
            console.log("Ver code", verificationCode);
            const token = await authentication.createJsonToken({
                type: "verifyLogin",
                email: email,
                verificationCode: verificationCode
            });

            res.json({
                error: false,
                message: "Email sent with verification code",
                data: {
                    token: token
                }
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
                token,
                verificationCode
            } = req.body;
            if (token === undefined) {
                res.json({
                    error: true,
                    message: "Token was undefined"
                });
                return;
            }
            const tokenData = await authentication.decodeJsonToken(token);
            const {
                email,
                name,
                type
            } = tokenData;

            if (!await bcrypt.compare(verificationCode, tokenData.verificationCode)) {
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

            const user = await User.findOne({
                email: email
            });
            console.log("user", user);
            const authToken = await authentication.createAuthToken(email, user.admin);
            res.cookie("auth", authToken, {
                httpOnly: true,
                expires: new Date(Date.now() + 2 * 3600000),

            });
            res.json({
                error: false,
                admin: user.admin
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
                const code = Math.round(Math.random() * 1000000);
                console.log("verCode", code);
                // const info = await sendEmail.sendVerificationCode(email, code);

                const encryptedCode = await authentication.encrypt(code);
                resolve(encryptedCode);
            } catch (err) {
                console.log(err)
                reject(err);
            }
        })

    }
    async function checkIfEmailExists(email) {
        try {
            const user = await User.findOne({
                email: email
            });
            console.log(Boolean(user));
            return Boolean(user);
        } catch (err) {
            console.log(err);
        }
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