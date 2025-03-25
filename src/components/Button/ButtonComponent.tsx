import { FC, ReactNode } from "react";
import Button from "react-bootstrap/Button";

interface ButtonChildren {
  children: ReactNode;
  large: boolean;
  linkTo: string;
}

const ButtonComponent: FC<ButtonChildren> = ({
  children,
  large = false,
  linkTo,
}) => {
  return (
    <Button
      size={large ? "lg" : "sm"}
      href={linkTo}
      style={{ backgroundColor: "hsl(203, 96%, 20%)" }}
    >
      {children}
    </Button>
  );
};

export default ButtonComponent;
