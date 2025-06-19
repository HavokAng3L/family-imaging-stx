import { FC } from "react";
import { motion } from "motion/react";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

// Defines the properties the component WILL accept.
interface CardComponentProps {
  CardTitle: string;
  CardBody: Array<Array<string>>;
  CardImage?: string;
  CardSubHeading?: string;
  CardPricing?: number;
  upcoming?: boolean;
}

// 3.8.2025: Redo Card Component
// 3.13.2025: Additions Made to Card Component to add pricing and subheading
// TODO: Reference Bootstrap Card API
const CardComponent: FC<CardComponentProps> = ({
  CardTitle,
  CardBody,
  CardImage,
  CardSubHeading,
  CardPricing,
  upcoming,
}) => {
  const items = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4,
      },
    },
    hidden: {
      opacity: 0,
      y: -100,
    },
  };

  const body = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -50 },
  };

  return (
    <motion.div initial="hidden" whileInView="visible" variants={body}>
      <Card
        className="border-3"
        style={{
          borderColor: "hsl(203, 96%, 20%)",
          marginTop: "5rem",
          marginBottom: "3rem",
        }}
      >
        <Card.Body>
          <div
            className="rounded p-2 text-white"
            style={{ backgroundColor: "hsl(203, 96%, 20%)" }}
          >
            <Card.Title className="fs-4 fw-bold p-2">{CardTitle}</Card.Title>
            {upcoming ? <p className="fw-bold">(COMING SOON)</p> : null}
          </div>
          {/* This conditional checks if CardImage has been passed down as a prop */}

          {CardImage ? (
            <Card.Img
              src={CardImage}
              width={"250px"}
              height={"250px"}
              style={{ objectFit: "cover" }}
              alt={CardTitle + " Image"}
              className="mt-3"
            />
          ) : null}
        </Card.Body>

        <motion.div variants={items}>
          {CardSubHeading ? <Card.Header>{CardSubHeading}</Card.Header> : null}
          <ListGroup>
            {CardBody.map((item, index) => (
              <div
                key={index}
                className="p-3"
                style={{ backgroundColor: "hsl(203, 96%, 20%)" }}
              >
                {item.map((item: string, index: number) => (
                  <ListGroup.Item key={index} className="fw-bold shadow-lg">
                    {item}
                  </ListGroup.Item>
                ))}
              </div>
            ))}
          </ListGroup>
        </motion.div>

        {/* This conditional checks if CardPricing has been passed down as a prop from the parent. */}
        {CardPricing ? (
          <Card.Footer className="fw-bold display-6">
            ${CardPricing}
          </Card.Footer>
        ) : null}
      </Card>
    </motion.div>
  );
};

export default CardComponent;
