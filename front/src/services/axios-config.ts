import axios from 'axios'

const axiosInstance = axios.create({ baseURL: process.env.BACK_URL });

export default axiosInstance