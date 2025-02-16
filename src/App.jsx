import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import QuizApp from "./components/Quiz";

function App() {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Header />
      <main className="">
        <div className="flex flex-col items-center justify-center gap-10">
          <p className="w-[40%] text-center text-lg leading-8 tracking-widest text-[#444444]">
            Welcome to{" "}
            <span className="mx-1 inline-block h-6 w-22">
              <img src="quizzy-logo.png" alt="app logo" />
            </span>{" "}
            Put your knowledge to the test with our{" "}
            <span className="font-bold text-[#f75d9d]">
              fun and interactive
            </span>{" "}
            quiz game! Choose from a variety of categories, set your preferred
            difficulty, and{" "}
            <span className="font-bold text-[#f75d9d]">challenge yourself</span>{" "}
            with exciting questions. Whether you&apos;re a trivia master or just
            looking to learn something new, this quiz app will keep you{" "}
            <span className="font-bold text-[#f75d9d]">
              {" "}
              entertained and engaged
            </span>
            . Can you ace every question? Play now and find out!
          </p>

          {/* <button className="all cursor-pointer rounded-md bg-blue-400 px-8 py-3 text-lg font-semibold text-white uppercase transition hover:scale-105 hover:bg-blue-500">
            Play now!
          </button> */}
        </div>
        {/* <QuizApp /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
