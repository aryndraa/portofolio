import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import icon from "./icon.png";

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.querySelector(".home");
      const scrollThreshold = 180; // Nilai scroll pada saat opacity berubah

      if (homeSection) {
        const scrollPosition = window.scrollY;

        if (scrollPosition > scrollThreshold) {
          homeSection.classList.add("opaque");
        } else {
          homeSection.classList.remove("opaque");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      <section className="home" id="home">
        <div className="container">
          <h2>Hi, its me</h2>
          <h1>Aryandra</h1>
          <h3>WEB DEVELOPER</h3>
          <div className="link">
            <a href="#about">About Me</a>
            <a href="#portofolio">Portofolio</a>
          </div>
        </div>
      </section>
      <section className="about" id="about">
        <div className="container">
          <h2>ABOUT</h2>
          <p>
            Mahasiswa Sekolah IT yang ahli dalam bidang Rekayasa Perangkat
            Lunak. Menguasai 2 bidang WEB Developer yaitu Front End Developer &
            Back End Developer. Serta kreatif dalam mendisain tampilan User
            Interface
          </p>
          <div className="link">
            <a href="#skil">My Skill</a>
          </div>
        </div>
        <div className="img">
          <img src={icon} alt="" />
        </div>
      </section>
    </>
  );
}

export default App;
