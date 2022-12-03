const router = require("express").Router()
const appRoutes = require("./appRoutes")
const authRoutes = require("./authRoutes")

router.use("/app", appRoutes)
router.use("/auth", authRoutes)

module.exports = router