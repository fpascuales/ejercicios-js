// Dado el siguiente string

const text = `gracioso-pero-no-gracioso-de-risa-gracioso-de-raro`

//transformalo en el siguiente (Mayusculas incluidas)
//
//`Gracioso Pero No Gracioso De Risa Gracioso De Raro`
const frase = text.replaceAll('-', ' ').split(' ')
let fraseFinal = []
for (const palabra of frase) {
    fraseFinal.push(palabra[0].toUpperCase() + palabra.substr(1))
}
console.log(fraseFinal.join(' '));