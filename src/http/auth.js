import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASEURL

const $apiAuth = axios.create({
    withCredentials: true,
    baseURL: BASE_URL
})

$apiAuth.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

$apiAuth.interceptors.response.use((config) => {
    return config
}, async (error) => {
    const originalRequest = error.config 
    if(error.response.status === 401 && error.config && !error.config._isRetry){
        originalRequest._isRetry = true
        try{
            const response = await axios.get(`${BASE_URL}/refresh`, {withCredentials: true});
            localStorage.setItem('token', response.data.accessToken)
            return $apiAuth.request(originalRequest)
        } catch (e){
            console.log('Не авторизован')
        }
    }
    throw error
})

export default $apiAuth