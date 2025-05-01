let item;
const ul = document.querySelector("ul");

document.addEventListener("dragstart", (e) => {
  item = e.target;
});

document.addEventListener("dragover", (e) => {
  e.preventDefault();
});

document.addEventListener("drop", (e) => {
  if (e.target.getAttribute("id") === "ul") {
    e.preventDefault();
    e.target.appendChild(item);
  } else {
    alert("pas sur le body");
  }
});
