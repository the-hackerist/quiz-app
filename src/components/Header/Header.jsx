import { useState } from "react";

import ListItem from "../ListItem";

const headerList = ["Home", "About us", "Contact", "Login"];

function Header() {
  const [activeLink, setActiveLink] = useState("home");

  return (
    <header className="fixed z-1 flex w-full items-center justify-between border-b border-[#bea7cd] bg-white px-40 py-6 shadow-sm">
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

        <button className="cursor-pointer rounded-md border-2 border-[#7c4e9b] border-b-[#7c4e9b] bg-[#f2edf5] px-6 py-3 font-bold text-[#7c4e9b] uppercase transition-all hover:scale-105 hover:border-b hover:bg-[#7c4e9b] hover:text-white">
          quick quiz
        </button>
      </div>
    </header>
  );
}

export default Header;
