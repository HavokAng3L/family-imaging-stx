import { FC } from "react";
import MapComponent from "../components/Map/MapComponent";

const Contact: FC = () => (
  <section id="contact" className="px-3 text-center border-top">
    <h2 className="fw-bold display-4">Contact Us</h2>
    <div
      style={{
        backgroundColor: "hsl(203, 96%, 20%)",
        borderColor: "#949292",
      }}
      className="border border-2 rounded shadow mt-3 d-flex justify-content-evenly align-items-center flex-column-reverse flex-md-row p-4"
    >
      <MapComponent mapLatitude={26.267111} mapLongitude={-98.199783} />
      {/* Contact Info/Address */}
      <div className="text-center text-white d-flex flex-column align-items-center justify-content-center">
        <div className="bg-primary border border-2 rounded px-4">
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
