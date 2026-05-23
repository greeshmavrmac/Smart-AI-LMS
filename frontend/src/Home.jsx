import {
  useNavigate,
} from "react-router-dom";

function Home() {

  const navigate =
    useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="bg-blue-600 px-8 py-4 flex justify-between items-center shadow-md">

        <h1 className="text-3xl font-bold text-white">
          Smart LMS
        </h1>

        <div className="flex gap-4">

          <button
            onClick={() =>
              navigate("/dashboard")
            }
            className="bg-white text-blue-600 font-semibold px-5 py-2 rounded-lg hover:scale-105 transition"
          >
            Courses
          </button>

          <button
            onClick={() =>
              navigate("/ai-quiz")
            }
            className="bg-white text-purple-600 font-semibold px-5 py-2 rounded-lg hover:scale-105 transition"
          >
            AI Quiz
          </button>

          <button
            onClick={() =>
              navigate("/login")
            }
            className="bg-white text-blue-600 font-semibold px-5 py-2 rounded-lg hover:scale-105 transition"
          >
            Login
          </button>

          <button
            onClick={() =>
              navigate("/signup")
            }
            className="bg-white text-blue-600 font-semibold px-5 py-2 rounded-lg hover:scale-105 transition"
          >
            Signup
          </button>

        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center text-center h-[85vh] px-4">

        <h1 className="text-6xl font-bold text-blue-600 mb-4">
          Smart AI Learning
          <br />
          Management System
        </h1>

        <p className="text-2xl text-gray-700 mb-8">
          Learn Smarter with AI
        </p>

        <button
          onClick={() =>
            navigate("/login")
          }
          className="bg-blue-600 text-white px-8 py-4 rounded-xl text-xl font-semibold hover:scale-105 transition"
        >
          Get Started
        </button>

      </div>
    </div>
  );
}

export default Home;