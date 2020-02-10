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