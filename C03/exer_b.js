/*
  Elaborar um programa para uma vetrenária, que leia o peso de uma ração em kg
  e o quanto um gato consome por dia da ração em gramas. Informe quantos dias
  irá durar a ração e o quanto sobra da ração em gramas.
*/

const prompt = require("prompt-sync")()

// Entrada dos dados
const weightKg = Number(prompt("Peso da ração(kg): "))
const consume = Number(prompt("Consumo diário(gr): "))

// Processamento dos dados
const weightGr = weightKg * 1000
const duration = Math.floor(weightGr / consume)
const rest = weightGr % consume

// Saída dos dados
console.log(`Duração: ${duration} dias`)
console.log(`Sobra: ${rest}gr`)
