// import { axios } from "axios";
const axios = require('axios');

const api = axios.create({
   baseURL: "http://localhost:3004",
})

export default api;