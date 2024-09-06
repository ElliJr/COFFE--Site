let body = document.querySelector("body");
let isToggled = false;

body.onclick = () => {
    isToggled = !isToggled;
    body.style.setProperty("--value",
        isToggled ? "rgba(59, 25, 25, 0.705)" : "white"

    )
}


/* Função para abrir o menu lateral */
function abrirMenu() {
    document.getElementById("menuLateral").style.width = "250px";
  }
  
  /* Função para fechar o menu lateral */
  function fecharMenu() {
    document.getElementById("menuLateral").style.width = "0";
  }
  