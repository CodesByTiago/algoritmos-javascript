/*
  Elaborar um programa que leia a velocidade permitide em uma estrada e a
  velocidade de um condutor. Se a velocidade for inferior ou igual à permitida,
  exiba "Sem multa". Se a velocidade for de até 20% maior que a permitida,
  exiba "Multa leve". E se a velocidade for superior a 20% da velocidade
  permitida, exiba "Multa grave."
*/

const prompt = require("prompt-sync")()

// Entrada dos dados
const allowedSpeed = Number(prompt("Velocidade permitida: "))
const driverSpeed = Number(prompt("Velocidade do condutor: "))

// Processamento dos dados
let message

if (driverSpeed <= allowedSpeed) {
  message = "Sem multa"
} else if (driverSpeed <= allowedSpeed + allowedSpeed * 0.2) {
  message = "Multa leve"
} else {
  message = "Multa grave"
}

// Saída dos dados
console.log(`Situação: ${message}`)
