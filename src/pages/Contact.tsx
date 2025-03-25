import { FC } from "react";
import MapComponent from "../components/Map/MapComponent";

const Contact: FC = () => (
  <section id="contact" className="px-2 text-center border-top h-auto">
    <h2 className="fw-bold display-4">Contact Us</h2>
    <div
      style={{
        paddingBottom: "2rem",
        backgroundColor: "hsl(203, 96%, 20%)",
        borderColor: "#949292",
        height: "100vh",
      }}
      className="border border-2 rounded shadow mt-3 d-flex flex-column flex-md-row justify-content-between align-items-center"
    >
      <MapComponent mapLatitude={26.267111} mapLongitude={-98.199783} />
      <div className="text-center w-100 text-white d-flex flex-column align-items-center justify-content-center">
        <div
          className="bg-primary border border-2 rounded my-2"
          style={{ width: "80%", padding: "15px" }}
        >
          <h3>Family Imaging of South Texas</h3>
          <h4>4161 Crosspoint Blvd, Edinburg, TX 78539</h4>
          <ul className="list-unstyled">
            <li>
              <b>OFFICE</b>:{" "}
              <a
                href="tel:956-420-9536"
                className="text-decoration-none text-white"
              >
                <i>(956) 420-9536</i>
              </a>
            </li>
            <li>
              <b>FAX</b>: (956) 420-9538
            </li>
            <li>
              <b>E-MAIL</b>:
              <a
                href="mailto:fdesk@familyimaging.net"
                className="text-decoration-none text-white"
              >
                {" "}
                <i>fdesk@familyimaging.net</i>
              </a>
            </li>
          </ul>
          <h3>Hours</h3>
          <ul className="list-unstyled">
            <li>
              <b>Mon - Fri</b>: 8:00 AM - 5:00 PM
            </li>
            <li>
              <b>Sat - Sun</b>: By Appointment
            </li>
          </ul>
          <p className="fs-3">
            <b>After Hours Available!</b>
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;

/*
 */
