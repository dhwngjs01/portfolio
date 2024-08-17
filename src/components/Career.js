import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";

import "../styles/Career.scss";

export default function Career({ handleClickLinkIcon }) {
  const infoArr = [
    {
      imageSrc: "2016_national.jpg",
      imageAlt: "2016 서울특별시 제51회 전국기능경기대회 동메달 수상",
      infoTitle: <h4>2016 서울특별시 제51회 전국기능경기대회 동메달 수상</h4>,
    },
    {
      imageSrc: "2017_national.jpg",
      imageAlt: "2017 제주특별자치도 제52회 전국기능경기대회 우수상(6등) 수상",
      infoTitle: <h4>2017 제주특별자치도 제52회 전국기능경기대회 우수상&#40;6등&#41; 수상</h4>,
    },
    {
      imageSrc: "worldskills_korea.jpg",
      imageAlt: "국제기능올림픽대회 한국위원회",
      infoTitle: (
        <>
          <h4>2017년도 광주광역시 지방기능경기대회 금메달 수상</h4>
          <h4>2016년도 광주광역시 지방기능경기대회 금메달 수상</h4>
          <h4>2015년도 광주광역시 지방기능경기대회 동메달 수상</h4>
        </>
      ),
    },
  ];

  return (
    <section id="career">
      <div className="career-background" style={{ backgroundImage: "url(images/career/career_bg.jpg)" }}></div>
      <Container>
        <h2 className="career-title section-title text-white">
          <FontAwesomeIcon icon={faLink} className="icon" onClick={() => handleClickLinkIcon("career")} />
          <span>CAREER</span>
        </h2>
        <div className="career-content">
          {infoArr.map((info, index) => {
            return <CareerComponent key={index} {...info} />;
          })}
        </div>
      </Container>
    </section>
  );
}

function CareerComponent(param) {
  const { imageSrc, imageAlt, infoTitle, infoDesc } = param;
  return (
    <Row className="career-item align-items-center">
      <Col lg={3} className="text-center">
        <div className="career-logo w-100 rounded-circle overflow-hidden">
          <img src={`images/career/${imageSrc}`} alt={imageAlt} className="w-100" />
        </div>
      </Col>
      <Col lg={9}>
        <div className="career-info">
          {infoTitle}
          {infoDesc}
        </div>
      </Col>
    </Row>
  );
}
