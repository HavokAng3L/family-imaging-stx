import { FC } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ListData from "../../../assets/ListData/ListData";

const ListSection: FC = () => (
  <ListGroup>
    {ListData.map((item, index) => {
      return (
        <ListGroup.Item key={index}>
          <span>{item}</span>
        </ListGroup.Item>
      );
    })}
  </ListGroup>
);

export default ListSection;
