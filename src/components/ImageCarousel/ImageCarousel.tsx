import { FC, ReactNode } from "react";

// Used for loading placeholder images during development
// import imageList from "../../assets/images/ImageList";

import Carousel from "react-bootstrap/Carousel";
import ImageOverlay from "../ImageOverlay/ImageOverlay";
import Image1 from "../../assets/images/MRI_UX_THEATRE.jpg";
import Image2 from "../../assets/images/family-imaging-imgcar-2.jpg";
import Image3 from "../../assets/images/UXIMG1.webp";
import Image4 from "../../assets/images/UXIMG2.webp";
import MRIVideo from "../../assets/video/UXVIDEO.mp4";

interface ImageCarouselProps {
  overlayText: ReactNode;
}

// Stored the placeholder images
// const images: Array<string> = imageList(5);

const ImageCarousel: FC<ImageCarouselProps> = ({ overlayText }) => (
  <section className="position-relative vh-100">
    {overlayText}
    <Carousel slide indicators={false} controls={false} interval={4000}>
      {/* First Image for Carousel */}
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
      {/* Second Image for Carousel */}
      <Carousel.Item className="position-relative">
        <img
          src={Image1}
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
          src={Image3}
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
          src={Image4}
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
          <source src={MRIVideo} type="video/mp4" />
        </video>
      </Carousel.Item>
    </Carousel>
  </section>
);

export default ImageCarousel;
