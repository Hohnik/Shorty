class Key extends HTMLElement {
  constructor() {
    super();
    this.infoDisplay = document.getElementById("shortcut-info");
    this.activeModifier = "None";
    this.lastActiveModifier = "None";
  }

  // Call on element creation
  connectedCallback() {
    this.registerKeyListeners();
    this.addEventListener("mouseover", (e) => {
      this.update(e);
      this.setActiveColor();
    });
    this.addEventListener("mouseout", (e) => {
      this.update(e);
    });
  }

  registerKeyListeners() {
    document.addEventListener("keydown", (event) => {
      this.update(event);
      if (this.getAttribute("id") !== event.code) return;
      this.setActiveColor(event);
    });

    document.addEventListener("keyup", (event) => {
      this.update(event);
      if (this.getAttribute("id") !== event.code) return;
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
        this.resetColor();
        break;
    }
  }

  update(event) {
    this.updateModifierKey(event);
    this.updateShortcutDetails(event);
    this.setKeyLables();
    this.resetColor();
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

  setActiveColor() {
    this.style.backgroundColor = "lightpink";
  }

  resetColor() {
    this.style.backgroundColor = this.shortcuts?.[this.activeModifier].color || "white";
  }

  setKeyLables() {
    const symbol = this.shortcuts?.[this.activeModifier]?.symbol || "";

    this.innerHTML = `${symbol}`;
  }
}

customElements.define("keyboard-key", Key);
