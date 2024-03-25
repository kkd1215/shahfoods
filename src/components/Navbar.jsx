import { GoHomeFill } from "react-icons/go";
import { RiSuitcaseFill } from "react-icons/ri";
import { MdAttachMoney, MdEmail } from "react-icons/md";
import { BiSolidReport } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import React from "react";
export default function Navbar() {
  const closeMenu = () => {
    console.log("Clicked");
    const navBar = document.getElementById("navBar");
    navBar.style.left = "-50rem";
  };
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav id="navBar">
      <div id="hiddenMenu" className="cross hidden">
        <h1 onClick={closeMenu}>
          <RxCross2 />
        </h1>
      </div>
      <ul>
        <li onClick={() => scrollToSection("home")}>
          <GoHomeFill />
          &nbsp;Home
        </li>
        <li onClick={() => scrollToSection("directors")}>
          <RiSuitcaseFill />
          &nbsp;Board Of Directors
        </li>
        <li onClick={() => scrollToSection("investors")}>
          <MdAttachMoney />
          &nbsp;Investors
        </li>
        <li onClick={() => scrollToSection("reports")}>
          <BiSolidReport />
          &nbsp;Annual Reports
        </li>
        <li onClick={() => scrollToSection("contact")}>
          <MdEmail />
          &nbsp;Contact
        </li>
      </ul>
    </nav>
  );
}
