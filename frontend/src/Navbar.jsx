import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-8 py-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold">
        Smart LMS
      </h1>

      <div className="space-x-6">

        <Link to="/" className="hover:text-gray-200">
          Home
        </Link>

        <Link to="/" className="hover:text-gray-200">
          Courses
        </Link>

        <Link to="/login" className="hover:text-gray-200">
          Login
        </Link>

        <Link to="/signup" className="hover:text-gray-200">
          Signup
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;