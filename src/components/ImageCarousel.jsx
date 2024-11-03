import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import { useState } from "react";

import { useEffect } from "react";
import { CarouselCaption } from "react-bootstrap";

export default ImageCarousel = () => {
  const IMAGE_COUNT = 4;
  // Allows me to keep an array of images so that each image is
  // randomly generated.
  // DEMO PURPOSES ONLY
  const [imageArray, setImageArray] = useState([]);

  // useEffect for fetching images for the carousel
  // THIS IS FOR DEMO PURPOSES ONLY.
  // TODO: CHANGE TO STATIC IMAGES PROVIDED.
  useEffect(() => {
    async function getImage() {
      const image = await fetch("https://picsum.photos/400");
      setImageArray((prevImageArray) => [
        ...prevImageArray,
        { id: imageArray.length++, image: image.url, caption: "Lorem" },
      ]);
    }
    // This loop allows me to add images to the array dynamically
    for (let i = 0; i < IMAGE_COUNT; i++) {
      getImage();
    }
  }, []);

  return (
    <Carousel>
      {imageArray.map((i) => {
        return (
          <Carousel.Item>
            <Image key={i.id} src={i.image} />
            <CarouselCaption>{i.caption}</CarouselCaption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
