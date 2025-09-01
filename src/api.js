import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3030", 
  withCredentials: true,
});

export default api;