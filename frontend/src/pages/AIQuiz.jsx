import { useState, useEffect } from "react";

function AIQuiz() {
  const [topic, setTopic] = useState("Python");
  const [difficulty, setDifficulty] = useState("Easy");
  const [quiz, setQuiz] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [timeLeft, setTimeLeft] = useState(60);

  const quizQuestions = {
    Python: [
      {
        question: "Which keyword is used to create a function in Python?",
        options: ["func", "function", "def", "create"],
        answer: "def",
      },
      {
        question: "Which data type stores True or False?",
        options: ["String", "Boolean", "Integer", "List"],
        answer: "Boolean",
      },
      {
        question: "Which symbol is used for comments in Python?",
        options: ["//", "#", "/*", "--"],
        answer: "#",
      },
      {
        question: "Which function prints output?",
        options: ["show()", "print()", "display()", "log()"],
        answer: "print()",
      },
      {
        question: "Which keyword is used for loops?",
        options: ["repeat", "loop", "for", "iterate"],
        answer: "for",
      },
    ],

    React: [
      {
        question: "Which hook is used for state?",
        options: ["useState", "useFetch", "useApi", "useData"],
        answer: "useState",
      },
      {
        question: "React is mainly used for?",
        options: ["Backend", "Database", "UI", "Hosting"],
        answer: "UI",
      },
      {
        question: "React is developed by?",
        options: ["Google", "Facebook", "Microsoft", "Amazon"],
        answer: "Facebook",
      },
      {
        question: "Which hook is used for side effects?",
        options: ["useEffect", "useState", "useHook", "useApi"],
        answer: "useEffect",
      },
      {
        question: "React uses which syntax?",
        options: ["HTML", "JSX", "CSS", "XML"],
        answer: "JSX",
      },
    ],

    ML: [
      {
        question: "ML stands for?",
        options: [
          "Machine Learning",
          "Memory Learning",
          "Modern Logic",
          "Machine Logic",
        ],
        answer: "Machine Learning",
      },
      {
        question: "Which library is used in ML?",
        options: ["TensorFlow", "Bootstrap", "Laravel", "PHP"],
        answer: "TensorFlow",
      },
      {
        question: "Which language is mostly used in ML?",
        options: ["Java", "Python", "PHP", "C"],
        answer: "Python",
      },
      {
        question: "Which algorithm is supervised?",
        options: [
          "Linear Regression",
          "K-Means",
          "PCA",
          "Apriori",
        ],
        answer: "Linear Regression",
      },
      {
        question: "ML is part of?",
        options: ["AI", "Web Dev", "Cloud", "Cybersecurity"],
        answer: "AI",
      },
    ],
  };

  const generateQuiz = () => {
    const shuffled = [...quizQuestions[topic]].sort(
      () => Math.random() - 0.5
    );

    const randomQuiz = shuffled.slice(0, 5);

    setQuiz(randomQuiz);
    setScore(null);
    setSelectedAnswers({});
    setTimeLeft(60);
  };

  useEffect(() => {
    if (quiz.length === 0) return;

    if (timeLeft === 0) {
      handleSubmit();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, quiz]);

  const handleSubmit = () => {
    let total = 0;

    quiz.forEach((q, index) => {
      if (selectedAnswers[index] === q.answer) {
        total++;
      }
    });

    setScore(total);
    setTimeLeft(0);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-center text-purple-600 mb-4">
          AI Quiz
        </h1>

        <h2 className="text-center text-red-600 font-bold text-xl mb-4">
          Time Left: {timeLeft}s
        </h2>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="border p-3 rounded-lg"
          >
            <option>Python</option>
            <option>React</option>
            <option>ML</option>
          </select>

          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="border p-3 rounded-lg"
          >
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>

        <button
          onClick={generateQuiz}
          className="bg-purple-600 text-white px-5 py-3 rounded-lg w-full mb-6"
        >
          Generate Quiz
        </button>

        {score === null &&
         quiz.map((q, index) => (
          <div
            key={index}
            className="border rounded-lg p-5 mb-4"
          >
            <h2 className="font-bold text-lg mb-3">
              {index + 1}. {q.question}
            </h2>

            {q.options.map((option, i) => (
              <label key={i} className="block mb-2">
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  onChange={() =>
                    setSelectedAnswers((prev) => ({
                      ...prev,
                      [index]: option,
                    }))
                  }
                />
                <span className="ml-2">{option}</span>
              </label>
            ))}
          </div>
        ))}

        {quiz.length > 0 && (
          <button
            onClick={handleSubmit}
            className="bg-green-600 text-white px-5 py-3 rounded-lg w-full"
          >
            Submit Quiz
          </button>
        )}

        {score !== null && (
          <div className="text-center mt-6">
            <h2 className="text-3xl font-bold text-green-600">
              Score: {score}/{quiz.length}
            </h2>

            <p className="text-lg mt-2 font-semibold">
              {score === quiz.length
                ? "Excellent! Perfect Score 🎉"
                : score >= 3
                ? "Good Job 👍"
                : "Keep Practicing 📚"}
            </p>

            <button
              onClick={() => {
                setQuiz([]);
                setScore(null);
                setSelectedAnswers({});
                setTimeLeft(60);
              }}
              className="mt-4 bg-blue-600 text-white px-5 py-3 rounded-lg"
            >
              Retry Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AIQuiz;