import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Reports from "./components/Reports";
import Business from "./components/Business";
import Investors from "./components/Investors";
import Newspaper from "./components/Newspaper";
import { IoIosArrowUp } from "react-icons/io";
function App() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Navbar />
      <div className="arrowUp" onClick={() => scrollToSection("navBar")}>
        <h1 onClick={() => scrollToSection("home")}>
          <IoIosArrowUp />
        </h1>
      </div>
      <Header />
      <Profile />
      <Investors />
      <Reports />
      <Business />
      <Newspaper />
      <Contact />
    </>
  );
}

export default App;
