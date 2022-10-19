const express = require("express");
const router = express.Router();
const { getUserRole, setUserRole, getUserRoleById } = require("../Controller/userRole");

router.route("/").get(getUserRole).post(setUserRole);
router.route("/:id").get(getUserRoleById);

module.exports = router;