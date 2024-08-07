import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { Card, Col, Container, Row } from "react-bootstrap";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "../styles/Projects.scss";

export default function Projects({ handleClickLinkIcon }) {
  const electrip_image_length = 14;
  const ohbike_image_length = 12;
  const springbbs_image_length = 6;

  const electrip_info = (
    <>
      <p>
        그린카, 롯데렌터카를 참고하여 만든 <b>가상의 전기 자동차 대여 웹사이트</b>입니다.
      </p>
      <hr />
      <div className="d-flex">
        <p className="w-25 fw-bold">주요 기능</p>
        <p className="w-75">현재 위치 기반 주변 전기차 대여소 정보 제공, 대여 날짜, 장소, 차량 선택 후 예약하기, 예약 관리, 차량 관리</p>
      </div>
      <div className="d-flex">
        <p className="w-25 fw-bold">Github</p>
        <p className="w-75">
          <a href="https://github.com/dhwngjs01/electrip" title="Electrip Github" target="_blank" rel="noopener noreferrer">
            https://github.com/dhwngjs01/electrip
          </a>
        </p>
      </div>
      <div className="d-flex">
        <p className="w-25 fw-bold">Frontend</p>
        <p className="w-75">Next.js, Redux, Axios, Bootstrap, Swiper</p>
      </div>
      <div className="d-flex">
        <p className="w-25 fw-bold">Backend</p>
        <p className="w-75">Next.js, Express.js</p>
      </div>
      <div className="d-flex">
        <p className="w-25 fw-bold">Database</p>
        <p className="w-75">PostgreSQL</p>
      </div>
    </>
  );

  const ohbike_info = (
    <>
      <p>
        바이크옥션, FC-MOTO 쇼핑몰을 참고하여 만든 <b>바이크 용품 쇼핑몰 웹사이트</b>입니다.
      </p>
      <hr />
      <div className="d-flex">
        <p className="w-25 fw-bold">주요 기능</p>
        <p className="w-75">상품 카테고리별 목록 조회, 상품 옵션, 수량, 상품 구매, 장바구니, 관리자 대시보드, 상품 관리, 주문 관리</p>
      </div>
      <div className="d-flex">
        <p className="w-25 fw-bold">Github</p>
        <p className="w-75">
          <a href="https://github.com/dhwngjs01/oh_bike_shopping_mall" title="Oh Bike Shopping Mall Github" target="_blank" rel="noopener noreferrer">
            https://github.com/dhwngjs01/oh_bike_shopping_mall
          </a>
        </p>
      </div>
      <div className="d-flex">
        <p className="w-25 fw-bold">Frontend</p>
        <p className="w-75">Pug, jQuery, Ajax, Slick, CKEditor</p>
      </div>
      <div className="d-flex">
        <p className="w-25 fw-bold">Backend</p>
        <p className="w-75">Node.js, Express.js</p>
      </div>
      <div className="d-flex">
        <p className="w-25 fw-bold">Database</p>
        <p className="w-75">MariaDB</p>
      </div>
    </>
  );

  const spring_motorcycle_bbs_info = (
    <>
      <p>
        네이버 카페, 파쏘(Passo)를 참고하여 만든 <b>바이크 판매 장터 게시판 웹사이트</b>입니다.
      </p>
      <hr />
      <div className="d-flex">
        <p className="w-25 fw-bold">주요 기능</p>
        <p className="w-75">무한 스크롤 게시글 추가 로딩, 이미지 업로드, 업로드할 이미지 미리보기</p>
      </div>
      <div className="d-flex">
        <p className="w-25 fw-bold">Github</p>
        <p className="w-75">
          <a href="https://github.com/dhwngjs01/spring_motorcycle_bbs" title="Spring Motorcycle BBS Github" target="_blank" rel="noopener noreferrer">
            https://github.com/dhwngjs01/spring_motorcycle_bbs
          </a>
        </p>
      </div>
      <div className="d-flex">
        <p className="w-25 fw-bold">Frontend</p>
        <p className="w-75">jQuery, Ajax, Bootstrap</p>
      </div>
      <div className="d-flex">
        <p className="w-25 fw-bold">Backend</p>
        <p className="w-75">Spring Framework</p>
      </div>
      <div className="d-flex">
        <p className="w-25 fw-bold">Database</p>
        <p className="w-75">MariaDB</p>
      </div>
    </>
  );

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
                swiperClassName: "swiper-electrip",
                swiperImageFolder: "electrip",
                swiperImageLength: electrip_image_length,
                projectInfo: electrip_info,
              })}
            </Col>
            <Col lg={12}>
              {ProjectCard({
                title: "Oh! Bike 쇼핑몰",
                date: "2019. 11",
                collaboration: "개인 프로젝트",
                url: "https://github.com/dhwngjs01/OhBike_ShoppingMall",
                swiperClassName: "swiper-ohbike",
                swiperImageFolder: "ohbike",
                swiperImageLength: ohbike_image_length,
                projectInfo: ohbike_info,
              })}
            </Col>
            <Col lg={12}>
              {ProjectCard({
                title: "바이크 중고거래 게시판",
                date: "2019. 09",
                collaboration: "개인 프로젝트",
                url: "https://github.com/dhwngjs01/Spring_Motorcycle_BBS",
                swiperClassName: "swiper-springbbs",
                swiperImageFolder: "spring_bbs",
                swiperImageLength: springbbs_image_length,
                projectInfo: spring_motorcycle_bbs_info,
              })}
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

function ProjectCard(param) {
  const { title, date, collaboration, swiperClassName, swiperImageFolder, swiperImageLength, projectInfo } = param;

  // onClick={() => handleClick(url)}

  return (
    <Card className="p-4 rounded-4 shadow">
      <Card.Title className="text-center">
        <h2 className="fs-2 fw-bold">{title}</h2>
        <p className="fs-6">
          {date} ({collaboration})
        </p>
      </Card.Title>
      <Card.Body>
        <div className="d-flex gap-5">
          <div className="swiper-container">
            <SlideAnimation swiperClassName={swiperClassName} swiperImageFolder={swiperImageFolder} swiperImageLength={swiperImageLength} />
          </div>
          <Card.Text>{projectInfo}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

function SlideAnimation({ swiperClassName, swiperImageFolder, swiperImageLength }) {
  return (
    <Swiper className={swiperClassName}>
      {[...Array(swiperImageLength)].map((_, index) => (
        <SwiperSlide key={index}>
          <img src={`images/projects/${swiperImageFolder}/${index + 1}.png`} alt={index + 1} className="w-100" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
