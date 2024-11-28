// importing bootstrap to be used.
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";

export default App = () => {
  return (
    <main>
      <NavBar />
      <Home />
    </main>
  );
};
