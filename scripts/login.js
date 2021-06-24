// colocar e retirar a borda ao selecionar
const email = document.getElementById('email');

email.addEventListener('focus', () => {
    email.style.borderColor = "#fff";
})

email.addEventListener('blur', () => {
    email.style.borderColor = "#333";
})

const password = document.getElementById('password');

password.addEventListener('focus', () => {
    password.style.borderColor = "#fff";
})

password.addEventListener('blur', () => {
    password.style.borderColor = "#333";
})

// login funcional

function login (form) {
    
}