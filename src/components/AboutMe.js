import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faEnvelope, faLink, faLocationDot, faPencil, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";

import "../styles/AboutMe.css";

export default function AboutMe() {
  const about_me = [
    {
      icon: faUser,
      category: "이름",
      content: "오주헌",
    },
    {
      icon: faCalendar,
      category: "생년월일",
      content: "99. 02. 03",
    },
    {
      icon: faLocationDot,
      category: "주소지",
      content: "인천광역시 미추홀구",
    },
    {
      icon: faPhone,
      category: "연락처",
      content: "010-6263-6013",
      type: "tel",
    },
    {
      icon: faEnvelope,
      category: "이메일",
      content: "dhwngjs01@naver.com",
      type: "mailto",
    },
    {
      icon: faPencil,
      category: "학력",
      content: "인하공업전문대학 (컴퓨터정보공학부)",
    },
  ];

  return (
    <section id="about-me">
      <Container>
        <h2 className="about-me-title section-title">
          <FontAwesomeIcon icon={faLink} className="icon" />
          <span>ABOUT ME</span>
        </h2>
        <div className="about-me-content">
          <Row className="row-gap-5">
            {about_me.map((item, index) => {
              return (
                <Col key={index} lg={4}>
                  <div className="d-flex">
                    <div className="about-me-icon">
                      <FontAwesomeIcon icon={item.icon} />
                    </div>
                    <div className="aboud-me-text">
                      <h5 className="fw-bold">{item.category}</h5>
                      <span className="word-break-keep-all">
                        {item.type ? (
                          <a href={`${item.type}:${item.content}`} className={`text-decoration-none text-black ${item.type}`}>
                            {item.content}
                          </a>
                        ) : (
                          item.content
                        )}
                      </span>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </section>
  );
}
