import { useState } from "react";
import ListItem from "../ListItem";

const headerList = ["Home", "About us", "Contact", "Login"];

function Header() {
  const [activeLink, setActiveLink] = useState("home");

  return (
    <header className="flex items-center justify-between border-b border-gray-300 px-40 py-6 shadow-sm">
      <img src="quizzy-logo.png" alt="app logo" className="w-30" />
      <div className="flex items-center justify-center gap-12">
        <ul className="flex items-center justify-center gap-8">
          {headerList.map((item) => (
            <ListItem
              key={item}
              value={item}
              setActiveLink={setActiveLink}
              activeLink={activeLink}
            />
          ))}
        </ul>

        <button className="cursor-pointer rounded-full border-2 border-[#f64348] px-6 py-2 font-bold text-[#f64348] uppercase transition-all hover:scale-105 hover:bg-[#f64348] hover:text-white">
          quick play
        </button>
      </div>
    </header>
  );
}

export default Header;
