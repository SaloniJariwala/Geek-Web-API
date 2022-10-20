const User = require("../Model/user");
const bcrypt = require("bcryptjs");
const asyncHandler = require('express-async-handler');

const setUser = asyncHandler(async (req, res) => {
    if (!req.body) {
        res.status(400);
        res.send("Provide your details");
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    try {
        const newUser = await User.create({
            name: req.body.name,
            phoneNo: req.body.phoneNo,
            personalEmail: req.body.personalEmail,
            companyEmail: req.body.companyEmail,
            password: hashedPassword,
            birthdate: req.body.birthdate,
            gender: req.body.gender,
            designationId: req.body.designationId,
            joiningDate: req.body.joiningDate,
            userRoleId: req.body.userRoleId,
            address: req.body.address,
            salary: req.body.salary,
            bankName: req.body.bankName,
            accountNo: req.body.accountNo,
            ifscCode: req.body.ifscCode
        });
        res.status(200).json(newUser);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});

const getAllUsers = asyncHandler(async  (req, res) => {
    try {
        const allUsers = await User.find();
        res.status(200).json(allUsers);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});

const getUserById = asyncHandler(async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});

module.exports = { setUser, getAllUsers, getUserById };