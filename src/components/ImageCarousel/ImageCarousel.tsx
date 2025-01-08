import { FC, ReactNode } from "react";
import imageList from "../../assets/images/ImageList";

import Carousel from "react-bootstrap/Carousel";

interface ImageCarouselProps {
  overlayText: ReactNode;
}

const images: Array<string> = imageList(5);

const ImageCarousel: FC<ImageCarouselProps> = ({ overlayText }) => (
  <section className="position-relative">
    {overlayText}
    <Carousel slide indicators={false} controls={false} interval={3000}>
      {images.map((image, imageIndex) => {
        return (
          <Carousel.Item key={imageIndex}>
            <img
              src={image}
              style={{
                objectFit: "cover",
                objectPosition: "center",
                width: "100%",
                minHeight: "100vh",
              }}
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  </section>
);

export default ImageCarousel;
