import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/", //to be changed in production or when differnt Port fo local host
  headers: {
    "Content-Type": "application/json",
  },
});
export default instance;
