let num = [5, 6, 7]
num[3] = 3
num.push(9)
console.log(`Nossos elementos são: ${num}`)
console.log(`O tamanho da minha lista é: ${num.length}`)
console.log(`Lista ordenada: ${num.sort()}`)

let pos = num.indexOf(2)
if(pos == -1) {
    console.log(`O valor não está em nenhuma posção. `)
}else {
    console.log(`O valor esta na posição ${pos}`)
}