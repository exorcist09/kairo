import React, { useState } from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { loginUser, signupUser } from "@/api/auth";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        const res = await loginUser(formData.email, formData.password);
        console.log("Login Successful", res.data);
        navigate("/dashboard");
      } else {
        const res = await signupUser(
          formData.name,
          formData.email,
          formData.password
        );
        console.log("Signup Successful:", res.data);
        setIsLogin(true);
      }
    } catch (error) {
      console.error("Auth error:->", error.message || "Unknown error");
      alert("Something went wrong");
    }
  };

  return (
    <div className="w-full h-screen bg-white flex justify-center items-center">
      <div className="p-4 flex md:flex-row items-center justify-center gap-16">
        <div className="max-w-md">
          <div className="flex items-center mb-6">
            <img src={logo} alt="logo" className="w-28 h-28 object-contain" />
          </div>
          <h2 className="text-3xl font-bold text-black mb-4">Job Scheduler</h2>
          <p className="text-[#2E3A59] mb-6">
            Automate the execution of jobs in sequence with customizable time
            intervals.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {!isLogin && (
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
                required
              />
            )}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold"
            >
              {isLogin ? "Log In" : "Sign Up"}
            </button>
          </form>

          <button
            className="mt-4 text-md font-bold text-blue-800 hover:underline"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin
              ? "Don't have an account? Sign Up"
              : "Already have an account? Log In"}
          </button>
        </div>

        <div className="bg-gray-200 p-6 rounded-xl shadow-md w-80">
          <div className="space-y-6">
            <div className="p-4 border border-gray-700 rounded-md text-center font-medium">
              Job A
            </div>
            <div className="w-full flex justify-center">
              <div className="h-4 w-1 bg-gray-700"></div>
            </div>
            <div className="p-4 border  border-gray-700 rounded-md text-center font-medium">
              Job B
            </div>
            <div className="relative flex justify-center items-center">
              <div className="h-4 w-1 bg-gray-700"></div>
              <span className="absolute right-[-4rem] bg-blue-600 text-sm px-2 py-1 rounded-md text-white">
                After 2min
              </span>
            </div>
            <div className="p-4 border   border-gray-700 rounded-md text-center font-medium">
              Job C
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
