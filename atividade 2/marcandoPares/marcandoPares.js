function contar() {
  let saida = document.getElementById("saida")

  let cont = 100
  while (cont <= 120) {
    if (cont % 2 == 0) {
      saida.innerHTML += "<strong>"+cont+"</strong>&#x1F449;"
    }
    else {
      saida.innerHTML += cont+" &#x1F449; " 
    }
    cont ++
  }
  saida.innerHTML += " &#x1F3C1;"
}