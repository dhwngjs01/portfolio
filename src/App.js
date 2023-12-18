import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Globals.scss";

import Header from "./components/Header";
import MainVisual from "./components/MainVisual";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Archiving from "./components/Archiving";
import Projects from "./components/Projects";
import Career from "./components/Career";

export default function App() {
  // 스크롤 이동 함수
  const handleClickLinkIcon = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header handleClickLinkIcon={handleClickLinkIcon} />
      <MainVisual handleClickLinkIcon={handleClickLinkIcon} />
      <AboutMe handleClickLinkIcon={handleClickLinkIcon} />
      <Skills handleClickLinkIcon={handleClickLinkIcon} />
      <Archiving handleClickLinkIcon={handleClickLinkIcon} />
      <Projects handleClickLinkIcon={handleClickLinkIcon} />
      <Career handleClickLinkIcon={handleClickLinkIcon} />
    </>
  );
}
