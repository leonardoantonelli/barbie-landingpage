import { Row, Col, Container } from "react-bootstrap/";
import imghp from "../assets/fc63bd42b7c94d3707601a795ff29c29.gif";
import "../scss/Choosebarbie.scss";

const Choosebarbie = () => {
  return (
    <div class="items">
      <div class="item active">
        <img src="http://via.placeholder.com/500x500" />
      </div>
      <div class=" item next">
        <img src="http://via.placeholder.com/500x500" />
      </div>
      <div class="item">
        <img src="http://via.placeholder.com/500x500" />
      </div>
      <div class="item">
        <img src="http://via.placeholder.com/500x500" />
      </div>
      <div class="item prev">
        <img src="http://via.placeholder.com/500x500" />
      </div>
      <div class="button-container">
        <div class="button">
          <i class="fas fa-angle-left"></i>
        </div>
        <div class="button">
          <i class="fas fa-angle-right"></i>
        </div>
      </div>
    </div>
  );
};

export default Choosebarbie;
