import axios from "axios";

var baseURL = "";

let headers = {};

if (localStorage.token) {
  headers.Authorization = `jwt ${localStorage.access_token}`;
}

const axiosInstance = axios.create({
  baseURL: baseURL,

  headers,
});

export default axiosInstance;
