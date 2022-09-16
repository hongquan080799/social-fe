import axios from "axios"
const host = process.env.REACT_APP_BACKEND_URL

export const login = ({username, password}) =>{
    console.log(process.env.REACT_APP_BACKEND_URL)
    console.log(host + '/users/login');
    return new Promise((resolve, reject) => {
        
        axios.post( host +'/users/login', {username, password})
        .then(res =>{
            resolve(res)
        })
        .catch(error =>{
            reject(error)
        })
    })
}