const primeiroNumero = prompt('Digite um número:')
const segundoNumero = prompt('Digite outro número:')

const numero1 = primeiroNumero
const numero2 = segundoNumero

console.log('O primeiro numero é maior ao segundo', numero1 > numero2)
console.log('O primeiro numero é igual ao segundo?', numero1 === numero2)
console.log('O primeiro numero é divisível pelo segundo?', numero1 % numero2 === 0)
console.log('O segundo numero é divisível pelo primeiro?', numero2 % numero1 === 0)