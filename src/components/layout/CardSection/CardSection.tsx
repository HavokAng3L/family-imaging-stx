import { FC } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CardObject } from "../../../types/types";
import CardComponent from "../../Card/CardComponent";

// Defines the props this component will accept.
interface CardSectionProps {
  CardList: Array<CardObject>;
}

const CardSection: FC<CardSectionProps> = ({ CardList }) => (
  <Row xs={1} md={4} className="g-4">
    {/* Extracted each field from the objects witin CardList */}
    {CardList.map(({ body, imageUrl, title }, index) => (
      <Col key={index}>
        <CardComponent CardBody={body} CardImage={imageUrl} CardTitle={title} />
      </Col>
    ))}
  </Row>
);
export default CardSection;
