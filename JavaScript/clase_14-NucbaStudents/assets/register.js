const registerForm = document.getElementById('register-form')
const nameInput = document.getElementById('name')
const lastNameInput = document.getElementById('lastName')
const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')
const phoneInput = document.getElementById('phone')

const users = JSON.parse(localStorage.getItem('users')) || []

/*-----------------Funciones auxiliares-------------------------------*/


const saveToLocalStorage = () =>{
    localStorage.setItem('users', JSON.stringify(users))
}

const isEmpty = (input) => {
    return !input.value.trim().length
}

const isBetween = (input, min, max) => {
    return input.value.length >= min && input.value.length <= max
}

const isValidEmail = (input) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

    return regex.test(input.value.trim())
}


const isExistingEmail = (input) => {
    return users.some((user) => user.email === input.value.trim())
}

const isPassSecure = (input) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/

    return regex.test(input.value.trim())
}

const isPhoneValid = (input) => {
    const regex = /^[0-9]{10}$/
    return regex.test(input.value.trim())
}

const showError = (input, message) => {
    const formField = input.parentElement
    formField.classList.remove('success')
    formField.classList.add('error')
    const error = formField.querySelector('small')
    error.style.display = 'block'
    error.textContent = message
}

const showSucces = (input) => {
    const formField = input.parentElement
    formField.classList.remove('error')
    formField.classList.add('success')
    const error = formField.querySelector('small')
    error.style.display = 'none'
    error.textContent = ''
}
/*-----------------Funciones de validación de inputs------------------*/

const checkInputText = (input) => {
    let valid = false
    const minCharacters = 3
    const maxCharacters = 16

    if(isEmpty(input)){
        showError(input, 'Este campo es obligatorio')
        return
    }

    if(!isBetween(input, minCharacters, maxCharacters)){
        showError(input, `Este campo debe tener entre ${minCharacters} y ${maxCharacters} caracteres`)
        return
    }

    showSucces(input)
    valid = true
    return valid
}

const checkEmail = (input) => {
    let valid = false

    if(isEmpty(input)){
        showError(input, 'Este campo es obligatorio')
        return
    }

    if(!isValidEmail(input)){
        showError(input, 'Debe ser un email valido')
        return
    }

    if(isExistingEmail(input)){
        showError(input, 'Este email ya se encuentra registrado')
        return
    }

    showSucces(input)
    valid = true
    return valid
}

const checkPassword = (input) => {
    //que no este vacia
    //sea segura (tenga mas de 8,mayus, minus, number, especial)
    let valid = false
    if(isEmpty(input)){
        showError(input, 'Este campo es obligatorio')
        return
    }

    if(!isPassSecure(input)){
        showError(input,'La contraseña debe tener al menos 8 caracteres, una mayuscula, una minuscula, un número y un simbolo')
        return
    }

    showSucces(input)
    valid = true
    return valid
}

const checkPhone = (input) => {
    let valid = false

    if(isEmpty(input)){
        showError(input, 'Este campo es obligatorio')
        return
    }


    if(!isPhoneValid(input)){
        showError(input, 'Este campo debe tener 10 caracteres y solo numeros')
        return
    }

    showSucces(input)
    valid = true
    return valid

}

/*-----------------validación general y almacenamiento de datos--------*/
const submitHandler = (e) => {
    // prevenir el comportamiento por defecto
    e.preventDefault()
    let isNameValid = checkInputText(nameInput)
    let isLastNameValid = checkInputText(lastNameInput)
    let isEmailValid = checkEmail(emailInput)
    let isPassValid = checkPassword(passwordInput)
    let isPhoneValid = checkPhone(phoneInput)

    let isValidForm =
        isNameValid &&
        isLastNameValid &&
        isEmailValid &&
        isPassValid &&
        isPhoneValid;

    if(isValidForm){
        users.push({
            name: nameInput.value,
            lastName: lastNameInput.value,
            email: emailInput.value,
            password: passwordInput.value,
            phone: phoneInput.value
        })
    }
    saveToLocalStorage()
    alert('Te registraste con exito!!')
    window.location.href = 'login.html'

}


const init = () => {
    registerForm.addEventListener('submit', submitHandler)
    nameInput.addEventListener('input', () => checkInputText(nameInput))
    lastNameInput.addEventListener('input', () => checkInputText(lastNameInput))
    emailInput.addEventListener('input', () => checkEmail(emailInput))
    passwordInput.addEventListener('input', () => checkPassword(passwordInput))
    phoneInput.addEventListener('input', () => checkPhone(phoneInput))
}
init()