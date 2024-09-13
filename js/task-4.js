const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputEmail = document.querySelector(`input[type="email"]`);
  const inputPassword = document.querySelector(`input[type="password"]`);

  if (inputEmail.value === "" || inputPassword.value === "") {
    return alert("All form fields must be filled in");
  }
});

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const formLogin = event.target;
  const email = formLogin.elements.email.value;
  const password = formLogin.elements.password.value;

  console.log(`Email: ${email}, Password: ${password}`);
  form.reset();

  const data = {
    email,
    password,
  };

  handleSubmit.push(data);
  console.log(data);
}
