'use strict';

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário padrão

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Verifica se o e-mail e a senha correspondem aos valores esperados
    if (email.trim() === "vitoria@gmail.com" && password === "1234") {
        alert("Login bem-sucedido!");
        // Redireciona o usuário para a página home.html
        window.location.href = "./dashbord.html";
    } else {
        alert("E-mail ou senha incorretos. Por favor, tente novamente.");
    }
});