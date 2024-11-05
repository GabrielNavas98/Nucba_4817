/*
Local Storage
  -> persistencia de datos  (f5 y cierre de pestañas o ventana)
  -> localStorage
  -> setItem('key', value)
  -> getItem('key') si encuentra datos los devuelve y si no devuelve null


Session Storage
  -> persistencia de datos (solo con f5, cerramos pestaña se pierden datos)
  -> sessionStorage
  -> setItem('key', value)
  -> getItem('key') si encuentra datos los devuelve y si no devuelve null

  
JSON => JavaScript object notation '[perro, gato, elefante]'
                                   ["perro", "gato", "elefante"]
*/
// const arrayAnimales = JSON.parse(localStorage.getItem("animalesJson")) || [];
// arrayAnimales.push("tortuga");

// localStorage.setItem("animales", arrayAnimales);
// localStorage.setItem("animalesJson", JSON.stringify(arrayAnimales));
// sessionStorage.setItem("animalesJson", JSON.stringify(arrayAnimales));

// console.log(localStorage.getItem("animales"));
// console.log(localStorage.getItem("animalesJson"));
// console.log(JSON.parse(localStorage.getItem("animalesJson")));

// const saveToLocalStorage = () => {
//   localStorage.setItem("animalesJson", JSON.stringify(arrayAnimales));
// };
/*
//---------------------------TODO
const toDosForm = document.getElementById("todo_form");
const input = document.getElementById("todo_input");
const caja = document.getElementById("caja");

// ['tarea1', 'tarea2']
const toDosList = JSON.parse(localStorage.getItem("toDoList")) || [];

const renderList = () => {
  caja.innerHTML = toDosList
    .map((todo) => {
      return `
        <p>${todo}</p>
      `;
    })
    .join("");
};

const saveToLocalStorage = () => {
  localStorage.setItem("toDoList", JSON.stringify(toDosList));
};

const submitHandler = (event) => {
  event.preventDefault();
  let item = input.value;
  toDosList.push(item);
  input.value = "";
  saveToLocalStorage();
  renderList();
};

const init = () => {
  renderList();
  toDosForm.addEventListener("submit", submitHandler);
};

init();
*/

//--------------Validación
const form = document.getElementById("valid-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("error_form");

const setError = (message) => {
  errorMessage.innerText = message;
  errorMessage.style.color = "red";
};

const isValidEmail = (email) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
  return regex.test(email);
};

const validateForm = () => {
  let valid = false;
  let emailValue = emailInput.value;
  let passwordValue = passwordInput.value;

  if (emailValue === "") {
    setError("El email no puede estar vacio");
    return;
  }

  if (passwordValue === "") {
    setError("La contraseña no puede estar vacia");
    return;
  }

  if (!isValidEmail(emailValue)) {
    setError("Email invalido");
    return;
  }

  if (passwordValue.length < 6) {
    setError("Contraseña debe ser mayor a 6 caracteres");
    return;
  }

  errorMessage.innerText = "";
  valid = true;
  return valid;
};

const submitHandler = (e) => {
  e.preventDefault();

  if (validateForm()) {
    console.log("Formulario validado correctamente");
  }
};

const init = () => {
  form.addEventListener("submit", submitHandler);
};
init();

const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;

console.log(regex.test("email@gmail.com"));
