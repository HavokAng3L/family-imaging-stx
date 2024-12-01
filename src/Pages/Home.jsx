import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";

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
      <h2 className="my-2">We Care About Your Health</h2>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Board Certified Radiologist</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis neque lectus, at sagittis mauris pulvinar a. Phasellus
            quis mi vitae elit suscipit ultricies eu id elit. Fusce vel auctor
            arcu, eget placerat dolor. Phasellus quis varius eros. Vivamus vel
            ligula quis dui volutpat sagittis. Phasellus mattis libero id erat
            eleifend viverra. Morbi aliquet ante est, et tempus massa molestie
            vitae. Nunc est ipsum, varius quis nulla non, tincidunt ornare
            justo. Sed ullamcorper tincidunt justo, ut ultrices est sollicitudin
            et.{" "}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Patient Transportation Offered</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis neque lectus, at sagittis mauris pulvinar a. Phasellus
            quis mi vitae elit suscipit ultricies eu id elit. Fusce vel auctor
            arcu, eget placerat dolor. Phasellus quis varius eros. Vivamus vel
            ligula quis dui volutpat sagittis. Phasellus mattis libero id erat
            eleifend viverra. Morbi aliquet ante est, et tempus massa molestie
            vitae. Nunc est ipsum, varius quis nulla non, tincidunt ornare
            justo. Sed ullamcorper tincidunt justo, ut ultrices est sollicitudin
            et.{" "}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Same-Day Appointment</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis neque lectus, at sagittis mauris pulvinar a. Phasellus
            quis mi vitae elit suscipit ultricies eu id elit. Fusce vel auctor
            arcu, eget placerat dolor. Phasellus quis varius eros. Vivamus vel
            ligula quis dui volutpat sagittis. Phasellus mattis libero id erat
            eleifend viverra. Morbi aliquet ante est, et tempus massa molestie
            vitae. Nunc est ipsum, varius quis nulla non, tincidunt ornare
            justo. Sed ullamcorper tincidunt justo, ut ultrices est sollicitudin
            et.{" "}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            Limited Preventative Full Body MRI Offered
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis neque lectus, at sagittis mauris pulvinar a. Phasellus
            quis mi vitae elit suscipit ultricies eu id elit. Fusce vel auctor
            arcu, eget placerat dolor. Phasellus quis varius eros. Vivamus vel
            ligula quis dui volutpat sagittis. Phasellus mattis libero id erat
            eleifend viverra. Morbi aliquet ante est, et tempus massa molestie
            vitae. Nunc est ipsum, varius quis nulla non, tincidunt ornare
            justo. Sed ullamcorper tincidunt justo, ut ultrices est sollicitudin
            et.{" "}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Family Owned</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis neque lectus, at sagittis mauris pulvinar a. Phasellus
            quis mi vitae elit suscipit ultricies eu id elit. Fusce vel auctor
            arcu, eget placerat dolor. Phasellus quis varius eros. Vivamus vel
            ligula quis dui volutpat sagittis. Phasellus mattis libero id erat
            eleifend viverra. Morbi aliquet ante est, et tempus massa molestie
            vitae. Nunc est ipsum, varius quis nulla non, tincidunt ornare
            justo. Sed ullamcorper tincidunt justo, ut ultrices est sollicitudin
            et.{" "}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
