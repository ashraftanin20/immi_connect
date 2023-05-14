import axios from "axios";

const axiosClient = axios.create({
    baseURL: `https://immi-backend.ashraftanin.com`,
    //withCredentials: true,
}); 



export default axiosClient;