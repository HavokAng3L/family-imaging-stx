import { FC } from "react";

import CardSection from "../components/layout/CardSection/CardSection";
import PriceSection from "../components/layout/PriceSection/PriceSection";
import ListSection from "../components/layout/ListSection/ListSection";
import { ServicesData } from "../assets/CardData/ServicesData";
import { PricingData } from "../assets/CardData/PricingData";

const Services: FC = () => (
  <section id="services" className="px-2 text-center border-top">
    <h2 className="fw-bold display-4 fw-bold">Our Services</h2>
    <div
      style={{
        paddingBottom: "2rem",
        backgroundColor: "hsl(203, 96%, 20%)",
        borderColor: "#949292",
      }}
      className="border border-2 rounded shadow mt-3"
    >
      <h3 className="display-6 text-white fw-bold">Imaging</h3>
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
      className="border border-2 rounded shadow mt-3"
    >
      <h4>
        We provide top-quality services at competitive prices, ensuring great
        value without compromising excellence.
      </h4>
      <PriceSection CardList={PricingData} />
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
