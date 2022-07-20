const btnEnviar = document.querySelector('.button-form');

btnEnviar.addEventListener('click', (e) => {
   e.preventDefault();

   validaNome();
   validaEmail();
   validaAssunto();
   validaMensagem();
})

function validaNome(){
   var nome = document.querySelector('#nome');
   var nomeInvalido = document.querySelector('.nome-invalido');
  
   if(nome.value == ''){
      nomeInvalido.style.display = 'block';
      nomeInvalido.innerHTML = 'Nome é obrigatório';
      nome.focus();
      return false;
   }else{
      nomeInvalido.style.display = 'none';
   }

   if(nome.value.length > 50){
      nomeInvalido.style.display = 'block';
      nomeInvalido.innerHTML = 'Nome é grande demais';
      nome.focus();
   }else{
      nomeInvalido.style.display = 'none';
   }
}

function validaEmail(){
   var email = document.querySelector('#email');
   var emailInvalido = document.querySelector('.email-invalido');
   usuario = email.value.substring(0, email.value.indexOf('@'));
   dominio = email.value.substring(email.value.indexOf('@')+1, email.value.length);

   if(email.value == ''){
      emailInvalido.style.display = 'block';
      emailInvalido.innerHTML = 'Email é obrigatório';
      email.focus();
      return false;
   }else{
      emailInvalido.style.display = 'none';
   }

   if((usuario.length <= 1) || (dominio.length <= 3) || dominio.indexOf('.') <= 1){
      emailInvalido.style.display = 'block';
      emailInvalido.innerHTML = 'Email inválido';
      email.focus();
   }else{
      emailInvalido.style.display = 'none';
   }
}

function validaAssunto(){
   var assunto = document.querySelector('#assunto');
   var assuntoInvalido = document.querySelector('.assunto-invalido');

   if(assunto.value == ''){
      assuntoInvalido.style.display = 'block';
      assuntoInvalido.innerHTML = 'Assunto é obrigatório';
      assunto.focus();
      return false;
   }else{
      assuntoInvalido.style.display = 'none';
   }

   if(assunto.value.length > 50){
      assuntoInvalido.style.display = 'block';
      assuntoInvalido.innerHTML = 'Assunto é grande demais';
      assunto.focus();
   }else{
      assuntoInvalido.style.display = 'none';
   }
}

function validaMensagem(){
   var mensagem = document.querySelector('#mensagem');
   var mensagemInvalido = document.querySelector('.mensagem-invalido');

   if(mensagem.value == ''){
      mensagemInvalido.style.display = 'block';
      mensagemInvalido.innerHTML = 'Mensagem é obrigatório';
      mensagem.focus();
      return false;
   }else{
      mensagemInvalido.style.display = 'none';
   }

   if(mensagem.value.length > 300){
      mensagemInvalido.style.display = 'block';
      mensagemInvalido.innerHTML = 'Mensagem é grande demais';
      mensagem.focus();
   }else{
      mensagemInvalido.style.display = 'none';
   }
}