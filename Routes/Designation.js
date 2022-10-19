const express = require("express");
const router = express.Router();
const { getDesignation, setDesignation, getDesignationById } = require("../Controller/designation");

router.route("/").get(getDesignation).post(setDesignation);
router.route("/:id").get(getDesignationById);

module.exports = router;