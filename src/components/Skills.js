import "../styles/Skills.scss";

import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Col, Container, Row } from "react-bootstrap";

export default function Skills({ handleClickLinkIcon }) {
  const skills = {
    frontEnd: [
      {
        size: { lg: 4 },
        name: "HTML5",
        icon: "/images/icons/front-end/html5.png",
      },
      {
        size: { lg: 4 },
        name: "CSS3",
        icon: "/images/icons/front-end/css3.png",
      },
      {
        size: { lg: 4 },
        name: "JavaScript",
        icon: "/images/icons/front-end/javascript.png",
      },
      {
        size: { lg: 12 },
        name: "Bootstrap",
        icon: "/images/icons/front-end/bootstrap.png",
      },
      {
        size: { lg: 12 },
        name: "jQuery",
        icon: "/images/icons/front-end/jquery.png",
      },
      {
        size: { lg: 12 },
        name: "Pug",
        icon: "/images/icons/front-end/pug.png",
      },
      {
        size: { lg: 12 },
        name: "React",
        icon: "/images/icons/front-end/react.png",
      },
      {
        size: { lg: 12 },
        name: "Next.js",
        icon: "/images/icons/front-end/nextjs.png",
      },
    ],
    backEnd: [
      {
        size: { lg: 6 },
        name: "PHP",
        icon: "/images/icons/back-end/php.png",
      },
      {
        size: { lg: 6 },
        name: "JSP",
        icon: "/images/icons/back-end/jsp.png",
        className: "mw-75",
      },
      {
        size: { lg: 12 },
        name: "Node.js",
        icon: "/images/icons/back-end/nodejs.png",
      },
      {
        size: { lg: 12 },
        name: "Express.js",
        icon: "/images/icons/back-end/expressjs.png",
      },
      {
        size: { lg: 12 },
        name: "Spring",
        icon: "/images/icons/back-end/spring.png",
      },
    ],
    database: [
      {
        size: { lg: 12 },
        name: "MySQL",
        icon: "/images/icons/database/mysql.png",
      },
      {
        size: { lg: 12 },
        name: "MariaDB",
        icon: "/images/icons/database/mariadb.png",
      },
    ],
    versionControl: [
      {
        size: { lg: 12 },
        name: "Git",
        icon: "/images/icons/version-control/git.png",
        className: "mw-75",
      },
      {
        size: { lg: 12 },
        name: "GitHub",
        icon: "/images/icons/version-control/github.png",
      },
    ],
    etc: [
      {
        size: { lg: 12 },
        name: "Apache",
        icon: "/images/icons/etc/apache.png",
      },
      {
        size: { lg: 12 },
        name: "Amazon Web Services",
        icon: "/images/icons/etc/aws.png",
      },
      {
        size: { lg: 12 },
        name: "Visual Studio Code",
        icon: "/images/icons/etc/vscode.png",
      },
    ],
  };

  return (
    <section id="skills">
      <Container>
        <h2 className="skills-title section-title text-white">
          <FontAwesomeIcon icon={faLink} className="icon" onClick={() => handleClickLinkIcon("skills")} />
          <span>SKILLS</span>
        </h2>
        <div className="skills-content">
          <Row>
            <Col lg={4}>
              <Card className="p-4 rounded-4 shadow">
                <Card.Title className="border-bottom">
                  <h3 className="text-primary fw-bold">Front-End</h3>
                </Card.Title>
                <Card.Body>
                  <Row className="row-gap-4">
                    {skills.frontEnd.map((skill, index) => (
                      <Col key={index} lg={skill.size.lg}>
                        <img src={skill.icon} alt={skill.name + " 아이콘"} title={skill.name} className={"img-fluid " + (skill.className ? skill.className : "")} />
                      </Col>
                    ))}
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Row className="gap-3">
                <Col lg={12}>
                  <Card className="p-4 rounded-4 shadow">
                    <Card.Title className="border-bottom">
                      <h3 className="text-primary fw-bold">Back-End</h3>
                    </Card.Title>
                    <Card.Body>
                      <Row className="row-gap-4 justify-content-center align-items-center">
                        {skills.backEnd.map((skill, index) => (
                          <Col key={index} lg={skill.size.lg} className="text-center">
                            <img src={skill.icon} alt={skill.name + " 아이콘"} title={skill.name} className={"img-fluid " + (skill.className ? skill.className : "")} />
                          </Col>
                        ))}
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={12}>
                  <Card className="p-4 rounded-4 shadow">
                    <Card.Title className="border-bottom">
                      <h3 className="text-primary fw-bold">Database</h3>
                    </Card.Title>
                    <Card.Body>
                      <Row className="row-gap-4 justify-content-center align-items-center">
                        {skills.database.map((skill, index) => (
                          <Col key={index} lg={skill.size.lg}>
                            <img src={skill.icon} alt={skill.name + " 아이콘"} title={skill.name} className={"img-fluid " + (skill.className ? skill.className : "")} />
                          </Col>
                        ))}
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col lg={4}>
              <Row className="gap-3">
                <Col lg={12}>
                  <Card className="p-4 rounded-4 shadow">
                    <Card.Title className="border-bottom">
                      <h3 className="text-primary fw-bold">Version Control</h3>
                    </Card.Title>
                    <Card.Body>
                      <Row className="row-gap-4 justify-content-center align-items-center">
                        {skills.versionControl.map((skill, index) => (
                          <Col key={index} lg={skill.size.lg}>
                            <img src={skill.icon} alt={skill.name + " 아이콘"} title={skill.name} className={"img-fluid " + (skill.className ? skill.className : "")} />
                          </Col>
                        ))}
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={12}>
                  <Card className="p-4 rounded-4 shadow">
                    <Card.Title className="border-bottom">
                      <h3 className="text-primary fw-bold">ETC</h3>
                    </Card.Title>
                    <Card.Body>
                      <Row className="row-gap-4 justify-content-center align-items-center">
                        {skills.etc.map((skill, index) => (
                          <Col key={index} lg={skill.size.lg}>
                            <img src={skill.icon} alt={skill.name + " 아이콘"} title={skill.name} className={"img-fluid " + (skill.className ? skill.className : "")} />
                          </Col>
                        ))}
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}
