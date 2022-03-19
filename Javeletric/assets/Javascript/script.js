/*Buscar por janela e depois busca por elemento Id nome*/
/*var nome = window.document.getElementById(nome);*/
let nome = document.querySelector('#nome');
let email = document.querySelector('#email');
let assunto = document.querySelector('#assunto');
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;
let mapa = document.querySelector('#mapa');

nome.style.width= '98.4%';
email.style.width= '98.4%';



function validarNome(){
    let txtNome = document.querySelector('#txtNome');
    if(nome.value.length < 2){ /*Value = valor que tem no input nome */
       txtNome.innerHTML= 'Nome inválido!'; //Innerhtml transforma a tag em um texto              
       txtNome.style.color = 'red';        
       nomeOk = false;
    }else{
        txtNome.innerHTML = 'Nome válido!';
        txtNome.style.color = 'green';
        nomeOk = true;
    }
    
}

function validaEmail(){
     let txtEmail = document.querySelector('#txtEmail');

     if(email.value.indexOf('@') == -1 || email.value.indexOf('.')== -1){
        txtEmail.innerHTML = 'E-mail inválido';
        txtEmail.style.color = 'red';
        emailOk = false;
     }else{
         txtEmail.innerHTML = 'E-mail válido';
         txtEmail.style.color = 'green';
         emailOk = true;
     }
}

function validaAssunto (){
    let txtAssunto = document.querySelector('#txtAssunto');

    if(assunto.value.length >= 200){
        txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 200 caracteres';
        txtAssunto.style.color = 'red';
        assuntoOk=false;
    }else{
        txtAssunto.innerHTML = '';
        assuntoOk=true;
    }
}


function enviar(){
    if(nomeOk == true &&  emailOk == true && assuntoOk == true){
        alert('Formulário enviado com sucesso!');
    }else{
        alert('Preencha o formulário corretamente antes de enviar!!');
    }
}

