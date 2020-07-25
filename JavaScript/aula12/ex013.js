var agora = new Date()
var diaSem = agora.getDay()
console.log(diaSem)
switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    default:
        console.log('[ERRO] Dia inválido!')
        break
}
