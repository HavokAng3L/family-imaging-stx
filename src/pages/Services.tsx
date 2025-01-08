import { FC } from "react";

import CardSection from "../components/layout/CardSection/CardSection";
import ListSection from "../components/layout/ListSection/ListSection";
import { CardData } from "../assets/CardData/CardData";

const Services: FC = () => (
  <section id="services">
    <h2>Our Services</h2>
    <h3>Imaging Services</h3>
    <p>
      We specialize in a wide range of MRI imaging services to meet your
      healthcare needs.
    </p>
    {/* TODO: Create a separate layout component for the cards and list */}
    {/* Accepts an array of CardObjects */}
    <CardSection cardList={CardData} />
    <h3>We Care About Your Health</h3>
    <p>
      Our mission is to combine compassionate care and cutting-edge technology
      to provide rapid and accurate results. We are dedicated to providing our
      patients with the best experience and clearest results possible.
    </p>
    <ListSection />
  </section>
);

export default Services;
