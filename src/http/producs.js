import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASEURL

const $apiProducts = axios.create({
    baseURL: BASE_URL
})

export default $apiProducts