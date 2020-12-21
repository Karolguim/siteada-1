//Se os campo de nome e email estiverem preenchidos, envie os dados
//Senão peça a usuária que preencha os campos: nome e email
//If (os campo de nome && email estiverem preenchido){
//envie os dados
//}else{}



document.getElementById("btenviar").addEventListener("click",validaForm)

function validaForm() {
  if(
    document.getElementById("nome").value != "" && 
    document.getElementById("email").value != "" && 
    document.getElementById("telefone").value != "" ){
    alert("Prontinho! Enviaremos novidades por e-mail!")

  }else{
     alert("Por favor, preencha as campos nome e e-mail")
   }
}