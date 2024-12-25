import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

export default function ResponsiveCarousel() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <Image src="https://picsum.photos/2560/1440.webp?random=1" />
          <Carousel.Caption>
            <h2>Testing</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src="https://picsum.photos/2560/1440.webp?random=2" />
          <Carousel.Caption>
            <h2>Testing</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src="https://picsum.photos/2560/1440.webp?random=3" />
          <Carousel.Caption>
            <h2>Testing</h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
