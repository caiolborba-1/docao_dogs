document.getElementById("formaAdocao").addEventListener("submit", function(e){
    e.preventDefault();

    let nome = document.getElementById("Nome").value;
    let email = document.getElementById("email").value;
    let moradia = document.getElementById("moradia").value;
    let quintal = document.querySelector('input[name= "quintal"]:checked');
    let CPF = document.getElementById("CPF").value;
    let Telefone = document.getElementById("telefone").value;
    let Idade = document.getElementById("Idade").value
    let Pet = document.querySelector('input[name = "Pet"]:checked');
    let horas = document.getElementById("horas").value;
    let motivo = document.getElementById("motivo").value;
    

    if(nome.legth < 3) return alert("nome inválido");

    document.getElementById("resultado").innerHTML = "cadastro realizado comsucesso!<br>"+ "nome:" + nome;
})