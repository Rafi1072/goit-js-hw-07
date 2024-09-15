const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputEmail = document.querySelector(`input[type="email"]`);
  const inputPassword = document.querySelector(`input[type="password"]`);

  if (inputEmail.value === "" || inputPassword.value === "") {
    return alert("All form fields must be filled in");
  }

  form.addEventListener("submit", handleSubmit);

  function handleSubmit() {
    const formLogin = event.target;
    const email = formLogin.elements.email.value.trim();
    const password = formLogin.elements.password.value.trim();

    console.log(`Email: ${email}, Password: ${password}`);

    const data = [email, password];
    console.log(data);
    form.reset();
    return data;
  }
});
