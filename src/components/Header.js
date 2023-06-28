import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import "../styles/Header.css";

export default function Header({ setCurrentSlide }) {
  const menu_list = ["About Me", "Skills", "Archiving", "Projects", "Career"];

  return (
    <header className="header">
      <Navbar expand="lg" fixed="top" id="nav">
        <Container className="justify-content-between">
          <Nav.Link
            className="fw-bold fs-3 text-white-70"
            onClick={() => setCurrentSlide(0)}
          >
            포트폴리오
          </Nav.Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Nav>
              {menu_list.map((menu, index) => {
                return (
                  <Nav.Item key={index} className="px-lg-3">
                    <Nav.Link
                      className="fw-bold fs-5 text-white-70"
                      onClick={() => setCurrentSlide(index + 1)}
                    >
                      {menu}
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
