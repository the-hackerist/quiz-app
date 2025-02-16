import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import BackgroundVideo from "./components/BackgroundVideo";
import Contact from "./components/Contact";
import Aboutus from "./components/Aboutus";
// import QuizApp from "./components/Quiz";

function App() {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Header />
      <main>
        <section className="relative flex h-screen flex-col items-center justify-center gap-10">
          <div className="mt-24 flex w-[40%] flex-col items-center justify-center gap-12 rounded-md bg-[#FFFFFFDD] p-20 text-center text-lg leading-8 tracking-widest text-[#444444]">
            <h1 className="text-6xl font-bold">
              Ready to{" "}
              <span className="text-[#f5454a] italic">
                Boost Your Brainpower?
              </span>
            </h1>
            <p>
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
              <span className="font-bold text-[#f75d9d]">
                challenge yourself
              </span>{" "}
              with exciting questions. Whether you&apos;re a trivia master or
              just looking to learn something new, this quiz app will keep you{" "}
              <span className="font-bold text-[#f75d9d]">
                {" "}
                entertained and engaged
              </span>
              . Can you ace every question? Play now and find out!
            </p>

            <button className="all cursor-pointer rounded-md border-2 border-[#faa81c] bg-[#fee5bb] px-12 py-3 text-lg font-bold text-[#faa81c] uppercase transition hover:scale-105 hover:bg-[#faa81c] hover:text-white">
              play now
            </button>
          </div>

          <BackgroundVideo />
        </section>

        <Aboutus />

        <Contact />

        {/* <QuizApp /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
