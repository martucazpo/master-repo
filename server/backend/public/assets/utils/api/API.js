import store from "../redux/store.js"
import { registeredUser, sendMessage, loggedinUser, getUser } from "../redux/actions.js"
import { registerURL, loginURL, getUserURL } from "./config.js"
import { getData, postData } from "./fetch.js"


const API = {
  registerUser: async (user) => {
    await postData(registerURL, user)
      .then((data) => {
        if (data.message) {
          return store.dispatch(sendMessage(data.message))
        } else {
          return store.dispatch(registeredUser(data));
        }
      });
  },
  loginUser: async (user) => {
    await postData(loginURL, user)
      .then((data) => {
        if (data.messge) {
          return store.dispatch(sendMessage(data.message))
        } else {
          return store.dispatch(loggedinUser(data))
        }
      })
  },
  getDbUser: async (id) => {
    await getData(getUserURL + "/" + id)
      .then((data) => store.dispatch(getUser(data)))
  }
}

export default API

// export const registerUser = async (user) => {
//   await postData(registerURL, user)
//     .then((data) => {
//       if (data.message) {
//         return store.dispatch(sendMessage(data.message))
//       } else {
//         return store.dispatch(registeredUser(data));
//       }
//     });
// }

// export const loginUser = async (user) => {
//   await postData(loginURL, user)
//     .then((data) => {
//       if (data.messge) {
//         return store.dispatch(sendMessage(data.message))
//       } else {
//         return store.dispatch(loggedinUser(data))
//       }
//     })
// }

// export const getDbUser = async (id) => {
//   await getData("".id)
//     .then((data)=>store.dispatch(getUser(data)))
// }