import { useState } from "react";
import axios from "axios";

function Signup() {

  const [formData,
    setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
      role: "student",
    });

  const handleChange =
    (e) => {
      setFormData({
        ...formData,
        [e.target.name]:
          e.target.value,
      });
    };

  const handleSignup =
    async () => {
      try {

        const response =
          await axios.post(
            "http://localhost:5000/api/auth/signup",
            formData
          );

        alert(
          response.data.message
        );

      } catch (error) {

        alert(
          error.response?.data
            ?.message ||
          "Signup Failed"
        );

        console.log(error);
      }
    };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">

      <div className="bg-white p-8 rounded-lg shadow-lg w-96">

        <h1 className="text-3xl font-bold text-center mb-6">
          Signup
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          className="w-full border p-3 rounded mb-4"
          onChange={
            handleChange
          }
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          className="w-full border p-3 rounded mb-4"
          onChange={
            handleChange
          }
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          className="w-full border p-3 rounded mb-4"
          onChange={
            handleChange
          }
        />

        <select
          name="role"
          className="w-full border p-3 rounded mb-4"
          onChange={
            handleChange
          }
        >
          <option value="student">
            Student
          </option>

          <option value="instructor">
            Instructor
          </option>

          <option value="admin">
            Admin
          </option>
        </select>

        <button
          onClick={
            handleSignup
          }
          className="w-full bg-green-600 text-white p-3 rounded"
        >
          Signup
        </button>

      </div>
    </div>
  );
}

export default Signup;