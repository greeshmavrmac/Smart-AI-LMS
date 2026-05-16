import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateCourse() {
  const navigate = useNavigate();

  useEffect(() => {
    const token =
      localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const [courseData, setCourseData] =
    useState({
      title: "",
      description: "",
      instructor: "",
    });

  const handleChange = (e) => {
    setCourseData({
      ...courseData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleCreateCourse =
    async () => {
      try {
        const token =
          localStorage.getItem(
            "token"
          );

        const response =
          await axios.post(
            "http://localhost:5000/api/course/create",
            courseData,
            {
              headers: {
                Authorization:
                  `Bearer ${token}`,
              },
            }
          );

        alert(
          response.data.message
        );

      } catch (error) {
        alert(
          error.response?.data
            ?.message ||
          "Course Creation Failed"
        );
      }
    };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">

      <div className="bg-white p-8 rounded-lg shadow-lg w-96">

        <div className="flex justify-end mb-4">
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>

        <h1 className="text-3xl font-bold text-center mb-6">
          Create Course
        </h1>

        <input
          type="text"
          name="title"
          placeholder="Course Title"
          className="w-full border p-3 rounded mb-4"
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Course Description"
          className="w-full border p-3 rounded mb-4"
          onChange={handleChange}
        />

        <input
          type="text"
          name="instructor"
          placeholder="Instructor Name"
          className="w-full border p-3 rounded mb-4"
          onChange={handleChange}
        />

        <button
          onClick={
            handleCreateCourse
          }
          className="w-full bg-green-600 text-white p-3 rounded"
        >
          Create Course
        </button>

      </div>
    </div>
  );
}

export default CreateCourse;