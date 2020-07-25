let num = [5, 6, 4, 8]
num[4] = 9 // add na posição desejada
num.push(1) // add no fim 
num.sort() // coloca em ordem
console.log(num.length) // mostra quantos elementos têm
console.log(`Nosso vetor é ${num}`)
console.log()

for (var c = 0; c < num.length; c++) {
    console.log(num[c])
}
console.log()

for(var p in num) {
    console.log(num[p])
}
console.log()

console.log(`O número 6 está na posição ${num.indexOf(6)}`)
