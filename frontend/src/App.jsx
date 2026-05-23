import {
  Routes,
  Route,
} from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import CreateCourse from "./CreateCourse";
import CourseDetails from "./CourseDetails";
import AIQuiz from "./pages/AIQuiz";

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/signup"
        element={<Signup />}
      />

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/create-course"
        element={
          <CreateCourse />
        }
      />

      <Route
        path="/course/:id"
        element={
          <CourseDetails />
        }
      />

      <Route
        path="/ai-quiz"
        element={
          <AIQuiz />
        }
      />

    </Routes>
  );
}

export default App;