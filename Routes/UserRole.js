const express = require("express");
const router = express.Router();
const { getUserRole, setUserRole } = require("../Controller/userRole");

router.route("/").get(getUserRole).post(setUserRole);

module.exports = router;