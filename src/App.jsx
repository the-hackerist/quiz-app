import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Header />
      <main>
        <div className="flex flex-col items-center justify-center gap-10">
          <p className="w-[30%] text-center tracking-widest">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Vitae in purus
            sem nec nascetur purus pellentesque finibus in. Himenaeos fermentum
            mattis porta lobortis rhoncus et facilisis. Molestie tristique
            mattis ullamcorper congue hendrerit aenean purus vivamus.
          </p>
          <button className="all cursor-pointer rounded-md bg-blue-400 px-8 py-3 text-lg font-semibold text-white uppercase transition hover:scale-105 hover:bg-blue-500">
            Play now!
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
