import arcLogo from "../assets/images/tools/arc.jpeg";
import vimLogo from "../assets/images/tools/vim.jpeg";
import keyboard from "../assets/images/keyboard.png";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <header>
        <h1 id={"hero-title"}>
          Find every shortcut
          <br />
          for anything.
        </h1>
        <div id={"hero-cta"}>
          <h2>Start now with</h2>
          <ul id={"hero-tools-suggestion"}>
            <li>
              <Link to={"/vim"}>
                <img src={vimLogo} className={"tool-logo"} />
              </Link>
            </li>
            <li>
              <Link to={"arc"}>
                <img src={arcLogo} className={"tool-logo"} />
              </Link>
            </li>
          </ul>
        </div>
        <img src={keyboard} id={"keyboard-img"} />
      </header>
      <main>
        <section>
          <h2>All Tools</h2>
          <div id={"tools"}>
            <Link to={"/vim"} className={"tool"}>
              <img src={vimLogo} className={"tool-logo"} />
              <div className={"tool-info"}>
                <h3 className={"tool-name"}>Vim</h3>
                <p className={"tool-description"}>
                  Vim is a highly configurable, text-based editor designed for efficient text editing, commonly used by developers and power users for coding
                  and scripting.
                </p>
              </div>
            </Link>
            <Link to={"/arc"} className={"tool"}>
              <img src={arcLogo} className={"tool-logo"} />
              <div className={"tool-info"}>
                <h3 className={"tool-name"}>Arc Browser</h3>
                <p className={"tool-description"}>
                  Arc Browser is a modern, productivity-focused web browser that reimagines browsing with innovative features like a customizable sidebar,
                  built-in tools, and a design-centric interface.
                </p>
              </div>
            </Link>
          </div>
        </section>
        <section>
          <h2>FAQs</h2>
        </section>
      </main>
    </>
  );
}

export default LandingPage;
