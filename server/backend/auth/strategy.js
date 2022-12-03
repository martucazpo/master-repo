const LocalStrategy = require("passport-local")
const bcrypt = require("bcryptjs")
const User = require("../db/models").User


module.exports = function (passport) {
    passport.serializeUser((user, done) => {
        done(null, user.id)
    })
    passport.deserializeUser((id, done) => {
        User.findById(id, (err, doc) => {
            done(null, doc)
        })
    })
    passport.use(
        new LocalStrategy({ userfield: "email" }, (email) => {
            User.findOne({ email }, (err, user) => {
                if (err) {
                    return done(err)
                }
                if (!user) {
                    return done(null, false)
                }
                if (!bcrypt.compareSync(password, user.password)) {
                    return done(null, false)
                }
                return done(null, user)
            })
        })
    )
}