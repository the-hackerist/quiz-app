import { useState } from "react";

const categories = ["General Knowledge", "Science", "History"];
const difficulties = ["Easy", "Medium", "Hard"];

export default function QuizApp() {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [startQuiz, setStartQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: "Mars",
    },
  ];

  const handleAnswer = (option) => {
    setSelectedOption(option);
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCategory("");
    setDifficulty("");
    setStartQuiz(false);
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setShowResult(false);
  };

  if (!startQuiz) {
    return (
      <div className="flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg">
          <h2 className="text-center text-2xl font-bold">
            Choose Category & Difficulty
          </h2>
          <div className="mt-4 space-y-2">
            <select
              className="w-full rounded-md border p-2"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              <option value="">Select Category</option>
              {categories.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <select
              className="w-full rounded-md border p-2"
              onChange={(e) => setDifficulty(e.target.value)}
              value={difficulty}
            >
              <option value="">Select Difficulty</option>
              {difficulties.map((diff, index) => (
                <option key={index} value={diff}>
                  {diff}
                </option>
              ))}
            </select>
            <button
              className="mt-4 w-full rounded-md bg-blue-500 p-2 text-white"
              onClick={() => setStartQuiz(true)}
              disabled={!category || !difficulty}
            >
              Start Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg">
        {showResult ? (
          <div>
            <h2 className="text-center text-2xl font-bold">Quiz Completed!</h2>
            <p className="mt-4 text-center text-lg">
              Your Score: {score} / {questions.length}
            </p>
            <button
              className="mt-4 w-full rounded-md bg-blue-500 p-2 text-white"
              onClick={restartQuiz}
            >
              Play Again
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-semibold">
              {questions[currentQuestion].question}
            </h2>
            <div className="mt-4 space-y-2">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className={`w-full rounded-md p-2 ${selectedOption === option ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </button>
              ))}
            </div>
            <button
              className="mt-4 w-full rounded-md bg-green-500 p-2 text-white disabled:opacity-50"
              onClick={nextQuestion}
              disabled={!selectedOption}
            >
              {currentQuestion + 1 < questions.length
                ? "Next Question"
                : "Show Results"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
