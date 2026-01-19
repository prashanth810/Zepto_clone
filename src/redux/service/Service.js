import axios from "axios";

const httpClient = axios.create({
    baseURL: "https://pickles-ukal.onrender.com",
    headers: {
        "Conrent-Type": "application/json",
    }
})


export default httpClient;