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
  <Row xs={1} md={2} lg={4} className="g-4 px-2 d-flex justify-content-center">
    {/* Extracted each field from the objects witin PricingCardObject */}
    {CardList.map(
      (
        { productName, productDescription, productSpecifics, productUpcoming },
        index
      ) => (
        <Col key={index}>
          <CardComponent
            CardBody={productSpecifics}
            CardTitle={productName}
            CardSubHeading={productDescription}
            upcoming={productUpcoming}
          />
        </Col>
      )
    )}
  </Row>
);
export default PriceSection;
