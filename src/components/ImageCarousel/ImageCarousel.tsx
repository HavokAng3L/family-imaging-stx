import { FC, ReactNode } from "react";

// Used for loading placeholder images during development
// import imageList from "../../assets/images/ImageList";

import Carousel from "react-bootstrap/Carousel";
import Image2 from "../../assets/images/family-imaging-imgcar-2.jpg";

interface ImageCarouselProps {
  overlayText: ReactNode;
}

// Stored the placeholder images
// const images: Array<string> = imageList(5);

const ImageCarousel: FC<ImageCarouselProps> = ({ overlayText }) => (
  <section className="position-relative vh-100">
    {overlayText}
    <Carousel slide indicators={false} controls={false} interval={4000}>
      <Carousel.Item>
        <img
          src={Image2}
          style={{
            objectPosition: "center",
            objectFit: "cover",
            width: "100%",
            height: "100vh",
          }}
        />
      </Carousel.Item>
    </Carousel>
  </section>
);

export default ImageCarousel;
