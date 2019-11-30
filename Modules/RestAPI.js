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



    function createAccount(email, name, admin) {
        const newUser = new User({
            name: name,
            email: email,
            admin: admin
        });
        return newUser.save();
    }



    app.post("/makeOrder", upload.array("files", 12), async (req, res) => {
        console.log("Make order");
        try {
            const {
                productName,
                customer,
                responsible,
                production,
                productionDocumentation,
                calculation,
                productDescription,
                wishes,
                fileDescriptions
            } = req.body
            console.log(req.body);

            const files = req.files.map((value, index) => {
                return {
                    path: value.path,
                    originalName: value.originalname,
                    description: fileDescriptions[index]
                }
            })
            const order = new Order({
                productName: productName,
                customer: customer,
                responsible: responsible,
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
        console.log(req.files);
        console.log(req.body);
    });

    app.post("/getAllOrders", verifyAuth, async (req, res) => {
        try {
            // Lean turns the mongoose object in to a normal js object
            const orders = await Order.find().setOptions({
                lean: true
            });

            console.log("Files", orders[1].files);
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
            console.log("Return", responseOrders[1].files);
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
    app.get("/getFile/:token", async (req, res) => {
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