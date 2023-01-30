import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header({ isSticky }) {
  const [isOpenHamburger, setIsOpenHamburger] = useState(false);
  let menuBtn = document.querySelector(".menu-btn");

  const openHamburger = () => {
    setIsOpenHamburger(true);
    menuBtn.style.display = "none";
  };

  const closeHamburger = () => {
    setIsOpenHamburger(false);
    menuBtn.style.display = "block";
  };

  return (
    <header className={isSticky ? "header sticky" : "header"}>
      <nav className={isOpenHamburger ? "navbar active" : "navbar"}>
        <div className="logo">
          <Link to="/">Mashrab.</Link>
        </div>
        <ul className="menu">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#Skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <div onClick={() => closeHamburger()} className="cancel-btn">
            <i className="fas fa-times"></i>
          </div>
        </ul>
        <div className="media-icons">
          <Link to="https://t.me/MashrabYoldashov" target="_blank">
            <i className="fab fa-telegram"></i>
          </Link>
          <Link
            to="https://www.linkedin.com/in/mashrabyoldashov/"
            target="_blank"
          >
            <i className="fab fa-linkedin"></i>
          </Link>
          <Link to="https://github.com/mashrabyuldashov" target="_blank">
            <i className="fab fa-github"></i>
          </Link>
        </div>
      </nav>
      <div onClick={() => openHamburger()} className="menu-btn">
        <i className="fas fa-bars"></i>
      </div>
    </header>
  );
}
