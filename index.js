const mongoose = require("mongoose");
require("dotenv").config();
const express = require("express");

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
startApp();
async function startApp() {
    try {
        await mongoose.connect(process.env.MONGOURL);
        require("./Modules/RestAPI")(mongoose);
    } catch (err) {
        console.log(err);
    }
}



/* async function mongooseTest() {
    const {
        Schema,
        model
    } = mongoose;
    const userSchema = new Schema({
        name: String,
        email: String,
        password: String,
    });
    const User = model("User", userSchema);


    console.log(await User.find());
} */

/* const user = new User({
    name: "Hugo Persson",
    email: "hugopersson7@gmail.com",
    password: "password"
});
user.save((err) => {
    if (err) return console.log("error" + err);
    console.log("document saved");
}) */