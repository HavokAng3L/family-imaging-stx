import { FC } from "react";

import CardSection from "../components/layout/CardSection/CardSection";
import ListSection from "../components/layout/ListSection/ListSection";
import { CardData } from "../assets/CardData/CardData";

const Services: FC = () => (
  <section id="services" className="px-2 text-center">
    <h2 className="fw-bold display-4">Our Services</h2>
    <div className="border-top" style={{ paddingBottom: "2rem" }}>
      <h3 className="display-6">Imaging Services</h3>
      <h4 className="">
        We specialize in a wide range of MRI imaging services to meet your
        healthcare needs.
      </h4>
      {/* TODO: Create a separate layout component for the cards and list */}
      {/* Accepts an array of CardObjects */}
      <CardSection CardList={CardData} />
    </div>
    <div className="border-top" style={{ paddingBottom: "2rem" }}>
      <h3 className="display-6">We Care About Your Health</h3>
      <p className="">
        Our mission is to combine compassionate care and cutting-edge technology
        to provide rapid and accurate results. We are dedicated to providing our
        patients with the best experience and clearest results possible.
      </p>
      <ListSection />
    </div>
  </section>
);

export default Services;
