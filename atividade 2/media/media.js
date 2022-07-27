function calcularMedia() {
  let nome = window.prompt("Nome do funcionário: ")
  let a = Number(window.prompt("informe o 1º salário de "+nome+":"))
  let b = Number(window.prompt("informe o 2º salário de "+nome+":"))

  var media = (a + b)/2
  var mediaar = parseFloat(media.toFixed(2))


  let res = document.getElementById("resultado")
  res.innerHTML = "<p>O primeiro salário de "+nome+" foi: R$"+a+"</p>"
  res.innerHTML += "<p>O primeiro salário de "+nome+" foi: R$"+b+"</p>"
  res.innerHTML += "<p>Portando, a média é de: R$"+mediaar+"</p>"
}