// importing bootstrap to be used.
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <>
      <NavBar />
      <Home />
    </>
  );
}
