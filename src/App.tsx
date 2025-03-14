import { FC } from "react";
import { motion } from "motion/react";

import Home from "./pages/Home";
import Services from "./pages/Services";
import NavigationBar from "./components/layout/NavigationBar/NavigationBar";
import Footer from "./components/layout/Footer/Footer";
import ImageCarousel from "./components/ImageCarousel/ImageCarousel";
import CarouselOverlay from "./components/CarouselOverlay/CarouselOverlay";
import Container from "react-bootstrap/Container";

const App: FC = () => (
  <div style={{ backgroundColor: "#cccccc" }}>
    <NavigationBar />
    <ImageCarousel
      overlayText={
        // Overlay Text for the Image Carouel at the beginning of the page.
        <CarouselOverlay>
          {/* Animation for heading */}
          <motion.h1
            initial={{ opacity: 0, translateY: 15 }}
            animate={{ opacity: 100, translateY: 0 }}
            transition={{ duration: 0.5 }}
            className="display-1"
          >
            Family Imaging of South Texas
          </motion.h1>
          {/* Animation for tagline */}
          <motion.h2
            initial={{ opacity: "0%" }}
            animate={{ opacity: "100%" }}
            transition={{ duration: 0.5 }}
            className="py-1"
          >
            Advanced MRI Imaging utilizing the power of AI to deliver rapid
            diagnosis.
          </motion.h2>
        </CarouselOverlay>
      }
    />
    <Container>
      <Home />
      <Services />
      <Footer />
    </Container>
  </div>
);

export default App;
