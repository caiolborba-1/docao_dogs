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


    if(nome.legth < 3) return alert("Nome Inválido");
    if(email.include(@)) return alert("Email Inválido");
    if(moradia.include(this.querySelector)) return alert("Faltou Prencher");
    if(quintal.include(this.querySelector)) return alert("Faltou Prencher") 
    if(CPF < 11) return alert("Inválido")
    if(Idade < 18) return alert("Inválido")
    if(Telefone < 11) return alert("Inválido")
    

    document.getElementById("resultado").innerHTML = "cadastro realizado com sucesso!<br>"+ "nome:" + nome;
})