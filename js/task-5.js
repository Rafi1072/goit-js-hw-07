function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(`button[type="button"]`);
btn.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
});

const spanColor = document.querySelector(".color");
spanColor.textContent = btn.value;

//span.insertAdjacentHTML("beforeend", btn.value);
