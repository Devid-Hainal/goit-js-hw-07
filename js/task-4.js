document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".login-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailInput = form.querySelector("[name='email']");
    const passwordInput = form.querySelector("[name='password']");
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if ([emailValue, passwordValue].includes("")) {
      return alert("All form fields must be filled in");
    }

    console.log({ email: emailValue, password: passwordValue });

    form.reset();
  });
});

  
