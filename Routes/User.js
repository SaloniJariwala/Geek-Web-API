const express = require("express");
const router = express.Router();
const { setUser, getAllUsers } = require("../Controller/user");

router.route("/create").post(setUser);
router.route("/get-all").get(getAllUsers);
// router.route("/sign-in").post(getUser);
// router.route("/:id").put(putUsers).delete(deleteUsers).get(getUserById);

module.exports = router;