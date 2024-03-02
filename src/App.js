import { useState, useEffect } from "react";
import "./App.css";
import Aboutmy from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./components/contact/Contact";
import Main from "./components/main/Main";

function App() {
  const [scrollBtn, setScrollBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setScrollBtn(true);
      } else {
        setScrollBtn(false);
      }
    });
  }, []);

  return (
    <div
      id="up"
      className="w-11/12 lg:w-[85%] mx-auto shadow-2xl md:shadow-xl pt-3"
    >
      <Header />
      <Aboutmy />
      <Main />
      <Contact />
      <Footer />
      <div
      
        className="bg-gray-600 p-2 rounded-full fixed bottom-2 right-[5%] active:scale-75"
        style={{ scale: scrollBtn ? "1" : "0", transition: "0.3s" }}
      >
        <a href="#up" className="w-full">
          <svg
            class="w-8 h-8 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m5 15 7-7 7 7"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default App;
