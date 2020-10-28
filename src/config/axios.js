import axios from 'axios'
const clientAxios = axios.create()
clientAxios.defaults.baseURL = "http://localhost:3004/api/v1/"
export default clientAxios