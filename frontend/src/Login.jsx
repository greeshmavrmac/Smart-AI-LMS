import { useState } from "react";
import axios from "axios";
import {
  useNavigate,
} from "react-router-dom";

function Login() {

  const navigate =
    useNavigate();

  const [loginData,
    setLoginData] =
    useState({
      email: "",
      password: "",
    });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleLogin =
    async () => {
      try {

        const response =
          await axios.post(
            "http://localhost:5000/api/auth/login",
            loginData
          );

        localStorage.setItem(
          "token",
          response.data.token
        );

        localStorage.setItem(
          "userId",
          response.data.user._id
        );

        alert(
          response.data.message
        );

        navigate(
          "/dashboard"
        );

      } catch (error) {
        alert(
          error.response?.data
            ?.message ||
          "Login Failed"
        );
      }
    };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">

      <div className="bg-white p-8 rounded-lg shadow-lg w-96">

        <h1 className="text-3xl font-bold text-center mb-6">
          Login
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border p-3 rounded mb-4"
          onChange={
            handleChange
          }
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border p-3 rounded mb-4"
          onChange={
            handleChange
          }
        />

        <button
          onClick={
            handleLogin
          }
          className="w-full bg-blue-600 text-white p-3 rounded"
        >
          Login
        </button>

      </div>
    </div>
  );
}

export default Login;