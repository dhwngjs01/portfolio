import { React, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import "../styles/Header.css";

export default function Header() {
  const menu_list = [
    { id: "about-me", name: "About Me" },
    { id: "skills", name: "Skills" },
    { id: "archiving", name: "Archiving" },
    { id: "projects", name: "Projects" },
    { id: "career", name: "Career" },
  ];

  useEffect(() => {
    const nav = document.querySelector("#nav");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        nav.classList.add("navbar-scroll");
      } else {
        nav.classList.remove("navbar-scroll");
      }

      // 스크롤 위치에 따른 메뉴 활성화
      const scrollPosition = window.scrollY;
      const sectionList = document.querySelectorAll("section");
      sectionList.forEach((section) => {
        if (scrollPosition >= section.offsetTop - 100 && scrollPosition < section.offsetTop + section.offsetHeight - 100) {
          const id = section.getAttribute("id");

          document.querySelectorAll(".navbar-nav a").forEach((a) => {
            a.classList.remove("active");
          });

          document.querySelector(`a[data-id="${id}"]`).classList.add("active");
        }
      });
    });
  }, []);

  // 스크롤 이동 함수
  const handleClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="header">
      <Navbar expand="lg" fixed="top" id="nav">
        <Container className="justify-content-between">
          <Nav.Link
            className="fw-bold fs-3 text-white-70"
            onClick={() => {
              handleClick("wrap");
            }}
          >
            포트폴리오
          </Nav.Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Nav>
              {menu_list.map((menu, index) => {
                return (
                  <Nav.Item key={index} className="px-lg-3">
                    <Nav.Link data-id={menu.id} className="fw-bold fs-5 text-white-70" onClick={() => handleClick(menu.id)}>
                      {menu.name}
                    </Nav.Link>
                  </Nav.Item>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
