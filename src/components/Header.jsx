import React from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
export default function Header() {
  const showMenu = () => {

    const navBar = document.getElementById("navBar");
    navBar.classList.toggle("menuOpen");
    if(navBar.classList.contains("menuOpen")){
      navBar.style.left = "0";
    }else{
      navBar.style.left = "-50rem";
    }

  };
  return (
    <header id="home">
      <div id="hiddenCloseMenu" className="menu hidden">
        <h2 onClick={showMenu}>
          <HiOutlineMenuAlt3 />
        </h2>
      </div>
      <h1>
        WELCOME TO SHAH <span>FOODS</span> LIMITED
      </h1>
      <p>
        The Company has been listed in BSE (Bombay Stock Exchange)
      </p>
      <h3>Established in year 1995</h3>
    </header>
  );
}
