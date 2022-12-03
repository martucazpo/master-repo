const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            default: "Nofirstname"
        },
        lastName: {
            type: String,
            required: true,
            default: "Nolastname"
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        loggedIn: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("User", UserSchema)