import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Logo from "../images/Logo.webp";

export default function Navibar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container fluid>
        <Navbar.Brand href="#home">
          <Image src={Logo} style={{ width: "200px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-navigation" />
        <Navbar.Collapse id="basic-navbar-navigation">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
