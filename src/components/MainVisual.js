import React from "react";
import { Button } from "react-bootstrap";

import "../styles/MainVisual.css";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MainVisual() {
  return (
    <div className="w-100 vh-100 d-flex align-items-center justify-content-center">
      <div
        className="main-visual-background"
        style={{ backgroundImage: "url(/images/main/main-visual.jpg)" }}
      ></div>
      <div className="main-visual-content text-white text-center">
        <div className="main-visual-title">
          <h1 className="fw-bold fs-0">오주헌</h1>
          <h2 className="fs-2">WEB DEVELOPER</h2>
        </div>
        <div className="main-visual-border"></div>
        <div className="main-visual-description">
          <p>
            끊임없이 발전하는 웹 기술과 함께 성장하는 개발자 오주헌입니다.
            <br />
            <br />
            최신 웹 개발 기술을 학습하고, 적용하여 웹 서비스를
            <br />
            보다 효율적이고 직관적으로 구현하는 것을 연구하고 있습니다.
          </p>
        </div>
        <div className="main-visual-button">
          <Button
            size="lg"
            variant="primary"
            className="rounded-5 fs-5 px-5 py-3"
          >
            <span className="me-1">더 알아보기</span>
            <FontAwesomeIcon icon={faAnglesDown} className="ms-1" />
          </Button>
        </div>
      </div>
    </div>
  );
}
