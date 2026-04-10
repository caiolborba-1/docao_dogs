document.getElementById("formaAdocao").addEventListener("submit", function(e){
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let moradia = document.getElementById("moradia").value;
    let quintal = document.querySelector('input[name = "quintal"]:checked');
    let CPF = document.getElementById("CPF").value;
    let Telefone = document.getElementById("Telefone").value;
    let Idade = document.getElementById("Idade").value
    let Pet = document.querySelector('input[name = "Pet"]:checked');
    let horas = document.getElementById("horas").value;
    let motivo = document.getElementById("motivo").value;
    let termos = document.getElementById("termos").value;


    if(nome.length < 3) return alert("Nome Inválido");
    if(!email.includes("@")) return alert("Email Inválido");
    if(!moradia) return alert("faltou preencher moradia");
    if(!quintal) return alert("faltou preencher quintal");
    if(CPF.length < 11) return alert("CPF Inválido");
    if(Idade < 18) return alert("idade Inválido");
    if(Telefone.length < 11) return alert("telefone Inválido");
    
    

    
    

    document.getElementById("resultado").innerHTML = "cadastro realizado com sucesso!<br>"+ "nome:" + nome;
})