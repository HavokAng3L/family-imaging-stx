import { FC } from "react";

import Home from "./pages/Home";
import Services from "./pages/Services";
import NavigationBar from "./components/layout/NavigationBar/NavigationBar";
import Footer from "./components/layout/Footer/Footer";
import ImageCarousel from "./components/ImageCarousel/ImageCarousel";
import CarouselOverlay from "./components/CarouselOverlay/CarouselOverlay";
import Container from "react-bootstrap/Container";

const App: FC = () => (
  <div className="bg-light">
    <NavigationBar />
    <ImageCarousel
      overlayText={
        // Overlay Text for the Image Carouel at the beginning of the page.
        <CarouselOverlay>
          <h1 className="display-1">Family Imaging of South Texas</h1>
          <h2 className="py-1">
            Advanced MRI Imaging utilizing the power of AI to deliver rapid
            diagnosis
          </h2>
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
