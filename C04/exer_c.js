/*
  Elaborar um programa para simular um parquímetro, o qual leia o valor de
  moedas depositados em um terminal de estacionamento rotativo. O programa deve
  informar o tempo de permanência do veículo no local e o troco(se existir).
  Se o valor for inferior ao tempo mínimo, exiba: "Valor insuficiente".

  Valor | Tempo(min)
  1.00    30
  1.75    60
  3.00    120
*/

const prompt = require("prompt-sync")()

// Entrada de dados
const value = Number(prompt("Valor R$: "))

// Processamento de dados
let message
let time
let change

if (value < 1) {
  message = "Valor insuficiente"
} else if (value >= 1.75 && value < 3) {
  time = 60
  change = value % 1.75
} else if (value >= 3) {
  time = 120
  change = value % 3
} else {
  time = 30
  change = value % 1
}

// Saída de dados
value < 1 ? console.log(message) : ""
value >= 1 ? console.log(`Tempo: ${time} min`) : ""
value >= 1 ? console.log(`Troco R$: ${change.toFixed(2)}`) : ""
