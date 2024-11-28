import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import { useEffect } from "react";
import GenerateImages from "../APIs/GenerateImages";

export default ImageSlider = () => {
  // This is for holding an array of image URLs generated
  // from the GenerateImages async function
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    // Pushes 3 image URLs into the imageList array
    for (let i = 0; i < 3; i++) {
      GenerateImages().then((data) => {
        setImageList((prevArray) => [
          ...prevArray,
          {
            url: data,
            id: imageList.length++,
          },
        ]);
      });
    }
  }, []);

  return (
    <Carousel>
      {/* Returns a new array */}
      {imageList.map((image) => {
        return (
          <Carousel.Item key={image.id}>
            <img
              src={image.url}
              style={{
                width: "100%",
                minHeight: "50dvh",
                maxHeight: "70dvh",
                objectFit: "cover",
              }}
            />
            <Carousel.Caption>
              <h2>Family Imaging of South Texas</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                vel veniam debitis fuga! Autem voluptates, dolorem, sed,
                consequatur sapiente impedit labore dolore maiores eligendi
                asperiores nemo hic perspiciatis beatae ducimus.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
