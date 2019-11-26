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

const orderSchema = new Schema({
    productName: String,
    customer: String,
    responsible: String,
    missionType: {
        production: Boolean,
        productionDocumentation: Boolean,
        calculation: Boolean
    },
    productDescription: String,
    wishes: String,
    files: [{
        path: String,
        originalName: String,
        description: String
    }]

});
const Order = new model("order", orderSchema);

module.exports = {
    User: User,
    Order: Order,

}