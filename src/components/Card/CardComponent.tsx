import { FC } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

// Defines the properties the component WILL accept.
interface CardComponentProps {
  CardTitle: string;
  CardBody: Array<string>;
  CardImage: string;
}

// 3.8.2025: Redo Card Component
const CardComponent: FC<CardComponentProps> = ({
  CardTitle,
  CardBody,
  CardImage,
}) => (
  <Card className="shadow">
    <Card.Body>
      <Card.Title>{CardTitle}</Card.Title>
      <Card.Img
        src={CardImage}
        width={"250px"}
        height={"250px"}
        style={{ objectFit: "cover" }}
        alt={CardTitle + " Image"}
      />
    </Card.Body>
    <ListGroup className="list-group-flush">
      {CardBody.map((item, index) => (
        <ListGroup.Item key={index}>{item}</ListGroup.Item>
      ))}
    </ListGroup>
  </Card>
);

export default CardComponent;
