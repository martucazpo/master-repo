const router = require("express").Router()
const controllers = require("../controllers")

router.route("/register")
.post(controllers.registerUser)

router.route("/login")
.post(controllers.loginUser)


module.exports = router