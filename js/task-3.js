const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
//const anon = textInput.trim();

textInput.addEventListener("input", (event) => {
  output.textContent = event.currentTarget.value;
  // if (textInput === "" || anon) {
  // return output.textContent("Anonymous");
  // }
});
