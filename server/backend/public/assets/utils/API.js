import store from "./redux/store.js"
import { registeredUser, sendMessage, loggedinUser } from "./redux/actions.js"
import { registerURL, loginURL } from "./config.js"


 async function postData(url = '', data = {}) {
        const response = await fetch(url, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', 
          cache: 'no-cache', 
          credentials: 'same-origin', 
          // content: 'connect-src "self"',
          headers: {
            'Content-Type': 'application/json'
          },
          redirect: 'follow', 
          referrerPolicy: 'no-referrer', 
          body: JSON.stringify(data) 
        });
        return response.json(); 
      }

export const registerUser = async (user) =>{
     await  postData(registerURL, user)
        .then((data) => {
          if(data.message){
            return store.dispatch(sendMessage(data.message))
          } else {
            return store.dispatch(registeredUser(data));
          } 
        });
}

export const loginUser = async (user) =>{
  await postData(loginURL, user)
    .then((data)=>{
      if(data.messge){
        return store.dispatch(sendMessage(data.message))
      } else {
        return store.dispatch(loggedinUser(data))
      }
    })
}