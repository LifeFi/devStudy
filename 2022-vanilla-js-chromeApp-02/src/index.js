const body = document.querySelector("body");
const h1 = document.createElement("h1");
h1.innerText = "Hello!";
h1.style.color = "white";
body.prepend(h1);

const FIRST_WIDTH = "650";
const SECOND_WIDTH = "950";

function onResizeWindow() {
  const currentWidth = window.innerWidth;
  if (currentWidth < FIRST_WIDTH) {
    body.style.backgroundColor = "#2E8CD5";
  } else if (FIRST_WIDTH <= currentWidth && currentWidth < SECOND_WIDTH) {
    body.style.backgroundColor = "#904EAC";
  } else if (SECOND_WIDTH <= currentWidth) {
    body.style.backgroundColor = "#EEBC12";
  }
}

window.addEventListener("resize", onResizeWindow);
onResizeWindow();
