/*
  Elaborar um programa que leia um número e informe se ele é par ou impar. Faça
  com o if..else tradicional e após, tente criar a condição com o operador
  ternário.
*/

const prompt = require("prompt-sync")()

// Entrada dos dados
const number = Number(prompt("Número: "))

// Processamento dos dados
let messageWithIf
let messageWithTernary

// Usando if..else
if (number % 2 === 0) {
  messageWithIf = `${number} é par`
} else {
  messageWithIf = `${number} é impar`
}

// Usando ternário
messageWithTernary = number % 2 === 0 ? `${number} é par` : `${number} é impar`

// Saída dos dados
console.log(`Com if..else: ${messageWithIf}`)
console.log(`Com ternário: ${messageWithTernary}`)
