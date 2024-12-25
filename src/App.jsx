import ResponsiveCarousel from "./components/ResponsiveCarousel";
import Navibar from "./components/NaviBar";
import Home from "./Pages/Home";
import Container from "react-bootstrap/Container";

export default function App() {
  return (
    <>
      <Navibar />
      <ResponsiveCarousel />
      <Container fluid className="text-center">
        <Home />
      </Container>
    </>
  );
}
