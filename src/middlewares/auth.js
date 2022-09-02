const jwt = require("jsonwebtoken");


const authorizationMidd = function (req, res, next) {
    try {
        if (req.decodedToken.user_id !== req.params.userId) return res.status(401).send({ status: false, msg: "Unauthorised Access" })
        next()
    } catch (error) {
        return res.status(500).send({ status: false, msg: error.message })
    }
}

const authenticationMidd = function (req, res, next) {
    try {
        let reqtoken = req.headers["x-auth-token"]
        if (!reqtoken) {
            reqtoken = req.headers["x-Auth-token"];
        }
        if (!reqtoken) return res.status(403).send({ status: false, message: "Request Is Missing A Mandatory Header" })
        let decodedToken = jwt.verify(reqtoken, "ZanduBalm")
        if (!decodedToken) return res.status(403).send({ status: false, msg: "InValid Token" });
        req.decodedToken=decodedToken;
        next();
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message }) 
    }
}

module.exports.authenticationMidd = authenticationMidd;
module.exports.authorizationMiddleware = authorizationMidd;