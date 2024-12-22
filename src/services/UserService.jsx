import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/user", // Adjust the URL if needed
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
