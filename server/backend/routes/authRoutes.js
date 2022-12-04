const router = require("express").Router()
const controller = require("../controllers")

router.route("/login")
    .post(controller.loginUser)
router.route("/register")
    .post(controller.registerUser)
router.route("/update")
    .post(controller.updateUser)
router.route("/logout")
    .post(controller.logoutUser)

    
module.exports = router