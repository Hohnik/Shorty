const locationFile = window.location.href.split('/').pop();
const extractedTool = locationFile.split('.')[0];

fetch(`?./${extractedTool}.json`)
.then((response) => response.json())
.then((data) => {
  const keys = document.querySelectorAll("keyboard-key");

  for (const key of keys) {
    if (key.id in data) key.setAttribute("data-shortcuts", JSON.stringify(data[key.id]));
  }
})
.catch((error) => console.error(error));
