import { FC } from "react";
import Marquee from "react-fast-marquee";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// 3.9.2025: Considering redo of this section
const Home: FC = () => (
  <section id="home" className="">
    <Container
      fluid
      className="vh-100 d-flex justify-content-center align-items-center"
    >
      <Row className="">
        <Col lg={6} sm={12} className="">
          <img
            src="src/assets/images/family-imaging-imgcar-1.jpg"
            alt=""
            className="img-fluid rounded"
          />
        </Col>
        <Col lg={6} sm={12} className="">
          <Container fluid>
            <Row>
              <Col>
                <h2 className="fw-bold display-4">
                  Trust our Family to Care for Yours
                </h2>
                <p className="fs-6">
                  At Family Imaging of South Texas, we provide the most
                  advanced, up-to-date MRI scans with a patient-first approach.
                  Our team of experienced radiologists and technologists ensure
                  you receive the most accurate MRI imaging in a comfortable,
                  caring environment. Whether you or your family come in for an
                  X-Ray, Ultrasound or Full Body MRI, you can trust the family
                  at Family Imaging of South Texas to care for yours.
                </p>
                <Marquee>
                  <h2 className="px-2 fw-bold">
                    Schedule your MRI Scan Today!
                  </h2>
                </Marquee>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Home;
