import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class Mycardinterview extends React.Component {
  render() {
    return (
      <Card
        style={{ width: "15rem" }}
        className="myBgDarkPink myTextWhite shadow"
      >
        <Card.Img variant="top" src={this.props.img} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.paragraf}</Card.Text>
        </Card.Body>{" "}
        <div className="d-flex justify-content-center">
          <Button variant="primary" className="mybutton3 text-center mb-3">
            Click
          </Button>
        </div>
      </Card>
    );
  }
}

export default Mycardinterview;
