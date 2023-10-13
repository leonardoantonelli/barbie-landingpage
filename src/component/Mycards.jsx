import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { Component } from "react";
import "../scss/MyCarousel.scss";

class Mycard extends React.Component {
  render() {
    return (
      <>
        <div className=" d-flex flex-column align-items-center ">
          <img
            src={this.props.img}
            alt=""
            className="w-100 rounded-circle shadow imghover"
          />

          <h4 className=" myTextWhite ">{this.props.name}</h4>
          <h6 className=" myTextWhite">{this.props.actor}</h6>
        </div>{" "}
      </>
    );
  }
}

export default Mycard;
