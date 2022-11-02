const user = require("../Model/user");
const SECRET_KEY = "User Authentication";
const jwt = require("jsonwebtoken");
const asyncHandler = require('express-async-handler');
const bcrypt = require("bcryptjs");

const signInUser = asyncHandler(async (req, res) => {
    if (!req.body) {
        res.status(400);
        res.send("Provide sign in details");
    }
    try {
        const selectedUser = await user.findOne({ companyEmail: req.body.email });
        console.log(selectedUser, "====> SELECTED_USER");
        if (!selectedUser) {
            res.status(404).send("User Not Found");
            console.log("USER NOT FOUND");
        } else {
            console.log("USER FOUND");
            const passwordMatched = bcrypt.compare(req.body.password, selectedUser.password);
            console.log("PASSWORD MATCHED", passwordMatched);
            if (!passwordMatched) {
                res.status(400).send("Your password is incorrect");
            } else {
                const token = jwt.sign({
                    id: selectedUser._id,
                    email: selectedUser.companyEmail
                }, SECRET_KEY);
                res.status(200).json({ user: selectedUser, token });
            }
        }
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});

module.exports = { signInUser };