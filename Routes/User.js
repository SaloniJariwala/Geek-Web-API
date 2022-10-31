const express = require("express");
const { signInUser } = require("../Controller/signin");
const router = express.Router();
const { setUser, getAllUsers, getUserById, updateUser, deleteUser } = require("../Controller/user");

router.route("/").post(signInUser);
router.route("/create").post(setUser);
router.route("/get-all").get(getAllUsers);
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;