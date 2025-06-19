import { FC } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { PricingCardObject } from "../../../types/types";
import CardComponent from "../../Card/CardComponent";

// Defines the props this component will accept.
interface PricingCardProps {
  CardList: Array<PricingCardObject>;
}

const PriceSection: FC<PricingCardProps> = ({ CardList }) => (
  <Row className="">
    {/* Extracted each field from the objects witin PricingCardObject */}
    {CardList.map(
      (
        {
          productName,
          productDescription,
          productSpecifics,
          productUpcoming,
          productPricing,
        },
        index
      ) => (
        <Col key={index}>
          <CardComponent
            CardBody={productSpecifics}
            CardTitle={productName}
            CardSubHeading={productDescription}
            CardPricing={productPricing}
            upcoming={productUpcoming}
          />
        </Col>
      )
    )}
  </Row>
);
export default PriceSection;
