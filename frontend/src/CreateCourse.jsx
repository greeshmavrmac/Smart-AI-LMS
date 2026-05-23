import {
  useState,
} from "react";

import axios from "axios";

import {
  useNavigate,
} from "react-router-dom";

function CreateCourse() {

  const navigate =
    useNavigate();

  const [courseData,
    setCourseData] =
    useState({
      title: "",
      courseUrl: "",
    });

  const handleChange =
    (e) => {

      setCourseData({
        ...courseData,
        [e.target.name]:
          e.target.value,
      });
    };

  const handleCreateCourse =
    async () => {
      try {

        const response =
          await axios.post(
  "https://smart-ai-lms.onrender.com/api/courses/create",

            courseData
          );

        alert(
          response.data.message
        );

        navigate(
          "/dashboard"
        );

      } catch (error) {

        alert(
          "Course Creation Failed"
        );

        console.log(
          error
        );
      }
    };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">

      <div className="bg-white p-8 rounded-lg shadow-lg w-[500px]">

        <h1 className="text-3xl font-bold text-center mb-6">
          Create Course
        </h1>

        <input
          type="text"
          name="title"
          placeholder="Course Name"
          className="w-full border p-3 rounded mb-4"
          onChange={
            handleChange
          }
        />

        <input
          type="text"
          name="courseUrl"
          placeholder="Paste Video URL"
          className="w-full border p-3 rounded mb-4"
          onChange={
            handleChange
          }
        />

        <button
          onClick={
            handleCreateCourse
          }
          className="w-full bg-green-600 text-white p-3 rounded-lg"
        >
          Create Course
        </button>

      </div>
    </div>
  );
}

export default CreateCourse;