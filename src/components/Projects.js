import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Projects.css";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { Card, Col, Container, Row } from "react-bootstrap";

export default function Projects() {
  return (
    <section id="projects">
      <div className="projects py-5">
        <Container>
          <h2 className="projects-title section-title text-center text-white">
            <FontAwesomeIcon icon={faLink} className="icon" />
            <span>PROJECTS</span>
          </h2>
          <div className="projects-content">
            <Row className="gy-4">
              <Col lg={12}>
                <Card className="p-4 rounded-4 shadow">
                  <Card.Title className="text-center">
                    <h2 className="fs-2">Electrip</h2>
                    <p className="fs-6">2023. 03 (개인 프로젝트)</p>
                  </Card.Title>
                  <Card.Body></Card.Body>
                </Card>
              </Col>
              <Col lg={12}>
                <Card className="p-4 rounded-4 shadow">
                  <Card.Title className="text-center">
                    <h2 className="fs-2">Oh! Bike 쇼핑몰</h2>
                    <p className="fs-6">2019. 11 (개인 프로젝트)</p>
                  </Card.Title>
                  <Card.Body></Card.Body>
                </Card>
              </Col>
              <Col lg={12}>
                <Card className="p-4 rounded-4 shadow">
                  <Card.Title className="text-center">
                    <h2 className="fs-2">바이크 중고거래 게시판</h2>
                    <p className="fs-6">2019.09 (개인 프로젝트)</p>
                  </Card.Title>
                  <Card.Body></Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </section>
  );
}
