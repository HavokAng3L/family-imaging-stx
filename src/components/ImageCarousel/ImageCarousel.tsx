import { FC, ReactNode } from "react";
import ImageOverlay from "../ImageOverlay/ImageOverlay";

// Used for loading placeholder images during development
// import imageList from "../../assets/images/ImageList";

import Carousel from "react-bootstrap/Carousel";

interface ImageCarouselProps {
  overlay: ReactNode;
}

// Stored the placeholder images
// const images: Array<string> = imageList(5);

const ImageCarousel: FC<ImageCarouselProps> = ({ overlay }) => (
  <section className="position-relative vh-100">
    {overlay}
    <Carousel slide indicators={false} controls={false} interval={4000}>
      {/* First Image for Carousel */}
      <Carousel.Item>
        <img
          src={"images/family-imaging-imgcar-2.jpg"}
          style={{
            objectPosition: "center",
            objectFit: "cover",
            width: "100%",
            height: "100vh",
          }}
        />
      </Carousel.Item>
      {/* Second Image for Carousel */}
      <Carousel.Item className="position-relative">
        <img
          src={"images/MRI_UX_THEATRE.jpg"}
          style={{
            objectPosition: "center",
            objectFit: "cover",
            width: "100%",
            height: "100vh",
          }}
        />
        <ImageOverlay OverlayText={"Featuring In-Bore Cinema by UX Platform"} />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={"images/UXIMG1.webp"}
          style={{
            objectPosition: "center",
            objectFit: "cover",
            width: "100%",
            height: "100vh",
          }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={"images/UXIMG2.webp"}
          style={{
            objectPosition: "center",
            objectFit: "cover",
            width: "100%",
            height: "100vh",
          }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <video
          muted
          autoPlay
          loop
          style={{
            objectPosition: "center",
            objectFit: "cover",
            width: "100%",
            height: "100vh",
          }}
        >
          <source src={"video/UXVIDEOEDIT.mp4"} type="video/mp4" />
        </video>
      </Carousel.Item>
    </Carousel>
  </section>
);

export default ImageCarousel;
