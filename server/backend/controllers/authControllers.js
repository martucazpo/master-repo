const User = require("../db/models").User
const passport = require('passport')
const bcrypt = require("bcryptjs")

module.exports = {
    registerAUser: (req, res) => {
        console.log(req.body)
        let { firstName, lastName, email, password } = req.body
        password =bcrypt.hashSync(password, 10)
        User.findOne({ email }, (err, data) => {
            if (err) {
                console.log(err)
            } else if (!data) {
                let newUser = new User({ firstName, lastName, email, password, loggedIn: true })
                newUser.save((err, data) => {
                    if (err) {
                        console.log(err)
                    } else {
                        let {  _id, loggedIn } = data
                        return res.json({  _id, loggedIn })
                    }
                })
            } else {
                return res.json({ message: `${email} is already registered in our database.` })
            }
        })
    },
    loginAUser: (req, res, next) => {
        passport.authenticate("local", (err, user, info) => {
            if (err) {
                console.log("Failed login", err)
                info = { message: "Failed login" }
                res.json(info)
            }
            if (user === false) {
                info = { message: "password or email do not match database" }
                res.json(info)
            } else {
                User.findByIdAndUpdate({ _id: user._id }, { $set: { loggedIn: true } }, { new: true }, (err, data) => {
                    if (err) {
                        console.log(err)
                    } else {
                        let {  _id, loggedIn } = data
                        return res.json({ _id, loggedIn })
                    }
                })
            }
        })(req, res, next)
    },
    updateAUser: (req, res) => {
        let fromFront = Object.assign({},req.body)
        for(let key in fromFront){
            if(fromFront[key] === ""){
                delete fromFront[key]
            }
        }
        if(fromFront.password){
            fromFront.password = bcrypt.hashSync(fromFront.password, 10)
        }
        User.findOne({ email: fromFront.email }, (err, data) => {
            if (err) {
                console.log(err)
            } else if (!data || data._id === fromFront._id) {
                User.findById({ _id: fromFront._id }, (err, data) => {
                    if (err) {
                        console.log(err)
                    } else {
                        let changedUser = Object.assign(data, fromFront)
                        let { _id } = data._id
                        User.findByIdAndUpdate({ _id }, changedUser, { new: true }, (err, data) => {
                            if (err) {
                                console.log(err)
                            } else {
                                let { firstName, lastName, email,  _id, loggedIn } = data
                                return res.json({ firstName, lastName, email, _id, loggedIn })
                            }
                        })
                    }
                })
            } else {
                return res.json({ message: `${data.email} is already in use.` })
            }
        })
    },
    logoutAUser: (req, res) => {
        let _id = req.body._id
        req.logout(() => {
            User.findByIdAndUpdate({ _id }, { $set: { loggedIn: false } }, { new: true }, (err, data) => {
                if (err) {
                    console.log(err)
                } else {
                    res.json({ message: `${data.email} logged out is: ${data.loggedIn}` })
                }
            })
        })
    }
}