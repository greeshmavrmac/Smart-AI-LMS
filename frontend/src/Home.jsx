import {
  useNavigate,
} from "react-router-dom";

function Home() {

  const navigate =
    useNavigate();

  return (
    <div className="min-h-screen bg-gray-200">

      <nav className="bg-blue-600 text-white p-4 text-3xl font-bold">
        Smart LMS
      </nav>

      <div className="flex flex-col justify-center items-center h-[80vh]">

        <h1 className="text-6xl font-bold text-blue-600 mb-4 text-center">
          Smart AI Learning Management System
        </h1>

        <p className="text-2xl mb-8">
          Learn Smarter with AI
        </p>

        <button
          onClick={() =>
            navigate(
              "/login"
            )
          }
          className="bg-blue-600 text-white px-8 py-4 rounded-lg text-2xl"
        >
          Get Started
        </button>

      </div>
    </div>
  );
}

export default Home;