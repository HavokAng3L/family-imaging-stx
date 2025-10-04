import { FC } from "react";
import Marquee from "react-fast-marquee";
import { InsuranceImageArray } from "../../assets/ImageList/ImageList";

const InsuranceCarousel: FC = () => {
  let insuranceImageIcons = InsuranceImageArray.map((image) => (
    <img src={image.source} style={{ width: "225px", marginRight: "200px" }} />
  ));

  return (
    <Marquee className="position-absolute z-2" style={{ top: 150 }}>
      {insuranceImageIcons}
    </Marquee>
  );
};

export default InsuranceCarousel;
