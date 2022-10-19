const express = require("express");
const router = express.Router();
const { getDesignation, setDesignation } = require("../Controller/designation");

router.route("/").get(getDesignation).post(setDesignation);

module.exports = router;