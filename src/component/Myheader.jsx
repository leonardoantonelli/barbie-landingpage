import Container from "react-bootstrap/Container";
import ReactDOM from "react-dom/client";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/1f882723957d26fee36d5a1f96db593d.png";
import "../scss/Myheader.scss";
import "../scss/Colorpalette.scss";
import "../scss/Myheader.scss";

function Myheader() {
  return (
    <Navbar expand="lg" className="myBgDarkPink d-flex justify-content-center">
      <img src={logo} alt="" className="logo imghover" />{" "}
      <Container className="myBgDarkPink">
        {" "}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="myTextPink fw-bold">
              Home
            </Nav.Link>

            <Nav.Link href="#Invervist" className="myTextPink fw-bold">
              Invervist
            </Nav.Link>
            <Nav.Link href="#MainCharacther" className="myTextPink fw-bold">
              Main Characther
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Myheader;
