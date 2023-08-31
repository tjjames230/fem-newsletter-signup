import variables from "../scss/globals/_colors.scss";

const button = document.querySelector("button");

// button hover effect
button.addEventListener("mouseover", () => {
  button.style.color = "black";
});

button.addEventListener("mouseout", () => {
  button.style.filter = "none";
});
