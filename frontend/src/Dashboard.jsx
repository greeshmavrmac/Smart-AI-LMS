import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import {
  useNavigate,
} from "react-router-dom";

function Dashboard() {

  const navigate =
    useNavigate();

  const [courses,
    setCourses] =
    useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses =
    async () => {
      try {

        const response =
          await axios.get(
            "http://localhost:5000/api/course/all"
          );

        setCourses(
          response.data
        );

      } catch (error) {
        console.log(
          error
        );
      }
    };

  const handleLogout =
    () => {
      localStorage.removeItem(
        "token"
      );

      navigate("/");
    };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <div>

          <button
            onClick={() =>
              navigate(
                "/create-course"
              )
            }
            className="bg-green-600 text-white px-4 py-2 rounded mr-3"
          >
            Create Course
          </button>

          <button
            onClick={
              handleLogout
            }
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>

        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">
        All Courses
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {courses.map(
          (course) => (
            <div
              key={course._id}
              onClick={() =>
                navigate(
                  `/course/${course._id}`
                )
              }
              className="bg-white p-5 rounded-lg shadow-lg cursor-pointer hover:shadow-xl"
            >

              <h3 className="text-xl font-bold">
                {course.title}
              </h3>

              <p className="mt-2 text-gray-600">
                {
                  course.description
                }
              </p>

              <p className="mt-3 font-semibold">
                Instructor:
                {" "}
                {
                  course.instructor
                }
              </p>

            </div>
          )
        )}

      </div>
    </div>
  );
}

export default Dashboard;