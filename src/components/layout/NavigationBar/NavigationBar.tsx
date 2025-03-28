import { FC, useState, useEffect } from "react";
import { motion } from "motion/react";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

// TODO: Get Screen Width to change styling based on screen width
// TODO: Turn the Screen Width effect into a context

const NavigationBar: FC = () => {
  // This state keeps track of the window width of the user's device.
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  // executes the functions inside on component render
  useEffect(() => {
    // Here, handleResize records the width of the browser and stores the result in setWindowWidth
    const handleResize = () => setWindowWidth(window.innerWidth);

    // the window has an event listener, and watches for a resize event on the browser window.
    // When the event happens, the function will execute.
    window.addEventListener("resize", handleResize);

    // Cleanup code after the component renders, or after the functions here are finished.
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Navbar
      expand="lg"
      bg="light"
      collapseOnSelect={true}
      fixed="top"
      className="py-0"
    >
      <Container>
        {/* Business Banner */}
        {/* 3-8-25: Changed to official business banner */}
        <Navbar.Brand href="#home" className="py-0">
          <img
            src={"images/family-imaging-logo.png"}
            alt="Family Imaging of South Texas Logo"
            className="d-inline-block align-top p-0"
            // If the window width is above or equal to the test value
            // the width of the image will stay the same.
            // if the test fails, the image will shrink.
            // TODO: Get rid of magic value (Or make it constant)
            width={windowWidth >= 768 ? "250px" : "150px"}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="fw-bold" href="#home">
              <motion.div whileHover={{ scale: 1.1 }}>Home</motion.div>
            </Nav.Link>
            <Nav.Link className="fw-bold" href="#services">
              <motion.div
                whileHover={{
                  scale: 1.1,
                }}
              >
                Services
              </motion.div>
            </Nav.Link>
            <Nav.Link className="fw-bold" href="#contact">
              <motion.div
                whileHover={{
                  scale: 1.1,
                }}
              >
                Contact Us
              </motion.div>
            </Nav.Link>
          </Nav>
          <Navbar.Text className="p-0">
            <motion.a
              href="tel:956-420-9536"
              whileTap={{ color: "gray" }}
              style={{ textDecoration: "none" }}
              className="m-0 p-0"
            >
              <p className="p-0 m-0 fs-5">(956) 420-9536</p>
            </motion.a>
            <p className="m-0 py-1 fw-bold fs-5">Hablamos Español</p>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
