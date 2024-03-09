import axios from "axios";
import { config } from "react-transition-group";


const instance = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
});

// instance.defaults.withCredentials = true;
// instance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("jwt")}`;

// Add a response interceptor
instance.interceptors.response.use(function (response) {
  // let token = localStorage.getItem("jwt");
  // config.headers = {
  //   Authorization: `Bearer ${token}`
  // }
  // config.headers.Authorization = `Bearer ${localStorage.getItem("jwt")}`;
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  // console.log("Check response axios ", response)
  return response.data ? response.data : { statusCode: response.status };
}, function (error) {
  let res = {}
  // console.log("Check error", error.name)
  // console.log("Check error", error.response)
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  if (error.response) {
    res.data = error.response.data;
    res.status = error.response.status;
    res.headers = error.response.headers;
    // console.log(error.response.data);
    // console.log(error.response.status);
    // console.log(error.response.headers);
  } else if (error.request) {
    console.log(error.request);
  } else {
    console.log("Error", error.message);
  }
  return res;
  //return Promise.reject(error);
});

export default instance;