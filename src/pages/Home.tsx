import { FC } from "react";
import Marquee from "react-fast-marquee";
import Container from "react-bootstrap/Container";

// 3.9.2025: Considering redo of this section
const Home: FC = () => (
  <section id="home" className="">
    <Container className="min-vh-100 d-flex flex-column flex-lg-row justify-content-center align-items-center">
      <div className="me-lg-2 py-2">
        <img
          // ON BUILDS, reference only the directory of where the static items are stored
          // IN THIS CASE, "images" stores the images that will be static, therefore reference the directory where they are stored.
          src="images/FAMIMG_BACK.jpg"
          alt=""
          className="img-fluid rounded"
        />
      </div>
      <div className="">
        <h2 className="fw-bold display-4">
          Trust our Family to Care for Yours
        </h2>
        <p className="fw-bold">
          Family Imaging of South Texas is dedicated to providing safe, timely,
          cost-effective, and high quality medical imaging services to the
          residents of the Rio Grande Valley.
        </p>
        <p className="fw-bold">
          Our mission is to provide exceptional care through teamwork,
          compassion, patient-centered practices and continuous innovation. At
          Family Imaging of South Texas, we pride ourselves on providing the
          most advanced imaging services with a patient-first approach.
        </p>
        <p className="fw-bold">
          Our team of highly skilled radiologists and technologists are
          committed to providing you with the most accurate MRI imaging in a
          comfortable and caring environment. Whether you or your family needs
          an x-ray, ultrasound or full body MRI, you can trust our family to
          provide the highest standard of care.
        </p>

        <Marquee>
          <h2 className="px-2 fw-bold display-6">
            Schedule your MRI Scan Today!
          </h2>
        </Marquee>
      </div>
    </Container>
  </section>
);

export default Home;
