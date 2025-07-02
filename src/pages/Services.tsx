import { FC } from "react";

import CardSection from "../components/layout/CardSection/CardSection";
import PriceSection from "../components/layout/PriceSection/PriceSection";
import ListSection from "../components/layout/ListSection/ListSection";
import { ServicesData } from "../assets/CardData/ServicesData";
import { PricingData } from "../assets/CardData/PricingData";

const Services: FC = () => (
  <section
    id="services"
    className="px-3 text-center border-top d-flex flex-column"
  >
    <h2 className="fw-bold display-4 fw-bold">Our Services</h2>
    <div
      style={{
        paddingBottom: "2rem",
        backgroundColor: "hsl(203, 96%, 20%)",
        borderColor: "#949292",
      }}
      className="border border-2 rounded shadow mt-3 px-2"
    >
      <h4 className="text-white">
        We specialize in a wide range of MRI imaging services to meet your
        healthcare needs.
      </h4>
      {/* Accepts an array of CardObjects */}
      <CardSection CardList={ServicesData} />
    </div>
    <div
      style={{
        paddingBottom: "2rem",
        backgroundColor: "rgba(255, 255, 255, 0.25)",
      }}
      className="border border-2 rounded shadow mt-3 px-3"
    >
      <h4>
        We provide top-quality services at competitive prices, ensuring great
        value without compromising excellence.
      </h4>
      <div
        style={{ height: "75vh" }}
        className="d-flex flex-column justify-content-evenly align-items-center flex-md-row"
      >
        <div
          className=" rounded px-3 m-2 order-2 order-md-0 d-flex flex-column justify-content-between h-50"
          style={{
            borderColor: "#949292",
          }}
        >
          <div
            style={{ backgroundColor: "hsl(203, 96%, 20%)" }}
            className="text-white fs-4 rounded p-3"
          >
            Early Detection of Potential Health Issues
          </div>
          <div
            style={{ backgroundColor: "hsl(203, 96%, 20%)" }}
            className="text-white fs-4 rounded p-3"
          >
            Comprehensive Imaging for a Complete Health Overview
          </div>
        </div>
        <PriceSection CardList={PricingData} />
        <div
          className=" rounded px-3 m-2 order-2 order-md-0 d-flex flex-column justify-content-between"
          style={{
            borderColor: "#949292",
            height: "500px",
          }}
        >
          <div
            style={{ backgroundColor: "hsl(203, 96%, 20%)" }}
            className="text-white fs-4 rounded p-3"
          >
            AI-Enhanced Quality for Accurate Results
          </div>
          <div
            style={{ backgroundColor: "hsl(203, 96%, 20%)" }}
            className="text-white fs-4 rounded p-3"
          >
            Non-Invasive & Safe with No Radiation Exposure
          </div>
        </div>
      </div>
    </div>

    <div
      style={{ paddingBottom: "2rem", backgroundColor: "hsl(203, 96%, 20%)" }}
      className="border border-2 rounded shadow mt-3"
    >
      <h3 className="display-6 text-white fw-bold">
        We Care About Your Health
      </h3>
      <h4 className="text-white">
        Our mission is to combine compassionate care and cutting-edge technology
        to provide rapid and accurate results.
      </h4>
      <ListSection />
    </div>
  </section>
);

export default Services;
