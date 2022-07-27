function avancarDias() {
  let dia = Number(window.prompt("Informe o dia da semana: "))
  let quantidade = Number(window.prompt("Informe a quantidade de dias que deseja avançar: "))
  let diasSemana = ["Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado", "Domingo"];

  let indiceDia = diasSemana.indexOf(dia);

  let indiceAtualizado = indiceDia + quantidade;
  while (indiceAtualizado >= 7) {
    indiceAtualizado -= 7;
  }

  alert ("Você avançou "+quantidade+" dias para "+diasSemana[indiceAtualizado]);
}