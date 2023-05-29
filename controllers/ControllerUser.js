const ControllerUser = require("express").Router();

ControllerUser.get("/", (req, res) => {
    return res.status(200).json({
        username: "Dara",
        email: "Dara@Wan.com"
    });
});

ControllerUser.get("/wafi", (req, res) => {
    return res.status(200).json({
        username: "Wafi",
        email: "Wafi@Wan.com"
    });
});

module.exports = ControllerUser;