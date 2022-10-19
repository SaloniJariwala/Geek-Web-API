const asyncHandler = require("express-async-handler");
const UserRole = require("../Model/userRole");

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
    const allUserRoles = await UserRole.find();
    res.status(200).json(allUserRoles);
});

const getUserRoleById = asyncHandler(async (req, res) => {
    const userRole = await UserRole.findById(req.params.id);
    res.status(200).json(userRole);
});

module.exports = { getUserRole, setUserRole, getUserRoleById };