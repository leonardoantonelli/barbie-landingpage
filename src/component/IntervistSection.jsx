import { Row, Col, Container } from "react-bootstrap/";
import fullimg from "../assets/Asset 3.jpg";
import "../scss/Main.scss";
import Mycard from "./Mycards";
import sfondo1 from "../assets/back1.png";
import sfondo2 from "../assets/back2.png";
import img0 from "../assets/cast0.jpg";
import img1 from "../assets/fc63bd42b7c94d3707601a795ff29c29.gif";
import img2 from "../assets/59b86a7b3c8cd7f50aee7561d6cae88c.gif";
import img3 from "../assets/4bb491aa33f9dcd256fe4ada1031fcfc.gif";
import img4 from "../assets/cast4.jpg";
import img5 from "../assets/ac9160344f4cb6d8f824c9876f22d53e.jpg";
import "../scss/MyCarousel.scss";
import "swiper/css";
import gsap from "gsap";
import Mycardinterview from "./MycardInterview";

const IntervistSection = () => {
  return (
    <>
      {" "}
      <h4
        className="title myTextPink myTextDarkPink text-center mt-5 mb-4 "
        id="Invervist"
      >
        {" "}
        Interviews
      </h4>
      <Row className=" text-center m-0 w-100  justify-content-lg-evelyn">
        <img src={sfondo1} alt="" className="mypositionleft" />
        <Col
          xs={12}
          lg={4}
          className=" d-flex justify-content-center  mb-4 ps-lg-5"
        >
          {" "}
          <Mycardinterview
            img={img1}
            title="Barbie"
            actor="Kate McKinnon"
            paragraf="The Barbie ambulance was an
actual toy that was made to look like a full-sized ...
"
          />
        </Col>
        <Col xs={12} lg={4} className=" d-flex justify-content-center mb-4">
          <Mycardinterview
            img={img2}
            title="Barbie"
            actor="Kate McKinnon"
            paragraf="Barbie was able to drive hands-free around the set
Ken was written specifically..."
          />
        </Col>
        <Col xs={12} lg={4} className="d-flex justify-content-center mb-4">
          <Mycardinterview
            img={img3}
            title="Barbie"
            actor="Kate McKinnon"
            paragraf="Barbie's car was operated by
a remote-controlled
..."
          />
        </Col>{" "}
        <img src={sfondo2} alt="" className="mypositionright" />{" "}
      </Row>
    </>
  );
};

export default IntervistSection;
