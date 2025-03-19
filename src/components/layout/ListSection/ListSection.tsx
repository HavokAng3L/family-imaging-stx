import { FC } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import ListData from "../../../assets/ListData/ListData";

const ListSection: FC = () => (
  <Container>
    <ListGroup className="px-2">
      {ListData.map((item, index) => {
        return (
          <ListGroup.Item
            key={index}
            style={{ backgroundColor: "hsl(350, 84%, 30.00%)" }}
          >
            <span className="text-white">{item}</span>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  </Container>
);

export default ListSection;
