import "swiper/swiper.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Globals.css";

import Header from "./components/Header";
import MainVisual from "./components/MainVisual";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Archiving from "./components/Archiving";
import Projects from "./components/Projects";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const nav = document.querySelector("#nav");
    const navLink = document.querySelectorAll(".nav-link");

    const aboutMe = document.querySelector("#about-me");
    const aboutmeTop = aboutMe.offsetTop;
    const aboutmeHeight = aboutMe.offsetHeight;
    const aboutmeBottom = aboutmeTop + aboutmeHeight;

    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        nav.classList.add("navbar-scroll");
      } else {
        nav.classList.remove("navbar-scroll");
      }

      // about me active class toggle
      if (window.scrollY >= aboutmeTop && window.scrollY < aboutmeBottom) {
        navLink[0].classList.add("active");
      } else {
        navLink[0].classList.remove("active");
      }
    });
  }, []);

  return (
    <>
      <Header />
      <MainVisual />
      <AboutMe />
      <Skills />
      <Archiving />
      <Projects />
    </>
  );
}
