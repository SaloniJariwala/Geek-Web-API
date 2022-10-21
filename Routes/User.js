const express = require("express");
const router = express.Router();
const { setUser, getAllUsers, getUserById, updateUser } = require("../Controller/user");

router.route("/create").post(setUser);
router.route("/get-all").get(getAllUsers);
router.route("/:id").get(getUserById).put(updateUser);
// router.route("/sign-in").post(getUser);
// router.route("/:id").put(putUsers).delete(deleteUsers).get(getUserById);

module.exports = router;