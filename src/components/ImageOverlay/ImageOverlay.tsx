import { FC } from "react";

interface ImageOverlayProps {
  OverlayText: string;
}

// Component allows for adding custom text over an individual image.

// TODO: props will be text, size, shape & primary/secondary colors.
const ImageOverlay: FC<ImageOverlayProps> = ({ OverlayText }) => (
  <div className="d-flex flex-column justify-content-end align-items-end position-absolute top-0 left-0 w-100 h-100">
    <h4 className="fw-bold display-2">{OverlayText}</h4>
  </div>
);

export default ImageOverlay;
