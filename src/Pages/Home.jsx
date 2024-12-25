import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home() {
  return (
    <>
      <h2 className="my-2">Our Services</h2>
      <Container>
        <Row className="gy-4">
          <Col
            xs={12}
            md={6}
            className="d-flex align-items-center justify-content-center"
          >
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://picsum.photos/200.webp?random=1"
              />
              <Card.Body>
                <Card.Title>MRI</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col
            xs={12}
            md={6}
            className="d-flex align-items-center justify-content-center"
          >
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://picsum.photos/200.webp?random=2"
              />
              <Card.Body>
                <Card.Title>X-RAY</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col
            xs={12}
            md={6}
            className="d-flex align-items-center justify-content-center"
          >
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://picsum.photos/200.webp?random=3"
              />
              <Card.Body>
                <Card.Title>CT (Coming Soon)</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col
            xs={12}
            md={6}
            className="d-flex align-items-center justify-content-center"
          >
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://picsum.photos/200.webp?random=4"
              />
              <Card.Body>
                <Card.Title>ULTRASOUND</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="bg-primary">
        <Row>
          <Col sm={6}>
            <h2 className="my-2">We Care About Your Health</h2>
          </Col>
          <Col sm={6}>
            <Row>
              <Col>Board Certified Radiologist</Col>
            </Row>
            <Row>
              <Col>Patient Transportation Offered</Col>
            </Row>
            <Row>
              <Col>Same Day Appointment</Col>
            </Row>
            <Row>
              <Col>Limited Preventative Full Body MRI Offered</Col>
            </Row>
            <Row>
              <Col>Family Owned and Operated</Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <h2 className="my-2">COMING SOON 2025</h2>
    </>
  );
}
