/*
  Elaborar um programa para uma empresa que leia o salário e o tempo que um 
  funcionário trabalha na empresa. Sabendo que a cada 4 anos o funcionário
  recebe um acréscimo de 1% no salário, calcule e informe o númeo de quadriênios
  a que o funcionário tem direito e o salário final.
*/

const prompt = require("prompt-sync")()

// Entrada dos dados
const salary = Number(prompt("Salário R$: "))
const time = Number(prompt("Tempos (anos): "))

// Processamento dos dados
const quadrennium = Math.floor(time / 4)
const add = (salary * quadrennium) / 100

// Saida dos dados
console.log(`Quadriênios: ${quadrennium}`)
console.log(`Salário final R$: ${(salary + add).toFixed(2)}`)
