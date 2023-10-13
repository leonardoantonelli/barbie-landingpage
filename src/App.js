import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Myheader from "../src/component/Myheader.jsx";
import Choosebarbie from "../src/component/Choosebarbie";

import Myinserzione from "./component/Myinserzione";
import Secondinserzion from "./component/Secondinserzion";
import { Container } from "react-bootstrap";
import fullimg from "../src/assets/Asset 3.jpg";
import MyCarousel from "./component/MyCarousel";
import Prova from "./component/Prova";
import IntervistSection from "./component/IntervistSection.jsx";
function App() {
  return (
    <>
      <Myheader />
      <Container>
        <Myinserzione />
        <Secondinserzion />
      </Container>{" "}
      <Container>
        <MyCarousel />
      </Container>{" "}
      <IntervistSection />
      <img src={fullimg} alt="" className="w-100" />{" "}
    </>
  );
}

export default App;
