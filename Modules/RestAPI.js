module.exports = () => {
    const express = require("express");
    const app = express();
    const mongoose = require("mongoose");
    const authentication = require("./Authentication");
    const models = require("./MongooseModels");
    startExpress();

    function startExpress() {
        const port = process.env.PORT || "8000";
        app.use(express.json());
        app.listen(port, () => console.log("Port: " + port))

        return app;
    }


    const {
        User
    } = models;


    app.post("/confirmUser", async (req, res) => {
        try {
            const {
                userToken,
                verificationCode
            } = req.body;
            if (!userToken) {
                res.json({
                    error: true,
                    message: "missing userToken from body"
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
            const decodedUser = await authentication.decodeJsonToken(userToken);
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
        console.log("request");
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
        try {
            const {
                email
            } = req.body;
            if (!checkIfEmailExists(email)) {
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

    app.post("/confirmLogin", async (req, res) => {
        try {
            const {
                token,
                verificationCode
            } = req.body;
            const tokenData = await authentication.decodeJsonToken(token);
            console.log(verificationCode);
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
            return user;
        } catch (err) {
            console.log(err);
        }
    }
}