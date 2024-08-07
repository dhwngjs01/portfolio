import { Card, Col, Container, Row } from "react-bootstrap";
import "../styles/Archiving.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function Archiving({ handleClickLinkIcon }) {
  return (
    <section id="archiving">
      <Container>
        <h2 className="archiving-title section-title text-white">
          <FontAwesomeIcon icon={faLink} className="icon" onClick={() => handleClickLinkIcon("archiving")} />
          <span>ARCHIVING</span>
        </h2>
        <div className="archiving-content">
          <Row className="justify-content-center align-items-center">
            <Col lg={6}>
              <a href="https://github.com/dhwngjs01" title="https://github.com/dhwngjs01" target="_blank" rel="noreferrer noopener" className="text-decoration-none">
                <Card className="p-4 rounded-4 shadow cursor-pointer">
                  <Card.Title className="mb-4">
                    <img src="images/icons/version-control/github.png" alt="Github 아이콘" title="Github" className="img-fluid px-5" />
                  </Card.Title>
                  <Card.Body>
                    <p className="link-primary">github.com/dhwngjs01</p>
                    <p>
                      <span className="fw-bold">소스 코드 저장소</span>입니다.
                    </p>
                    <ul className="lh-lg">
                      <li>과거 프로젝트의 소스 코드</li>
                      <li>코딩 연습을 위해 만들어본 소스 코드</li>
                      <li>학교 강의에서 배운 소스 코드</li>
                    </ul>
                  </Card.Body>
                </Card>
              </a>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}
