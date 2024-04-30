const formLogin = document.querySelector("#formLogin");
const btnLogin = document.querySelector("#btnLogin");

btnLogin.addEventListener('click', event => {
  event.preventDefault();
  const code = document.querySelector("#code").value;
  const password = document.querySelector("#password").value;

  if (code.length!== 8) {
    alert("El código debe tener 8 dígitos");
    return;
  }

  // Add your login logic here
  // For example, you can send an AJAX request to a server-side script
  // to verify the code and password
  console.log("Login attempt with code:", code, "and password:", password);
});