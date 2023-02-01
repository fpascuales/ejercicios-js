const a = 1;
let b  = 2
const c = 1 * 2
const d = a < 2

const x = a+b
const saludo = "hola"

const p = "1"
const q = "2"
const t = Number(saludo)+a

const persona = {nombre: "pepe", edad: 30, email1: "pepe@gmail.com", email2: "pepe@hotmail.com"}
persona.nombre = "juan"

console.log(`${saludo} ${persona.nombre}`)

let persona2 = {
    nombre: "juan",
    edad: 28,
    email1: "juan@gmail.com",
    email2: "juan@hotmail.com",
    direccion:{
        calle: "Alcalá",
        portal: 2,
        piso: "6ºB"
    }
}

//console.log(persona2.direccion.calle)

const array = ["hola", 1, 3, "sr", "zx"]
array.push("zz")
console.log(array)

const numeros = [1,2,3,4,5,6,7,8,9,10]
/*for (const num of numeros){
    console.log(num)
}*/
/*for (let i = 0; i < numeros.length; i++){
    console.log(numeros[i])
}*/
let acumulador = 0
for(const numero of numeros){
    acumulador += numero
}
console.log(acumulador)

let multiplicador = 1
for(const numero of numeros){
    multiplicador *= numero
}
console.log(multiplicador)