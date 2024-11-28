import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSlider";
import ContentCard from "../components/ContentCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import GenerateImages from "../APIs/GenerateImages";
import Image from "react-bootstrap/Image";
import { useEffect, useState } from "react";

export default Home = () => {
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    GenerateImages().then((imgURL) => {
      setImageURL(imgURL);
    });
  }, []);

  return (
    <>
      <ImageSlider />
      <Container fluid="md" className="text-bg-primary">
        <section>
          <Container className="p-2">
            <h1>AI Medical Imaging for Rapid Results</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Assumenda delectus odit, reprehenderit minus, cumque modi vero
              eligendi, libero nam temporibus quidem maxime dicta! Reprehenderit
              nam incidunt minus tempore itaque possimus.
            </p>
            <Row className="p-2 d-flex flex-column-reverse flex-md-row my-2">
              <Col>
                <h2>MRI Scans</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                  maxime alias temporibus neque quibusdam perspiciatis
                  exercitationem delectus aspernatur accusantium numquam.
                </p>
              </Col>
              <Col>
                <Image src={imageURL} fluid />
              </Col>
            </Row>
            <Row className="p-2 d-flex flex-column-reverse flex-md-row my-2">
              <Col>
                <h2>AI Detection</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Totam nesciunt beatae amet dicta quidem earum doloribus nihil
                  deserunt autem possimus!
                </p>
              </Col>
              <Col>
                <Image src={imageURL} fluid />
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <Container className="p-2 d-flex flex-column align-items-center text-center">
            <h2>Walk-ins Welcome!</h2>
            <button>Book your appointment!</button>
          </Container>
        </section>
        <section>
          <Container className="bg-info bg-gradient p-2">
            <h2>Services</h2>
            <Container className="d-flex flex-column flex-md-row justify-content-evenly align-items-center">
              {/* Here we can pass a prop for the card title */}
              <ContentCard cardTitle="Fast Turnaround Time" />
              <ContentCard cardTitle="Downloadable Reports" />
              <ContentCard cardTitle="Excellent Customer Service" />
            </Container>
          </Container>
        </section>
        <section>
          <Container className="p-2">
            <h2>Scans</h2>
            {/* Here we can pass a prop for the card title */}
            <ContentCard cardTitle="Wellness" />
            <ContentCard cardTitle="Wellness" />
            <ContentCard cardTitle="Body Composition" />
          </Container>
        </section>
        <section>
          <Container>
            <h2>Contact Us!</h2>
          </Container>
        </section>
        <Footer />
      </Container>
    </>
  );
};
