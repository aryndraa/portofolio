import React, { useState, useEffect } from "react";
import "./components.css";

const Navbar = () => {
  const [sideNavActive, setSideNavActive] = useState(false);

  const openSide = () => {
    setSideNavActive((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".header");
      const scrollThreshold = 180; // Nilai scroll pada saat opacity berubah

      if (navbar) {
        const scrollPosition = window.scrollY;
        if (scrollPosition > scrollThreshold) {
          navbar.classList.add("active");
        } else {
          navbar.classList.remove("active");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header className="header">
        <h1>
          Arya<span>ndra</span>.
        </h1>
        <div className="nav" id="nav">
          <a href="#home" className="active">
            Home
          </a>
          <a href="#about">About</a>
          <a href="#skill">My Skill</a>
          <a href="#portofolio">Portofolio</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="sidenav">
          <button onClick={openSide}>Menu</button>
          <ul className={`nav-list ${sideNavActive ? "active" : ""}`} id="side">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skil">My Skill</a>
            </li>
            <li>
              <a href="#portofolio">Portofolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
