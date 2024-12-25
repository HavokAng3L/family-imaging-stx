import Button from "react-bootstrap/Button";

function NavButton(props) {
  return (
    <Button variant={props.variant} href={props.url} target="_blank">
      {props.text}
    </Button>
  );
}

export default NavButton;
