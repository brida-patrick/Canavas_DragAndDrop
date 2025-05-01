const canvas = document.getElementById("cav");
const button = document.querySelector("button");

console.log(button);

cxt = canvas.getContext("2d");

function getPosMov(e) {
  const Poscav = canvas.getBoundingClientRect();
  return {
    x: e.clientX - Poscav.left,
    y: e.clientY - Poscav.top,
  };
}

function mousmov(e) {
  const posMov = getPosMov(e);
  cxt.lineTo(posMov.x, posMov.y);
  cxt.stroke();
  cxt.strokeStyle = "blue";
  cxt.lineWidth = 6;
}

canvas.addEventListener("mousedown", (e) => {
  e.preventDefault();
  const posMov = getPosMov(e);
  cxt.beginPath();
  cxt.moveTo(posMov.x, posMov.y);

  canvas.addEventListener("mousemove", mousmov);

  canvas.addEventListener("mouseup", () => {
    canvas.removeEventListener("mousemove", mousmov);
  });
});

button.addEventListener("click", () => {
  cxt.clearRect(0, 0, canvas.width, canvas.height);
});
