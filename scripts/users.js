let btnGuardar = document.getElementById("btnGuardar");
let btnEditar = document.getElementById("btnEditar");
let btnEliminar = document.getElementById("btnEliminar");
let btnCorreo = document.getElementById("btnCorreo");
let form = document.getElementById("formulario");

let UrlForm = "http://localhost:4000/users/";
// GUARDAR
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let response = await fetch(UrlForm, {
    method: "POST",
    body: JSON.stringify({
      name,
      lastName,
      email,
    }),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  let data = await response.json();
});

// BUSCAR
btnCorreo.addEventListener("click", async (e) => {
  let emailValue = document.getElementById("email").value;
  let response = await fetch(UrlForm);
  let data = await response.json();
  let emailSearch = data.find((user) => user.email === emailValue);
  const { name, lastName, email, id } = emailSearch;
  document.getElementById("name").value = name;
  document.getElementById("lastName").value = lastName;
  document.getElementById("email").value = email;
  document.getElementById("id").value = id;
});

// EDITAR
btnEditar.addEventListener("click", async (e) => {
  let nameModificar = document.getElementById("name").value;
  let lastNameModificar = document.getElementById("lastName").value;
  let emailModificar = document.getElementById("email").value;
  let idModificar = document.getElementById("id").value;

  let response = await fetch(UrlForm+idModificar, {
    method: "PUT",
    body: JSON.stringify({
      nameModificar,
      lastNameModificar,
      emailModificar,
      id: idModificar,
    }),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  let data = await response.json();
  console.log(data);
});

// ELIMINAR
btnEliminar.addEventListener("click", async (e) => {
    let idEliminar = document.getElementById("id").value;
    let response = await fetch(UrlForm+idEliminar, {
        method: "DELETE",
        headers: {
        "Content-Type": "application/json; charset=utf-8",
        },
    });
    let data = await response.json();
    console.log(data);
});