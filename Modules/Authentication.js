const jwt = require("jsonwebtoken");
module.exports = {
    createAuthToken: createAuthToken,
    createJsonToken: createJsonToken,
    decodeJsonToken: decodeJsonToken,
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

async function createAuthToken(email) {
    return createJsonToken({
        email: email
    });
}

async function decodeJsonToken(token) {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(token);
            const decodedToken = jwt.verify(token, tokenSecret);
            resolve(decodedToken);
        } catch (err) {
            reject(err);
        }
    });
}