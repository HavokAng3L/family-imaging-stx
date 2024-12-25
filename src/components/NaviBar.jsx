import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Logo from "../images/Logo.webp";

import NavButton from "./NavButton";

export default function Navibar() {
  // Need to ask for the portal link

  return (
    <Navbar expand="lg" className="bg-light fixed-top">
      <Container fluid>
        <Navbar.Brand href="#home">
          <Image src={Logo} style={{ width: "200px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-navigation" />
        <Navbar.Collapse id="basic-navbar-navigation">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavButton
              variant="success"
              url="https://www.google.com"
              text="Patient Portal"
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
