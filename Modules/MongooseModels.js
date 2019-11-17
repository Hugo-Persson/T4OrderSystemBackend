const mongoose = require("mongoose");

const {
    Schema,
    model
} = mongoose;

const userSchema = new Schema({
    name: String,
    email: String,
    admin: Boolean,
    accessibleOrders: [String]
})
const User = new model("user", userSchema);

module.exports = {
    User: User,

}