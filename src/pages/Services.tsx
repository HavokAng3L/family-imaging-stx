import { FC } from "react";

import CardSection from "../components/layout/CardSection/CardSection";
import PriceSection from "../components/layout/PriceSection/PriceSection";
import ListSection from "../components/layout/ListSection/ListSection";
import { ServicesData } from "../assets/CardData/ServicesData";
import { PricingData } from "../assets/CardData/PricingData";

const Services: FC = () => (
  <section id="services" className="px-2 text-center">
    <h2 className="fw-bold display-4">Our Services</h2>
    <div className="border-top" style={{ paddingBottom: "2rem" }}>
      <h3 className="display-6">Imaging</h3>
      <h4>
        We specialize in a wide range of MRI imaging services to meet your
        healthcare needs.
      </h4>
      {/* Accepts an array of CardObjects */}
      <CardSection CardList={ServicesData} />
    </div>
    <div className="border-top" style={{ paddingBottom: "2rem" }}>
      <h3 className="display-6">Pricing</h3>
      <h4>
        We provide top-quality services at competitive prices, ensuring great
        value without compromising excellence.
      </h4>
      <PriceSection CardList={PricingData} />
    </div>
    <div className="border-top" style={{ paddingBottom: "2rem" }}>
      <h3 className="display-6">We Care About Your Health</h3>
      <h4 className="">
        Our mission is to combine compassionate care and cutting-edge technology
        to provide rapid and accurate results.
      </h4>
      <ListSection />
    </div>
  </section>
);

export default Services;
