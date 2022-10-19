const asyncHandler = require("express-async-handler");
const Designation = require("../Model/designation");
const API_KEY = "geekwebsolution";

const setDesignation = asyncHandler(async (req, res) => {
    const { token } = req.query;
    const compared = await bcrypt.compare(API_KEY, token);
    if(compared) {
        if (!req.body) {
            res.status(400).send("Designation is missing");
        }
        const designation = await Designation.create({
            name: req.body.name
        });
        res.status(200).json(designation);
    } else {
        res.status(400).send("Unauthorised Access");
    }
});

const getDesignation = asyncHandler(async (req, res) => {
    const { token } = req.query;
    const compared = await bcrypt.compare(API_KEY, token);
    if(compared) {
        const allDesig = await Designation.find();
        res.status(200).json(allDesig);
    } else {
        res.status(400).send("Unauthorised Access");
    }
});

module.exports = { getDesignation, setDesignation };