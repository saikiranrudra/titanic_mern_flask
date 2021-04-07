import axios from "axios";

const axiosConfig = {
    baseURL: "http://localhost:8888"
}


export default axios.create(axiosConfig);;