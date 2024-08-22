import { Link, To } from "react-router-dom";
import "./styles.css";

function ShortyButton({ title, onClick, to }: { title: String; onClick?: VoidFunction; to?: To }) {
  if (to) {
    return (
      <Link to={to} className={"link-button"}>
        {title}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={"link-button"}>
      {title}
    </button>
  );
}

export default ShortyButton;
