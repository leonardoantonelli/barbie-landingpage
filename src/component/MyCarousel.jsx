import { Row, Col, Container } from "react-bootstrap/";
import fullimg from "../assets/Asset 3.jpg";
import "../scss/Main.scss";
import Mycard from "./Mycards";
import img0 from "../assets/cast0.jpg";
import img1 from "../assets/cast1.jpg";
import img2 from "../assets/cast2.jpg";
import img3 from "../assets/cast3.jpg";
import img4 from "../assets/cast4.jpg";
import img5 from "../assets/ac9160344f4cb6d8f824c9876f22d53e.jpg";
import "../scss/MyCarousel.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import gsap from "gsap";
const MyCarousel = () => {
  return (
    <>
      {" "}
      <h4
        className="title myTextPink myTextDarkPink text-center mt-lg-5 mb-4"
        id="MainCharacther"
      >
        {" "}
        Main Character
      </h4>
      <div className="mt-5">
        <Row className="">
          <Col xs={6} lg={2} class=" d-flex justify-content-between">
            <Mycard img={img0} name="Barbie" actor="Margot Robbie" />
          </Col>
          <Col xs={6} lg={2} class=" d-flex justify-content-between">
            <Mycard img={img3} name="Ken" actor="Ryan Gosling" />{" "}
          </Col>
          <Col xs={6} lg={2} class=" d-flex justify-content-between">
            <Mycard img={img4} name="Barbie" actor="Kate McKinnon" />{" "}
          </Col>
          <Col xs={6} lg={2} class=" d-flex justify-content-between">
            <Mycard img={img2} name="Mattel CEO" actor="Will Ferrell" />{" "}
          </Col>
          <Col xs={6} lg={2} class=" d-flex justify-content-between">
            <Mycard img={img1} name="Sasha" actor="Ariana Greenblatt" />{" "}
          </Col>
          <Col xs={6} lg={2} class=" d-flex justify-content-between">
            <Mycard img={img5} name="Barbie" actor="Dua Lipa" />{" "}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default MyCarousel;
