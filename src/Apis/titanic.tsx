import axios from "axios";

const axiosConfig = {
    baseURL: "http://localhost:5000"
}


export default axios.create(axiosConfig);;