import { FC } from "react";
import { motion } from "motion/react";

import Home from "./pages/Home";
import Services from "./pages/Services";
import NavigationBar from "./components/layout/NavigationBar/NavigationBar";
import Footer from "./components/layout/Footer/Footer";
import Contact from "./pages/Contact";

import ImageCarousel from "./components/ImageCarousel/ImageCarousel";
import CarouselOverlay from "./components/CarouselOverlay/CarouselOverlay";
import Container from "react-bootstrap/Container";
import ButtonComponent from "./components/Button/ButtonComponent";
import Reviews from "./pages/Reviews";
import InsuranceCarousel from "./components/InsuranceCarousel/InsuranceCarousel";

const App: FC = () => (
  <div style={{ backgroundColor: "hsl(0%,0%,0%)" }}>
    <NavigationBar />
    <InsuranceCarousel />
    <ImageCarousel
      overlay={
        // Overlay Text for the Image Carouel at the beginning of the page.
        <CarouselOverlay>
          {/* Animation for heading */}
          <motion.h1
            initial={{ opacity: 0, translateY: 15 }}
            animate={{ opacity: 100, translateY: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="display-1"
          >
            Family Imaging of South Texas
          </motion.h1>
          {/* Animation for tagline */}
          <motion.h2
            initial={{ opacity: "0%" }}
            animate={{ opacity: "100%" }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="py-1"
          >
            Advanced MRI Imaging utilizing the power of AI to deliver rapid
            diagnosis.
          </motion.h2>
          <ButtonComponent large linkTo="#contact">
            Contact Us!
          </ButtonComponent>
        </CarouselOverlay>
      }
    />
    <Container fluid>
      <Home />
      <Services />
      <Reviews />
      <Contact />
      <Footer />
    </Container>
  </div>
);

export default App;
