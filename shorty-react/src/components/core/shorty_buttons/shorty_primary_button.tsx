import { Link, To } from "react-router-dom";
import "./styles.css";

function ShortyPrimaryButton({ title, onClick, to }: { title: String; onClick?: VoidFunction; to?: To }) {
  if (to) {
    return (
      <Link to={to} className={"link-button link-button-primary"}>
        {title}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={"link-button link-button-primary"}>
      {title}
    </button>
  );
}

export default ShortyPrimaryButton;
