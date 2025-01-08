import { FC } from "react";

import Home from "./pages/Home";
import Services from "./pages/Services";
import NavigationBar from "./components/layout/NavigationBar/NavigationBar";
import Footer from "./components/layout/Footer/Footer";
import ImageCarousel from "./components/ImageCarousel/ImageCarousel";
import CarouselOverlay from "./components/CarouselOverlay/CarouselOverlay";

import ButtonComponent from "./components/Button/ButtonComponent";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const App: FC = () => (
  <>
    <NavigationBar />
    <ImageCarousel
      overlayText={
        <CarouselOverlay>
          <h1>Family Imaging of South Texas</h1>
          <h2>
            Advanced MRI Imaging utilizing the power of AI to deliver rapid
            diagnosis
          </h2>
          <ButtonComponent large>Schedule Your MRI Scan TODAY!</ButtonComponent>
        </CarouselOverlay>
      }
    />
    <Container fluid={"lg"}>
      <Row>
        <Col>
          <Home />
        </Col>
      </Row>
      <Row>
        <Col>
          <Services />
        </Col>
      </Row>
    </Container>
    <Footer />
  </>
);

export default App;
