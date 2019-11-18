module.exports = () => {
    /* TODOS
     * Make one unified route for verifying registration and login
     * Implement email
     * Create a verifying route that only takes a token as verification (for email later)
     * 
     */



    const express = require("express");
    const app = express();
    const mongoose = require("mongoose");
    const cors = require("cors");
    const authentication = require("./Authentication");
    const models = require("./MongooseModels");


    startExpress();

    function startExpress() {
        const port = process.env.PORT || "8000";
        app.use(express.json());
        app.use(cors());
        app.listen(port, () => console.log("Port: " + port))

        return app;
    }


    const {
        User
    } = models;


    app.post("/verifyRegistration", async (req, res) => {
        console.log("verifyRegistration");
        try {
            const {
                token,
                verificationCode
            } = req.body;
            console.log(req.body);
            console.log(verificationCode);
            console.log(Boolean(verificationCode));
            if (!token) {
                res.json({
                    error: true,
                    message: "token was undefined"
                });
                return;
            }
            if (!verificationCode) {
                res.json({
                    error: true,
                    message: "missing verificationCode from body"
                });
                return;
            }
            const decodedUser = await authentication.decodeJsonToken(token);
            const {
                name,
                email
            } = decodedUser;
            if (verificationCode == decodedUser.verificationCode) {
                // User has verified email
                const newUser = new User({
                    name: name,
                    email: email,
                    admin: false
                });

                await newUser.save();
                const auth = await authentication.createAuthToken(email);
                res.json({
                    error: false,
                    message: "User added",
                    data: {
                        auth: auth
                    }
                });

            } else {
                res.json({
                    error: true,
                    message: "Wrong verification code"
                });
            }
        } catch (err) {
            res.json({
                error: true,
                message: err
            });
        }
    });

    app.post("/registerUser", async (req, res) => {
        console.log("registerUser", req.body);
        try {

            const {
                name,
                email
            } = req.body;
            const verificationCode = getVerificationCode();
            const user = {
                name: name,
                email: email,
                verificationCode: verificationCode
            };
            console.log(verificationCode);
            const token = await authentication.createJsonToken(user);
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
            const verificationCode = getVerificationCode();
            console.log("Ver code", verificationCode);
            const token = await authentication.createJsonToken({
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

    app.post("/verifyLogin", async (req, res) => {
        console.log("verifyLogin")
        try {
            const {
                token,
                verificationCode
            } = req.body;
            const tokenData = await authentication.decodeJsonToken(token);
            console.log("166", verificationCode);
            console.log(tokenData);
            if (tokenData.verificationCode == verificationCode) {
                const email = tokenData.email;
                const auth = await authentication.createAuthToken(email);
                res.json({
                    error: false,
                    data: {
                        auth: auth
                    }
                });
            } else {
                res.json({
                    error: true,
                    message: "Wrong verification code"
                })
            }
        } catch (err) {
            console.log(err)
        }

    });

    app.post("/registerOrder", (req, res) => {});

    function getVerificationCode() {
        return Math.round(Math.random() * 1000000);

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
}