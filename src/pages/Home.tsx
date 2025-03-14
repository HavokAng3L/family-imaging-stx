import { FC } from "react";
import Marquee from "react-fast-marquee";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// 3.9.2025: Considering redo of this section
const Home: FC = () => (
  <section id="home">
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
                  Family Imaging of South Texas is dedicated to providing safe,
                  timely, cost-effective, and high quality medical imaging
                  services to the residents of the Rio Grande Valley. Our
                  mission is to provide exceptional care through teamwork,
                  compassion, patient-centered practices and continuous
                  innovation. At Family Imaging of South Texas, we pride
                  ourselves on providing the most advanced imaging services with
                  a patient-first approach. Our team of highly skilled
                  radiologists and technologists are committed to providing you
                  with the most accurate MRI imaging in a comfortable and caring
                  environment. Whether you or your family needs an x-ray,
                  ultrasound or full body MRI, you can trust our family to
                  provide the highest standard of care.
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
