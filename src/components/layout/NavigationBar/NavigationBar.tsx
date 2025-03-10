import { FC } from "react";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Logo from "../../../assets/images/family-imaging-logo.png";

const NavigationBar: FC = () => (
  <Navbar expand="lg" bg="light" collapseOnSelect fixed="top" className="py-0">
    <Container>
      {/* Business Banner */}
      {/* 3-8-25: Changed to official business banner */}
      <Navbar.Brand href="#home" className="py-0">
        <img
          src={Logo}
          alt="Family Imaging of South Texas Logo"
          className="d-inline-block align-top p-0"
          width={"250px"}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link className="fw-bold" href="#home">
            Home
          </Nav.Link>
          <Nav.Link className="fw-bold" href="#services">
            Services
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavigationBar;
