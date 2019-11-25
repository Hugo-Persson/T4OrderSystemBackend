module.exports = () => {
    /* TODOS
     * Make one unified route for verifying registration and login
     * Implement email
     * Create a verifying route that only takes a token as verification (for email later)
     * Make better tokens with type prop
     * 
     */



    const express = require("express");
    const app = express();
    const mongoose = require("mongoose");
    const cors = require("cors");
    const authentication = require("./Authentication");
    const models = require("./MongooseModels");
    const sendEmail = require("./Email");
    const cookieParser = require("cookie-parser");
    const multer = require("multer");
    const upload = multer({
        dest: "uploads/"
    })


    startExpress();

    function startExpress() {
        const port = process.env.PORT || "8000";
        const corsOptions = {
            origin: true,
            credentials: true,
        }
        app.use(express.json());
        app.use(cors(corsOptions));

        app.use(cookieParser());
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
            const info = await sendEmail.sendVerificationCode(email, verificationCode);
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

    app.post("/checkAccount", verifyAuth, async (req, res) => {
        console.log("checkAccount");
        const tokenData = await authentication.decodeJsonToken(req.cookies.auth);
        const user = await User.findOne({
            email: tokenData.email
        });

        console.log(user);
        res.json({
            authenticated: true,
            admin: user.admin,
            name: user.name,
            email: user.email
        });
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

            if (tokenData.verificationCode != verificationCode) {
                res.json({
                    error: true,
                    message: "Wrong verificationCode"
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
            const authToken = await authentication.createAuthToken(email);
            res.cookie("auth", authToken, {

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

    function createAccount(email, name, admin) {
        const newUser = new User({
            name: name,
            email: email,
            admin: admin
        });
        return newUser.save();
    }



    app.post("/makeOrder", upload.array("files", 12), (req, res) => {
        console.log(req.files);
        console.log(req.body);
    });


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


    /* Middleware */
    async function verifyAuth(req, res, next) {
        try {
            if (req.cookies.auth === undefined) {
                res.json({
                    error: true,
                    message: "NoAuth"
                });
                return;
            }
            const authData = await authentication.decodeJsonToken(req.cookies.auth);
            if (authData.type === "auth") {
                next();
                return;
            }
            res.json({
                error: true,
                message: "NoAuth"
            });
        } catch (err) {
            console.log(err)
            res.json({
                error: true,
                message: "NoAuth"
            });
            next();
        }

    }
}