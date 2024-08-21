window.activeModifier = "None";
window.activeKeys = [];

fetch("./static/tools/vim/shortcuts.json")
  .then((response) => response.json())
  .then((data) => {
    const keys = document.querySelectorAll("key-comp");

    for (const key of keys) {
      if (key.id in data) {
        key.setAttribute("shortcut", JSON.stringify(data[key.id]));
      }
    }

    document.addEventListener("keydown", (e) => {
      pressedKey = document.getElementById(e.code);
      updateModifierKey(e);
      updateAllKeys(e);

      document.getElementById("shortcut-info").innerHTML =
        `<b>(${data?.[pressedKey.id]?.[window.activeModifier]?.["symbol"] || " ._."}) ${data?.[pressedKey.id]?.[window.activeModifier]?.["name"] || "... there is nothing here."}</b>
            <p>${data?.[pressedKey.id]?.[window.activeModifier]?.["info"] || ""}</p>` || "";

      window.activeKeys.push(pressedKey);
      window.activeKeys.forEach(
        (key) =>
          (key.style.backgroundColor =
            data?.[key.id]?.[window.activeModifier]?.["color"] || "var(--color-grey)"),
      );
    });

    document.addEventListener("keyup", (e) => {
      updateModifierKey(e);
      updateAllKeys(e);

      pressedKey = document.getElementById(e.code);
      pressedKey.innerHTML = "W";
      window.activeKeys = window.activeKeys.filter((key) => key !== pressedKey);
      pressedKey.style.backgroundColor = "var(--color-black)";
    });

    const updateModifierKey = (e) => {
      if (e.ctrlKey) window.activeModifier = "Control";
      else if (e.shiftKey) window.activeModifier = "Shift";
      else if (e.altKey) window.activeModifier = "Alt";
      else if (e.metaKey) window.activeModifier = "Meta";
      else window.activeModifier = "None";
    };

    const updateAllKeys = (e) => {
      if (
        e.code == "ControlLeft" ||
        e.code == "ControlRight" ||
        e.code == "ShiftLeft" ||
        e.code == "ShiftRight" ||
        e.code == "AltLeft" ||
        e.code == "AltRight" ||
        e.code == "MetaLeft" ||
        e.code == "MetaRight"
      ) {
        document.querySelectorAll("key-comp").forEach((key) => {
          key.style.borderColor =
            data?.[key.id]?.[window.activeModifier]?.["color"] || "var(--color-gray)";

          const shadowRoot = key.shadowRoot;
          shadowRoot.innerHTML = data?.[key.id]?.[window.activeModifier]?.["symbol"] || "";
        });
      }
    };
  })
  .catch((error) => console.error(error));
