const asyncHandler = require("express-async-handler");
const UserRole = require("../Model/userRole");
const API_KEY = "geekwebsolution";

const setUserRole = asyncHandler(async (req, res) => {
    if (!req.body) {
        res.status(400).send("User Role is missing");
    }
    const userRole = await UserRole.create({
        name: req.body.name
    });
    res.status(200).json(userRole);
});

const getUserRole = asyncHandler(async (req, res) => {
    const compared = await bcrypt.compare(API_KEY, req.query.token);
    if(compared) {
        const allUserRoles = await UserRole.find();
        res.status(200).json(allUserRoles);
    } else {
        res.status(400).send("Unauthorised Access");
    }
});

module.exports = { getUserRole, setUserRole };