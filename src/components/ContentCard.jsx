import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";

import GenerateImages from "../APIs/GenerateImages";

export default ContentCard = ({ cardTitle }) => {
  const [imageURL, setImageURL] = useState("");
  useEffect(() => {
    GenerateImages().then((imgURL) => {
      setImageURL(imgURL);
    });
  }, []);
  return (
    <>
      <Card style={{ width: "18rem", margin: "1rem" }}>
        <Card.Img />
        <Card.Body>
          <Card.Title>{cardTitle}</Card.Title>
          <Card.Img src={imageURL} />
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            ipsam.
          </Card.Text>
          <Button variant="primary">Learn More.</Button>
        </Card.Body>
      </Card>
    </>
  );
};
