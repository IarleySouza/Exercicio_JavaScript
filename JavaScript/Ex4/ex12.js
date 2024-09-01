var agora = new Date()
var hr = agora.getHours()
console.log(`Agora são exatamentes ${hr} horas.`)
if (hr < 12) {
    console.log('Bom dia!')
}else if (hr <= 18) {
    console.log('Boa tarde')
}else {
    console.log('Boa noite')
}