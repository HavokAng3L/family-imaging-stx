import { FC, ReactNode } from "react";
import Button from "react-bootstrap/Button";

interface ButtonChildren {
  children: ReactNode;
  large: boolean;
}

const ButtonComponent: FC<ButtonChildren> = ({ children, large = false }) => (
  <Button size={large ? "lg" : "sm"}>{children}</Button>
);

export default ButtonComponent;
