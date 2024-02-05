import axios from "axios";
const refreshToken = localStorage.getItem("refreshToken");
export const axiosInstance = axios.create({
  baseURL: `http://localhost:8000`,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${refreshToken}`,
  },
});
