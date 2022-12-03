if (process.env.NODE_ENV !== "production") {
    require("dotenv").config()
}
const session = require("express-session")
const passport = require("passport")


module.exports = function (app) {
    app.use(session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: { secure: true }
    }))
    app.use(passport.initialize())
    app.use(session())
    require("./strategy")(passport)
}