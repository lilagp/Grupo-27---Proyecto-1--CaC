// Script for navigation bar
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const telInput = document.querySelector("#tel");
const offerSelect = document.querySelector("#offer");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  //Verifica si el nombre está vacío
  if (nameInput.value === "") {
    alert("Por favor, ingrese su nombre");
    return;
  }
  //Verifica si el mail está ingresado y si es válido
  if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
    alert("Por favor, ingrese su mail");
    return;
  }
  //Verifica si el número de telefono está ingresaso y si es correcto

  if (telInput.value === "" || !istelValid(telInput.value)) {
    alert("Por favor, ingrese un número de teléfono (Máximo 8 dígitos)");
    return;
  }
  //Verifica si se seleccionó recibir ofertas
  if (offerSelect.value === "") {
    alert("Por favor, seleccionar si se requiere novedades de ofertas");
    return;
  }
  //Verifica si se ingresó el mensaje
  if (messageTextarea.value === "") {
    alert("Por favor, escriba un mensaje");
    return;
  }
  //Si todos los campos están correctamente ingresados, enviar el formulario
  form.submit();
});

//Función que valida al mail
function isEmailValid(email) {
  //Regla para validar mail
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
  );
  if (emailRegex.test(email)) {
    return true;
  }
  return false;
}
//Función que valida el número de teléfono
function istelValid(tel) {
  //Regla para validar teléfono
  const telRegex = new RegExp(/^\d{8}$/);
  if (telRegex.test(tel)) {
    return true;
  }
  return false;
}
