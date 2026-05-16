import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import {
  useParams,
} from "react-router-dom";

function CourseDetails() {

  const { id } =
    useParams();

  const [course,
    setCourse] =
    useState(null);

  const [lessons,
    setLessons] =
    useState([]);

  const [lessonData,
    setLessonData] =
    useState({
      title: "",
      videoUrl: "",
    });

  useEffect(() => {
    fetchCourse();
    fetchLessons();
  }, []);

  const fetchCourse =
    async () => {
      try {

        const response =
          await axios.get(
            `http://localhost:5000/api/course/${id}`
          );

        setCourse(
          response.data
        );

      } catch (error) {
        console.log(error);
      }
    };

  const fetchLessons =
    async () => {
      try {

        const response =
          await axios.get(
            `http://localhost:5000/api/lesson/${id}`
          );

        setLessons(
          response.data
        );

      } catch (error) {
        console.log(error);
      }
    };

  const handleChange =
    (e) => {
      setLessonData({
        ...lessonData,
        [e.target.name]:
          e.target.value,
      });
    };

  const handleAddLesson =
    async () => {
      try {

        const response =
          await axios.post(
            "http://localhost:5000/api/lesson/create",
            {
              ...lessonData,
              courseId: id,
            }
          );

        alert(
          response.data.message
        );

        fetchLessons();

      } catch (error) {
        alert(
          "Lesson Failed"
        );
      }
    };

  const handleEnroll =
    async () => {
      try {

        const userId =
          localStorage.getItem(
            "userId"
          );

        const response =
          await axios.post(
            "http://localhost:5000/api/enrollment/enroll",
            {
              userId,
              courseId: id,
            }
          );

        alert(
          response.data.message
        );

      } catch (error) {
        alert(
          error.response?.data
            ?.message ||
          "Enrollment Failed"
        );
      }
    };

  if (!course) {
    return (
      <h1 className="text-center text-2xl mt-10">
        Loading...
      </h1>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="bg-white p-8 rounded-lg shadow-lg">

        <h1 className="text-4xl font-bold mb-4">
          {course.title}
        </h1>

        <p className="text-lg mb-4">
          {course.description}
        </p>

        <p className="font-semibold text-lg mb-4">
          Instructor:{" "}
          {course.instructor}
        </p>

        <button
          onClick={
            handleEnroll
          }
          className="bg-green-600 text-white px-5 py-3 rounded mb-8"
        >
          Enroll Course
        </button>

        <h2 className="text-2xl font-bold mb-4">
          Add Lesson
        </h2>

        <input
          type="text"
          name="title"
          placeholder="Lesson Title"
          className="w-full border p-3 rounded mb-4"
          onChange={
            handleChange
          }
        />

        <input
          type="text"
          name="videoUrl"
          placeholder="Video URL"
          className="w-full border p-3 rounded mb-4"
          onChange={
            handleChange
          }
        />

        <button
          onClick={
            handleAddLesson
          }
          className="bg-blue-600 text-white px-5 py-3 rounded mb-8"
        >
          Add Lesson
        </button>

        <h2 className="text-2xl font-bold mb-4">
          Lessons
        </h2>

        {lessons.map(
          (lesson) => (
            <div
              key={lesson._id}
              className="bg-gray-100 p-4 rounded mb-4"
            >
              <h3 className="text-xl font-bold">
                {lesson.title}
              </h3>

              <a
                href={
                  lesson.videoUrl
                }
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                Watch Video
              </a>
            </div>
          )
        )}

      </div>
    </div>
  );
}

export default CourseDetails;