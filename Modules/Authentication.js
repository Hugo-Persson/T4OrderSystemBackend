const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
module.exports = {
    createAuthToken: createAuthToken,
    createJsonToken: createJsonToken,
    decodeJsonToken: decodeJsonToken,
    encrypt: encrypt
}

const tokenSecret = process.env.TOKENSECRET;
const expirationTime = process.env.EXPIRATIONTIME;
async function generateHashedPassword() {
    console.log(process.env.MONGOURL)
}
async function createJsonToken(data) {
    return new Promise((resolve, reject) => {
        const token = jwt.sign(data, tokenSecret, {
            expiresIn: expirationTime
        });
        resolve(token);
    });


}

async function encrypt(data) {
    return new Promise(async (resolve, reject) => {

        try {
            const salt = await bcrypt.genSalt(10);
            // I need to make sure that the data is a string
            const encryptString = "" + data;
            console.log("encryptString", encryptString);

            const hashedPassword = await bcrypt.hash(encryptString, salt);
            resolve(hashedPassword);
        } catch (err) {
            console.log(err)
            reject(err);
        }
    })

}

async function createAuthToken(email) {
    return createJsonToken({
        type: "auth",
        email: email
    });
}

async function decodeJsonToken(token) {
    return new Promise(async (resolve, reject) => {
        try {
            const decodedToken = jwt.verify(token, tokenSecret);
            resolve(decodedToken);
        } catch (err) {
            reject(err);
        }
    });
}