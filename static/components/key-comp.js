import { LitElement, html, css } from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

class Key extends LitElement {
  static properties = {
    shortcut: { type: Object },
  };

  constructor() {
    super();
    this.infoDisplay = document.getElementById("shortcut-info");

    this.addEventListener("mouseenter", (e) => {
      if (
        this.shortcut?.[window.activeModifier]?.["symbol"] &&
        this.shortcut?.[window.activeModifier]?.["name"] &&
        this.shortcut?.[window.activeModifier]?.["info"]
      ) {
        this.infoDisplay.innerHTML =
          `<b>(${this.shortcut?.[window.activeModifier]?.["symbol"] || " ._."}) ${this.shortcut?.[window.activeModifier]?.["name"] || "... there is nothing here."}</b>
            <p>${this.shortcut?.[window.activeModifier]?.["info"] || ""}</p>` || "";
      }
      window.activeKeys.push(this);
      window.activeKeys.forEach(
        (key) =>
          (key.style.backgroundColor =
            this.shortcut?.[window.activeModifier]?.["color"] || "var(--color-grey)"),
      );
    });

    this.addEventListener("mouseleave", (e) => {
      window.activeKeys = window.activeKeys.filter((key) => key !== this);

      this.style.backgroundColor = "var(--color-black)";
    });

    if (
      [
        "ShiftLeft",
        "ShiftRight",
        "ControlLeft",
        "ControlRight",
        "AltLeft",
        "AltRight",
        "MetaLeft",
        "MetaRight",
      ].includes(this.id)
    ) {
      this.addEventListener("click", (e) => {
        console.log("mod");
        if (window.activeKeys.includes(this))
          window.activeKeys = window.activeKeys.filter((key) => {
            key !== this;
          });
        else window.activeKeys.push(this);
        window.activeModifier = this.id;
        this.style.backgroundColor = "white";
      });
    }
  }

  render() {
    this.style.borderColor =
      this.shortcut?.[window.activeModifier]?.["color"] || "var(--color-grey)";

    let symbol = this.shortcut?.[window.activeModifier]?.["symbol"];
    return html`<span>${symbol}</span>`;
  }
}

customElements.define("key-comp", Key);
