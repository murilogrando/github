document.getElementById("formInscricao").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    alert("Inscrição realizada com sucesso!\n\nNome: " + nome + "\nE-mail: " + email);
});