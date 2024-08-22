import ShortyButton from "./core/shorty_buttons/shorty_button";
import ShortyPrimaryButton from "./core/shorty_buttons/shorty_primary_button";

function Navigation() {
  return (
    <nav>
      <h1>Shorty</h1>
      <ul>
        <li>
          <ShortyPrimaryButton to={""} title={"Shortcuts"} />
        </li>
        <li>
          <ShortyButton to={""} title={"Say thanks ❤️"} />
        </li>
        <li>
          <ShortyButton to={""} title={"FAQs"} />
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
