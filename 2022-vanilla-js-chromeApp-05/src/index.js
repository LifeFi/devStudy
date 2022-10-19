const myBody = document.querySelector("body");
const myBtn = document.querySelector("body button");

const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

function handleOnClick(event) {
  const color1 = Math.floor(Math.random() * colors.length);
  let color2 = Math.floor(Math.random() * colors.length);

  while (color1 === color2) {
    color2 = Math.floor(Math.random() * colors.length);
  }

  myBody.style.backgroundImage = `linear-gradient(to right, ${colors[color1]}, ${colors[color2]})`;
}

myBtn.addEventListener("click", handleOnClick);
