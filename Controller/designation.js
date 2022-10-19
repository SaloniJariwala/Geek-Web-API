const asyncHandler = require("express-async-handler");
const Designation = require("../Model/designation");

const setDesignation = asyncHandler(async (req, res) => {
    if (!req.body) {
        res.status(400).send("Designation is missing");
    }
    const designation = await Designation.create({
        name: req.body.name
    });
    res.status(200).json(designation);
});

const getDesignation = asyncHandler(async (req, res) => {
    const allDesig = await Designation.find();
    res.status(200).json(allDesig);
});

module.exports = { getDesignation, setDesignation };