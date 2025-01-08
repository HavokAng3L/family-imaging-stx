import { FC } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CardObject } from "../../../types/types";
import CardComponent from "../../Card/CardComponent";

interface CardSectionProps {
  cardList: Array<CardObject>;
}

const CardSection: FC<CardSectionProps> = ({ cardList }) => (
  <Row xs={1} md={4} className="g-4">
    {cardList.map((cardItem, index) => (
      <Col key={index}>
        <CardComponent cardTitle={cardItem.title} cardIndex={index}>
          {cardItem.body}
        </CardComponent>
      </Col>
    ))}
  </Row>
);

export default CardSection;
