function contar() {
  let saida = document.getElementById('saida')

  saida.innerHTML += "<p>Contagem de 10 a 30</p>"
  let cont = 10
  while (cont <=30) {
      saida.innerHTML +=  cont+" &#x1F449; "
      cont ++
  }
  saida.innerHTML += " &#x1F3C1;  "
}