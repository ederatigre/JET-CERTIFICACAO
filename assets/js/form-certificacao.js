//Adicionar na Session Storage
export function addSession(){
    sessionStorage.setItem("nome", nome.value);
    sessionStorage.setItem("email", email.value);
    sessionStorage.setItem("telefone", telefone.value); 
    sessionStorage.setItem("assunto", assunto.value);
    sessionStorage.setItem("mensagem", mensagem.value);
  
    alert("Adicionado ao SessionStorage!");
}

//Mostrar valor conforme os campos forem preenchidos
export function MostrarValor(){
    var nomeCapturado = document.getElementById('nome').value;
    document.getElementById('nomeDigitado').innerHTML = nomeCapturado;

    var emailCapturado = document.getElementById('email').value;
    document.getElementById('emailDigitado').innerHTML = emailCapturado;

    var foneCapturado = document.getElementById('telefone').value;
    document.getElementById('foneDigitado').innerHTML = foneCapturado;

    var assuntoCapturado = document.getElementById('assunto').value;
    document.getElementById('assuntoDigitado').innerHTML = assuntoCapturado;

    var msgCapturado = document.getElementById('mensagem').value;
    document.getElementById('msgDigitado').innerHTML = msgCapturado;  
} 

//Recuperar valores da Session Storage
var GetSessionNome = sessionStorage.getItem("nome");
var GetSessionEmail = sessionStorage.getItem("mail");
var GetSessionTel = sessionStorage.getItem("telefone");
var GetSessionAssunto = sessionStorage.getItem("assunto");
var GetSessionMensagem = sessionStorage.getItem("mensagem"); 