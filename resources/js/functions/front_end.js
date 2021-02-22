
$(document).ready(function(){

    $(document).on("click", "#salvar", function() {
		preSession();
    });
    
    $(document).on("blur", ".validaSession", function() {
        showValues();
    })

    $(document).on("click", "#editar", function() {
		preEditSession();
    });

    $(document).on("click", "#resgatar", function() {
		postSession();
    });
})

function preSession(){
    $('#addSessionForm')
            .form({
                fields: {
                    nome_cadastro: {
                        rules: [{
                                type:'empty',
                                prompt: 'Campo nome é obrigatório'
                            }]
                    },
                    email_cadastro: {
                        rules: [{
                                type:'email',
                                prompt: 'Informe um e-mail válido'
                            }]
                    },
                    tel_cadastro: {
                        rules: [{
                                type:'exactLength[11]',
                                prompt: 'Numero informado invalido. Ex: 011999999999'
                            }]
                    },
                    assunto_cadastro: {
                        rules: [{
                                type:'empty',
                                prompt: 'Campo assunto obrigatório'
                            }]
                    },
                    msg_cadastro: {
                        rules: [{
                                type:'empty',
                                prompt: 'Campo mensagem obrigatória'
                            }]
                    },
                },
                onSuccess: function(event, fields) {
                    newSession();
                }
            });
}

function preEditSession(){
    $('#editSessionForm')
        .form({
            fields: {
                nome_guardado: {
                    rules: [{
                            type:'empty',
                            prompt: 'Campo nome obrigatório'
                        }]
                },
                email_guardado: {
                    rules: [{
                            type:'email',
                            prompt: 'Informe um e-mail válido'
                        }]
                },
                tel_guardado: {
                    rules: [{
                            type:'exactLength[11]',
                            prompt: 'Numero informado invalido. Ex: 011999999999'
                        }]
                },
                assunto_guardado: {
                    rules: [{
                            type:'empty',
                            prompt: 'Campo assunto obrigatório'
                        }]
                },
                msg_guardado: {
                    rules: [{
                            type:'empty',
                            prompt: 'Campo mensagem obrigatória'
                        }]
                },
            },
            onSuccess: function(event, fields) {
                alterSession();
            }
        });
}

function newSession(){

    sessionStorage.setItem("nome", nome_cadastro.value);
    sessionStorage.setItem("email", email_cadastro.value);
    sessionStorage.setItem("telefone", tel_cadastro.value); 
    sessionStorage.setItem("assunto", assunto_cadastro.value);
    sessionStorage.setItem("mensagem", msg_cadastro.value);
    alert("Adicionado com sucesso");

    document.getElementById('proximo').style.visibility = 'visible';

}

function showValues(){

let nome = document.getElementById('nome_cadastro').value;
let email = document.getElementById('email_cadastro').value;
let tel = document.getElementById('tel_cadastro').value;
let assunto = document.getElementById('assunto_cadastro').value;
let msg = document.getElementById('msg_cadastro').value;

document.getElementById('nome_digitado').innerHTML = nome;
document.getElementById('email_digitado').innerHTML = email;
document.getElementById('tel_digitado').innerHTML = tel;
document.getElementById('assunto_digitado').innerHTML = assunto;
document.getElementById('msg_digitado').innerHTML = msg;  

} 

function alterSession(){

    sessionStorage.setItem("nome", nome_guardado.value);
    sessionStorage.setItem("email", email_guardado.value);
    sessionStorage.setItem("telefone", tel_guardado.value); 
    sessionStorage.setItem("assunto", assunto_guardado.value);
    sessionStorage.setItem("mensagem", msg_guardado.value);
    alert("Alterado com sucesso");

}        

function postSession() {

document.getElementById('nome_guardado').value = sessionStorage.getItem("nome");
document.getElementById('email_guardado').value = sessionStorage.getItem("email");
document.getElementById('tel_guardado').value = sessionStorage.getItem("telefone");
document.getElementById('assunto_guardado').value = sessionStorage.getItem("assunto");
document.getElementById('msg_guardado').innerHTML = sessionStorage.getItem("mensagem");

document.getElementById('nome_guardado').disabled = 0;
document.getElementById('email_guardado').disabled = 0;
document.getElementById('tel_guardado').disabled = 0;
document.getElementById('assunto_guardado').disabled = 0;
document.getElementById('msg_guardado').disabled = 0;

document.getElementById('editar').style.visibility = 'visible';
}