import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

export default function ResponsiveCarousel() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <Image
            src="https://picsum.photos/2560/1440.webp?random=1"
            style={{
              minWidth: "100%",
              maxHeight: "60dvh",
              objectFit: "cover",
              position: "center",
            }}
          />
          <Carousel.Caption>
            <h2>Testing</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src="https://picsum.photos/2560/1440.webp?random=2"
            style={{
              minWidth: "100%",
              maxHeight: "60dvh",
              objectFit: "cover",
              position: "center",
            }}
          />
          <Carousel.Caption>
            <h2>Testing</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src="https://picsum.photos/2560/1440.webp?random=3"
            style={{
              minWidth: "100%",
              maxHeight: "60dvh",
              objectFit: "cover",
              position: "center",
            }}
          />
          <Carousel.Caption>
            <h2>Testing</h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
