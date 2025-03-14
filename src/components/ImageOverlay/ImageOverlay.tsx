import { FC } from "react";

interface ImageOverlayProps {
  OverlayText: string;
}

// Component allows for adding custom text over an individual image.

// TODO: props will be text, size, shape & primary/secondary colors.
const ImageOverlay: FC<ImageOverlayProps> = ({ OverlayText }) => (
  <div className="position-absolute w-100 h-100 top-0 left-0">
    <div
      style={{
        position: "absolute",
        width: "200px",
        height: "350px",
        bottom: "20px",
        right: "20%",
        borderTopRightRadius: "5px",
        borderTopLeftRadius: "5px",
      }}
    >
      <h4
        className="fw-bold"
        style={{ position: "absolute", color: "white", zIndex: 6 }}
      >
        {OverlayText}
      </h4>
    </div>
  </div>
);

export default ImageOverlay;
