const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            default: "No first name"
        },
        lastName: {
            type: String,
            required: true,
            default: "No last name"
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        isAuth: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("User", UserSchema)