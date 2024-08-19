class Key extends HTMLElement {
  constructor() {
    super();
    this.infoDisplay = document.getElementById("shortcut-info");
    this.activeModifier = "None";
    this.pressed = [];
  }

  // Call on element creation
  connectedCallback() {
    this.registerKeyListeners();
    this.addEventListener("mouseover", (e) => {
      this.update(e);
    });
    this.addEventListener("mouseout", (e) => {
      this.update(e);
    });
  }

  registerKeyListeners() {
    document.addEventListener("keydown", (e) => {
      this.pressed.push(e.code);
      this.update(e);
    });

    document.addEventListener("keyup", (e) => {
      this.pressed = this.pressed.filter((key) => key !== e.code);
      this.update(e);
    });
  }

  static get observedAttributes() {
    return ["data-shortcuts"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "data-shortcuts":
        if (newValue == undefined) break;
        if (newValue == null) break;
        this.shortcuts = JSON.parse(newValue);
        this.setKeyLables();
        this.updateColor(new KeyboardEvent("keydown"));
        console.log("attribute changed");
        break;
    }
  }

  update(event) {
    this.updateModifierKey(event);
    this.updateShortcutDetails(event);
    this.setKeyLables();
    this.updateColor(event);
  }

  updateModifierKey(event) {
    const modifier = [];
    if (event.ctrlKey) modifier.push("Control");
    if (event.shiftKey) modifier.push("Shift");
    if (event.altKey) modifier.push("Alt");
    this.activeModifier = modifier.join("_") || "None";
  }

  updateShortcutDetails(event) {
    if (
      (event.type == "keyup" || event.type == "keydown") &&
      this.getAttribute("id") !== event.code
    )
      return;
    if (!this.shortcuts) return;

    const symbol = this.shortcuts?.[this.activeModifier]?.symbol || null;
    const name = this.shortcuts?.[this.activeModifier]?.name || null;
    const info = this.shortcuts?.[this.activeModifier]?.info || null;

    if (!symbol || !name || !info) return;
    this.infoDisplay.innerHTML = `
      <b>(${symbol}) ${name}</b>
      <p>${info}</p>
      `;
  }

  updateColor(e) {
    this.style.backgroundColor = this.shortcuts?.[this.activeModifier]?.color || "white";
    this.style.borderColor = "black";

    if (e.type == "mouseover") this.style.borderColor = "red";
    if (this.id == e.code) {
      this.pressed.forEach((key) => {
        const elem = document.getElementById(key);
        elem.style.borderColor = "red";
      });
    }
  }

  setKeyLables() {
    const symbol = this.shortcuts?.[this.activeModifier]?.symbol || "";

    this.innerHTML = `${symbol}`;
  }
}

customElements.define("keyboard-key", Key);
