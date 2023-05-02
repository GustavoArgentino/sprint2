var botaoMarcado = false;


function marcarBotao() {
  var botao = document.getElementById("botao");
  if (botao.classList.contains("botao-marcado")) {
    botao.classList.remove("botao-marcado");
    botaoMarcado = false;
  } else {
    botao.classList.add("botao-marcado");
    botaoMarcado = true;
  }
}




  function validarForm() {
    if (!botaoMarcado==false) {
      alert("Sucesso");
      window.location.assign("http://127.0.0.1:5500/sitedosoutros/login2/TelaDeLogin2.html")}


    else{
    alert("Preencha os termos de uso")}
  }




function inicio(){
  window.location.assign("http://127.0.0.1:5500/Tela-de-inicio-desktop/Tela-de-%C3%ADnicio-desktop.html")


}



