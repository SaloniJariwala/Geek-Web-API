const express = require("express");
const { signInUser } = require("../Controller/signin");
const router = express.Router();
const multer = require("multer");
const User = require("../Model/user");
const { setUser, getAllUsers, getUserById, updateUser, deleteUser, changePassword } = require("../Controller/user");

router.route("/").post(signInUser);
router.route("/create").post(setUser);
router.route("/get-all").get(getAllUsers);
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);
router.route("/change-password/:id").patch(changePassword);

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now()+file.originalname)
    }
});

const fileFilter = (req, file, cb) => {
    if(file.mimeType === 'image/jpeg' || file.mimeType === 'image/jpg' || file.mimeType === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

var upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});


router.route("/update-profile/:id").post(upload.single('profileImg'), async (req, res) => {
    const profileImage = req.file.path;
    const id = req.params.id;
    console.log("PATH NAME ==> ", req.file.path);
    console.log("FILE ==> ", req.file);
    User.findById(id, (error, data) => {
        data.profileImg = profileImage ? profileImage : 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg';
        data.save()
            .then((result) => {
                res.status(200).json({
                    message: "Profile Image Updated Successfully",
                    result
                });
            })
            .catch((error) => {
                res.status(200).json(error.message);
            })
    });
});

module.exports = router;