import axios from "axios"

const instance = axios.create({
    baseURL: 'https://hr-departament-default-rtdb.firebaseio.com'
})

// instance.interceptors.request.use(

//     function (config) {
//         const userTokens = localStorage.getItem('userTokens')
//         if (userTokens) {
//             const tokens = JSON.parse(userTokens)
//             config.headers['Authorization'] = `Bearer ${tokens.access}`
//         }
//         return config
//     },
//     function (error) {
//         return Promise.reject(error)
//     }
// )

// instance.interceptors.response.use(
//     function (response) {
//         return response
//     },
//     function (error) {
//         return Promise.reject(error)
//     }
// )

export default instance
