const router = require("express").Router()
const controller = require("../controllers")

router.route("/user")
    .post(controller.getUser)

module.exports = router