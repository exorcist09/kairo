import axiosInstance from "./axios";

export const loginUser = (email,password)=>{
    return axiosInstance.post("/api/auth/login",{email,password});
} 

export const signupUser = (name,email,password)=>{
    return axiosInstance.post("/api/auth/signup",{name,email,password});
} 