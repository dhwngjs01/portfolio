import "swiper/swiper.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Globals.css";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Mousewheel } from "swiper";

import Header from "./components/Header";
import MainVisual from "./components/MainVisual";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Archiving from "./components/Archiving";

export default function App() {
  const swiper = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const nav = document.querySelector("#nav");
    const navLink = document.querySelectorAll(".nav-item a");

    navLink.forEach((menu) => {
      menu.classList.remove("active");
    });

    if (currentSlide === 0) {
      nav.classList.remove("navbar-scroll");
    } else {
      nav.classList.add("navbar-scroll");
      navLink[currentSlide - 1].classList.add("active");
    }

    if (swiper) {
      swiper.current.swiper.slideTo(currentSlide);
    }
  }, [currentSlide]);

  const handlerSlideChangeTransitionEnd = (swiper) => {
    var acs = document.querySelectorAll(".swiper-slide-active")[0];
    var hasVerticalScrollbar = acs.scrollHeight > acs.clientHeight;

    if (hasVerticalScrollbar) {
      var scrollHeight = acs.scrollHeight;
      var slideSize = acs.swiperSlideSize;
      var scrollDifferenceTop = scrollHeight - slideSize;

      acs.addEventListener("wheel", findScrollDirectionOtherBrowsers);

      function findScrollDirectionOtherBrowsers(event) {
        var scrollTop = acs.scrollTop;
        scrollHeight = acs.scrollHeight;
        slideSize = acs.swiperSlideSize;
        var scrollDifference = scrollHeight - (scrollTop + slideSize);
        var delta;

        if (event.wheelDelta) {
          delta = event.wheelDelta;
        } else {
          delta = -1 * event.deltaY;
        }

        if (delta < 0) {
          if (scrollDifference < 1) {
            swiper.mousewheel.enable();
          } else {
            swiper.mousewheel.disable();
          }
        } else if (delta > 0) {
          if (scrollDifference === scrollDifferenceTop) {
            swiper.mousewheel.enable();
          } else {
            swiper.mousewheel.disable();
          }
        }
      }
    } else {
      swiper.mousewheel.enable();
    }
  };

  return (
    <>
      <Header setCurrentSlide={setCurrentSlide} />
      <Swiper
        ref={swiper}
        className="swiper-container"
        speed={800}
        direction="vertical"
        slidesPerView="auto"
        mousewheel={true}
        keyboard={true}
        modules={[Mousewheel, Keyboard]}
        touchReleaseOnEdges={true}
        onSlideChange={(swiper) => {
          setCurrentSlide(swiper.activeIndex);
        }}
        onSlideChangeTransitionEnd={handlerSlideChangeTransitionEnd}
      >
        <SwiperSlide
          className="main-visual-slide"
          style={{ backgroundImage: "url(/images/main/main-visual.jpg)" }}
        >
          <MainVisual />
        </SwiperSlide>
        <SwiperSlide>
          <AboutMe />
        </SwiperSlide>
        <SwiperSlide className="skills-slide">
          <Skills />
        </SwiperSlide>
        <SwiperSlide className="archiving-slide">
          <Archiving />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
