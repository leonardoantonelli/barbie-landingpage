import { Row, Col, Container } from "react-bootstrap/";
import imghp from "../assets/barbie__2023___3__by_kahlanamnelle_dfwmw4v-375w-2x.png";
import "../scss/Main.scss";

const Myinserzione = () => {
  return (
    <Row className=" d-flex my-5  ">
      <Col lg={6} className="d-flex flex-column justify-content-center">
        <h1 className="d-flex justify-content-center text-center align-items-center title myTextDarkPink ">
          {" "}
          Join the incredible world of Barbie
        </h1>
        <h5 className=" py-2 myboldSubTitle myTextPink">
          {" "}
          She is everything. <span></span>He's just Ken.
        </h5>
        <p className=" d-flex justify-content-center align-content-center myTextWhite ">
            "Barbie," director and co-writer Greta Gerwig’s summer splash, is a dazzling achievement, both technically and in tone. It’s a visual feast that succeeds as both a gleeful escape and a battle cry. So crammed with impeccable attention to detail is "Barbie” that you couldn’t possibly catch it all in a single sitting; you’d have to devote an entire viewing just to the accessories.
        </p>
        <div className="d-flex mb-4">
          <button className=" mybutton mx-2  shadow"> Watch the movie </button>
          <button className=" mybutton2 mx-2 shadow"> Learn more </button>
        </div>{" "}
      </Col>
      <Col className="text-center">
        <img src={imghp} alt="" className=" w-100  imghp " />{" "}
      </Col>
    </Row>
  );
};

export default Myinserzione;
