const resultado = await fetch('https://api.agify.io?name=michael')
const obj = await resultado.json()
console.log(resultado);