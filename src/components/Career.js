import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";

export default function Career({ handleClickLinkIcon }) {
  return (
    <section id="career">
      <Container>
        <h2 className="career-title section-title">
          <FontAwesomeIcon icon={faLink} className="icon" onClick={() => handleClickLinkIcon("career")} />
          <span>CAREER</span>
        </h2>
        <div className="career-content">공사 중 입니다.</div>
      </Container>
    </section>
  );
}
