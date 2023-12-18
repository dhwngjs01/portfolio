import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Projects.scss";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { Card, Col, Container, Row } from "react-bootstrap";

export default function Projects({ handleClickLinkIcon }) {
  return (
    <section id="projects">
      <Container>
        <h2 className="projects-title section-title text-white">
          <FontAwesomeIcon icon={faLink} className="icon" onClick={() => handleClickLinkIcon("projects")} />
          <span>PROJECTS</span>
        </h2>
        <div className="projects-content">
          <Row className="row-gap-4">
            <Col lg={12}>
              {ProjectCard({
                title: "Electrip",
                date: "2023. 03",
                collaboration: "개인 프로젝트",
                url: "https://github.com/dhwngjs01/Electrip",
              })}
            </Col>
            <Col lg={12}>
              {ProjectCard({
                title: "Oh! Bike 쇼핑몰",
                date: "2019. 11",
                collaboration: "개인 프로젝트",
                url: "https://github.com/dhwngjs01/OhBike_ShoppingMall",
              })}
            </Col>
            <Col lg={12}>
              {ProjectCard({
                title: "바이크 중고거래 게시판",
                date: "2019. 09",
                collaboration: "개인 프로젝트",
                url: "https://github.com/dhwngjs01/Spring_Motorcycle_BBS",
              })}
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

function ProjectCard(param) {
  const { title, date, collaboration, url } = param;

  const handleClick = (url) => {
    window.open(url, "_blank", "noopener, noreferrer");
  };

  return (
    <Card className="p-4 rounded-4 shadow cursor-pointer" onClick={() => handleClick(url)}>
      <Card.Title className="text-center">
        <h2 className="fs-2 fw-bold">{title}</h2>
        <p className="fs-6">
          {date} ({collaboration})
        </p>
      </Card.Title>
      <Card.Body></Card.Body>
    </Card>
  );
}
