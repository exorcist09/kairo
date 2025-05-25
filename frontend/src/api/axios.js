import axios from "axios";

const instance = axios.create({
  baseURL: "http://https://kairo-zuto.onrender.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
