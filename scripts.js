console.log("Hola Mundo");

var nombre, email, phone;

function myFunction() {
  document.getElementById("regNombre").textContent = nombre;
  document.getElementById("regEmail").textContent = email;
  document.getElementById("regPhone").textContent = phone;
}

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  nombre = document.getElementById("nombre").value;
  email = document.getElementById("email").value;
  phone = document.getElementById("phone").value;

  console.log("Nombre: " + nombre);
  console.log("Email: " + email);
  console.log("Número de celular: " + phone);
});
