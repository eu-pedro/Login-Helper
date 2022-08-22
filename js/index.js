
let eye = document.querySelector('#eye')
let eyeSlash = document.querySelector('#eye-slash')
let campoSenha = document.querySelector('#field-password')



function mostrarSenha(){
  if(eye.style.display === "none"){
    eye.style.display = "block"
    eyeSlash.style.display = "none"
    campoSenha.type = "text"
  }
  else{
    eye.style.display = "none"
    eyeSlash.style.display = "block"
    campoSenha.type = "password"
  }
  
  


}
eye.addEventListener('click', mostrarSenha)
eyeSlash.addEventListener('click', mostrarSenha)

document.querySelector('#btn-login').addEventListener('click', (e)=>{
  e.preventDefault
  window.alert('Seu dados foram cadastrados com sucesso!')
} )