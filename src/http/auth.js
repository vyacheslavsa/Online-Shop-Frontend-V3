import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASEURL

const $apiAuth = axios.create({
    withCredentials: true, baseURL: BASE_URL
})

$apiAuth.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

export default $apiAuth