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
    const cookieParser = require("cookie-parser");
    const multer = require("multer");
    const bcrypt = require("bcryptjs");
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
        require("./AuthRoutes")(app);
        require("../StaticRouter")(app, express);
        return app;
    }

    // Models
    const {
        User,
        Order
    } = models;





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

    app.post("/makeOrder", verifyAuth, upload.array("files", 12), async (req, res) => {
        console.log("Make order");
        try {
            const {
                productName,
                customer,
                // responsible,
                production,
                productionDocumentation,
                calculation,
                productDescription,
                wishes,

            } = req.body
            const number = await Order.countDocuments() + 1;
            const authData = await authentication.decodeJsonToken(req.cookies.auth);
            const customerEmail = authData.email;
            const fileDescriptions = req.body.fileDescriptions.split(",");
            const files = req.files.map((value, index) => {
                return {
                    path: value.path,
                    originalName: value.originalname,
                    description: fileDescriptions[index]
                }
            })
            const order = new Order({
                number: number,
                productName: productName,
                customer: {
                    name: customer,
                    email: customerEmail
                },
                missionType: {
                    production: production == "on",
                    productionDocumentation: productionDocumentation == "on",
                    calculation: calculation == "on",
                },
                productDescription: productDescription,
                wishes: wishes,
                files: files

            });
            await order.save();
            res.json({
                error: false
            });
        } catch (err) {
            console.log(err);
            res.json({
                error: true
            });
        }
    });

    app.post("/getAllOrders", verifyAuth, checkAdminAuth, async (req, res) => {
        try {
            // Lean turns the mongoose object in to a normal js object
            const orders = await Order.find().setOptions({
                lean: true
            });

            const responseOrdersPromises = orders.map(value => {

                // I need to format the files so the client can download them
                // I need to use promises because the loops is async 
                return new Promise(async resolve => {
                    const filesReturnPromise = value.files.map(async file => {
                        return new Promise(async resolve => {
                            const fileToken = await authentication.createJsonToken({
                                path: file.path,
                                originalName: file.originalName
                            });
                            const fileUrl = "/getFile/" + fileToken;
                            const returnObject = {
                                originalName: file.originalName,
                                url: fileUrl,
                                description: file.description
                            };
                            resolve(returnObject);
                        });
                    });
                    const files = await Promise.all(filesReturnPromise);
                    const returnValue = {
                        ...value
                    };
                    console.log("File return", files);
                    // delete value.files;
                    returnValue.files = files;
                    console.log("Value", returnValue);




                    resolve(returnValue);
                });

            });
            const responseOrders = await Promise.all(responseOrdersPromises);
            console.log("reOrders", responseOrders);
            res.json({
                error: false,
                data: responseOrders
            });
            // console.log(orders);
        } catch (err) {
            console.log(err)
        }
    });
    app.get("/getFile/:token", verifyAuth, checkAdminAuth, async (req, res) => {
        try {
            const tokenData = await authentication.decodeJsonToken(req.params.token);
            const {
                path,
                originalName
            } = tokenData;
            res.download(path, originalName);

        } catch (err) {
            console.log(err)
        }

    });
    app.post("/deleteOrder", async (req, res) => {
        try {
            const {
                id
            } = req.body;

            const searchId = new mongoose.Types.ObjectId(id)

            const order = await Order.findOne({
                _id: searchId
            });

            await order.delete();
            res.json({
                error: false
            });
        } catch (err) {
            console.log(err)
        }
    });
    app.post("/logOut", (req, res) => {
        try {
            res.clearCookie("auth");
            res.json({
                error: false
            });
        } catch (err) {
            console.log(err)
            res.json({
                error: true
            });
        }
    });





    /* Middleware */

    async function checkAdminAuth(req, res, next) {
        try {
            const authData = await authentication.decodeJsonToken(req.cookies.auth);
            console.log(authData);
            if (authData.admin) {
                next();
            } else {
                res.json({
                    error: true,
                    message: "NotAdmin"
                });
            }
        } catch (err) {
            console.log(err)
        }
    }
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