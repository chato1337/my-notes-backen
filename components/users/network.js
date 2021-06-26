const express = require("express");
const router = express.Router();
const controller = require("./controller.js");


router.post("/login", (req, res) => {
    controller
        .login(req.body)
        .then(auth => {
            res.send(auth)
        })
        .catch(e => console.log(e))
})

router.post("/signup", (req, res) => {
    controller
        .register(req.body)
        .then(auth => {
            console.log(auth)
            res.send(auth)
        })
        .catch(e => console.log(e))
} )

module.exports = router