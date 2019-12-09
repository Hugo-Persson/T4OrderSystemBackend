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
});

const User = new model("user", userSchema);


const orderSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    productNumber: {
        type: Number,
        default: 0,
    },
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



orderSchema.pre("save", async function () {
    // If user hasn't assigned productNumber then I want to assign it
    console.log("Middleware");
    console.log(this);
    console.log(this.productNumber)
    if (this.productNumber == 0) this.productNumber = await generateProductNumber()

})
const Order = new model("order", orderSchema);

function generateProductNumber() {
    return new Promise(async resolve => {
        try {
            const orders = await Order.find();
            let largestProductNumber = 0;
            orders.map(val => {
                if (val.productNumber > largestProductNumber) largestProductNumber = val.productNumber;
            });
            resolve(largestProductNumber + 1);
        } catch (err) {
            console.log(err)
        }
    })

}
module.exports = {
    User: User,
    Order: Order,

}