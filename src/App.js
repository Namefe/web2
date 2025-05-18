import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useRef, useState } from "react";
import HomePage from "./view/HomePage";
import Artist from "./view/Artist";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Footer from "./view/footer";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const Header = ({ isDarkSection }) => {
    return (
      <header
        className={`fixed top-0 left-0 w-full flex justify-between items-center p-4 z-[500] transition-colors duration-300 ${
          isDarkSection ? "text-black bg-transparent" : "text-white bg-transparent"
        }`}
      >
        <div className="flex items-center gap-2">
          <img
            src={isDarkSection ? process.env.PUBLIC_URL + "/logo_black.png" : process.env.PUBLIC_URL + "/Group 1.png"}
            className="w-10 sm:w-14 sm:ml-4"
            alt="로고"
          />
          <span className="text-xs sm:text-sm tracking-widest font-bold ml-12">
            SM
            <br />
            ENTERTAINMENT
          </span>
        </div>

        <button onClick={toggleMenu} className="text-xl sm:text-2xl hover:cursor-pointer">
          <img
            src={
              isMenuOpen
                ? isDarkSection
                  ? process.env.PUBLIC_URL + "/close.png"
                  : process.env.PUBLIC_URL + "/close.png"
                : isDarkSection
                ? process.env.PUBLIC_URL + "/bar_black.png"
                : process.env.PUBLIC_URL + "/bar.svg"
            }
            alt={isMenuOpen ? "닫기버튼" : "메뉴버튼"}
          />
        </button>
      </header>
    );
  };

  const Menu = () => (
    <div className="fixed top-0 left-0 w-full h-full bg-black text-white z-50 transition-all duration-300 cursor-pointer">
      <ul className="flex flex-col justify-center items-center h-full space-y-8 text-2xl">
        <li className="group">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="relative inline-block">
            ABOUT
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
          </Link>
        </li>
        <li className="group">
          <Link to="/artists" onClick={() => setIsMenuOpen(false)} className="relative inline-block">
            ARTISTS
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
          </Link>
        </li>
        <li className="group">
          <span className="relative inline-block">
            BUSINESS
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
          </span>
        </li>
        <li className="group">
          <span className="relative inline-block">
            CONTACT
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
          </span>
        </li>
      </ul>
    </div>
  );

  return (
    <Router>
      {isMenuOpen && <Menu />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header isDarkSection={isDarkSection} />
              <HomePage onDarkSectionChange={setIsDarkSection} />
            </>
          }
        />
        <Route path="/artists" element={<Artist />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
