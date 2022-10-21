const express = require("express");
const router = express.Router();
const { setUser, getAllUsers, getUserById, updateUser, deleteUser } = require("../Controller/user");

router.route("/create").post(setUser);
router.route("/get-all").get(getAllUsers);
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;