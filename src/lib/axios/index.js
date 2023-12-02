import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://gorest.co.in/public/v2/users",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer 220b6e43e8696b05af547f479f4f2727fb0a688d1bd1c4add2ea9c9ee31f1126",
  },
});
export default axiosInstance;
