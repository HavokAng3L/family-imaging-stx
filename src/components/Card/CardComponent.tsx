import { FC, ReactNode } from "react";
import Card from "react-bootstrap/Card";
import { CardObject } from "../../types/types";
import getImage from "../../services/ImageAPI";

interface CardComponentProps {
  cardTitle: string;
  cardIndex: number;
  children: ReactNode & CardObject["body"];
}

const CardComponent: FC<CardComponentProps> = ({
  cardTitle = "Default",
  cardIndex,
  children,
}) => (
  <Card className="text-center" style={{ minHeight: "40em" }}>
    <Card.Img variant="top" src={getImage(200, 200, cardIndex)} />
    <Card.Body>
      <Card.Title>{cardTitle}</Card.Title>
      <Card.Text>
        {children.map((item: string) => (
          <p>{item}</p>
        ))}
      </Card.Text>
    </Card.Body>
  </Card>
);

export default CardComponent;
