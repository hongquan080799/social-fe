import axios from "axios"
const host = process.env.REACT_APP_BACKEND_URL

export const upPost = (post) => {
    const jwt = localStorage.getItem('jwt')
    return new Promise((resolve, reject) => {
        axios.post(host + '/posts', post, {headers : {'Authorization' : 'Bearer ' + jwt}})
        .then(res => {
            resolve(res)
        }).catch(error => {
            reject(error)
        })
    })
}

export const upLoadImage = (imageData) => {
    return new Promise((resolve, reject) => {
        axios.post(host + '/file/upload', {file : imageData}, {headers : { 'Content-Type': 'multipart/form-data'}} )
        .then(res => {
            resolve(res)
        }).catch(error => {
            reject(error)
        })
    }) 
}

export const getAllPost = () => {
    return new Promise((resolve, reject) => {
        axios.get(host + '/posts')
        .then(res => {
            resolve(res)
        })
        .catch(error => {
            reject(error)
        })
    })
}