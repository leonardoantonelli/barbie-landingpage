import { Row, Col, Container } from "react-bootstrap/";
import fullimg from "../assets/Asset 3.jpg";
import "../scss/Main.scss";
import dance from "../assets/12.png";
const Myinserzione = () => {
  return (
    <>
      <Row className=" d-flex my-5 ">
        <Col>
          <h1 className="d-flex myboldTitle myTextWhite justify-content-center text-center align-items-center title myTextDarkPink ">
            {" "}
            What is the movie about?
          </h1>
        </Col>
        <img src={dance} alt="" className="picdance d-lg-block " />
        <Col> </Col>
        <Col xs={12} lg={8}>
          <h5 className=" py-2 myboldSubTitle myTextPink"> SOTTOTITOLO</h5>
          <p className=" d-flex justify-content-center align-content-center myTextWhite ">
            Based on the Barbie fashion dolls by Mattel, it is the first
            live-action Barbie film after numerous computer animated direct to
            video and streaming television films. The film stars Margot Robbie
            as Barbie and Ryan Gosling as Ken, and follows the two on a journey
            of self- discovery following an existential crisis.
          </p>
        </Col>
      </Row>
    </>
  );
};

export default Myinserzione;
