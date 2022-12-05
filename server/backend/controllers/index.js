const appController = require("./appControllers")
const authController = require("./authControllers")



module.exports = {
    registerUser: authController.registerAUser,
    loginUser: authController.loginAUser,
    updateUser: authController.updateAUser,
    logoutUser: authController.logoutAUser,
    getUser: appController.getAUser
}