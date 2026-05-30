import axios from "axios";
import CheckToken from "./CheckToken";
import Logout from "./Logout";

const baseURL = import.meta.env.VITE_API_URL || 'https://salon-backend-1j8y.onrender.com'

const api=axios.create({
    baseURL: baseURL
})
api.interceptors.request.use((config)=>{
    const token=CheckToken()
    if (token) {
        config.headers["Authorization"]="Bearer "+ token
    }
    return config
})

api.interceptors.response.use(
    res=>res,
    err=>{
        if(err.response && (err.response.status===401|| err.response.status===403)){
            Logout()
        }
        return Promise.reject(err)
    }
)

export default api
export { baseURL }