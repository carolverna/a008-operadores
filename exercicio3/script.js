const a = 5 > 20 && 20 < 2
console.log(a)
//false, porque 5 é menor que 20, e 20 é maior que 2. Consequentemente teriamos False && False 

const b = 5 === 5 || 5 === "5"
console.log(b)
// true, pois 5 é igual a 5, e como o operador lógico ou, um ou outro tem que ser V, para true.

const c = !20 > 50
console.log(c)
//As operação é falsa.

const d = !(20 > 50)
console.log(d)
//false, pois o ! fora do parentese inverte o resultado de booleano de dentro do parentese. Fazendo com que o resuldado fique positivo. 
