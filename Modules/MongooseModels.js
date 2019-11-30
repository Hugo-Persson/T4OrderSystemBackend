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
    date: {
        type: Date,
        default: Date.now
    },
    number: String,
    productName: String,
    customer: {
        name: String,
        email: String
    },
    responsible: {
        name: {
            type: String,
            default: "Ingen"
        },
        email: {
            type: String,
            default: ""
        }
    },
    status: {
        type: String,
        default: "Ej påbörjad",
    },
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