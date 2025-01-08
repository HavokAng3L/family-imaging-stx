import { FC, ReactNode } from "react";
import Container from "react-bootstrap/Container";

interface CarouselOverlayChildren {
  children: ReactNode;
}

const CarouselOverlay: FC<CarouselOverlayChildren> = ({ children }) => (
  <Container
    fluid
    className="d-flex flex-column align-items-center justify-content-center text-light position-absolute top-0 left-0 z-1 h-100 w-100 bg-black bg-opacity-25"
  >
    {children}
  </Container>
);

export default CarouselOverlay;
