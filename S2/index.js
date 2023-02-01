const persona = {
    nombre: 'oscar',
    tfno: '666666666',
    edad: 30
}

for (const key in persona) {
  //  console.log(key, persona[key]);
}

//dado el siguiente objeto buscar la asignatura que tenga la máxima nota. Utilizar for const in para recorrer y localizar la asignatura con máxima nota
const notas = {mates: 4, lengua: 6, ingles: 9, ciencias: 8}
let asignaturaMaxima = "mates"  //Object.keys(notas)[0] forma correcta para coger la primera clave

for (const key in notas) {
    if (notas[key] > notas[asignaturaMaxima]) {
        asignaturaMaxima = key      
    }
}
//console.log(asignaturaMaxima);

//dado el siguiente array localizar la palabra más larga

const palabras = ["perro", "gato", "periquito", "elefante"]
let palabraMasLarga = palabras[0]
for (const palabra of palabras) {
    if(palabra.length > palabraMasLarga.length){
        palabraMasLarga = palabra
    }
}
//console.log(palabraMasLarga);

//comprobar si en un array de palabras alguna empieza por p

const alumnos = ["oscar", "pedro", "manu"]

let existe = false
for (const alumno of alumnos) {
    if(alumno[0] === "p"){
        existe = true
        break
    }
}
//console.log(existe);

//dado el string, buscar la temperatura más alta
const temperaturasMensaje = "35,36,37,40,37,34"

const temperaturas = temperaturasMensaje.split(',')
let temperaturaMasAlta = Number(temperaturas[0])
for (const temperatura of temperaturas) {
    if(Number(temperatura) > temperaturaMasAlta){
        temperaturaMasAlta = Number(temperatura)
    }
}
//console.log(temperaturaMasAlta);

//dado el string siguiente buscar si existe un nombre acabado en "n"
const nombreStr = "raul-oscar-ramon-manuel-gabriel"
const nombresConN = nombreStr.split('-')
for (const nombre of nombresConN) {
    if(nombre[nombre.length-1] === "n"){
       // console.log("Existe un nombre que acaba en n:", nombre);
        break
    }
}

const humedadesStr ="90,78,80,60,65,68"

const humedades = humedadesStr.split('-')

//utilziar indexof para buscar el índice de la hora donde se produjeron olas de 8 metros y elimiar ese registro

const alturasOlas = [4,5,6,7,4,3,8,5,3,2,1,2]
//console.log(alturasOlas.indexOf(8));
const horaOlas = alturasOlas.splice(alturasOlas.indexOf(8), 1)


//utilia un for para obtener la posicion que ocupa el pago 2

const pagos = [{id: 1, cantidad: 30}, {id: 2, cantidad: 15}, {id: 3, cantidad: 10}]
for (const pago in pagos) {
    if(pagos[pago].id === 2){
        //console.log("Posición: ",pago);
        break
    }
}

//dado el arrray de pagos usa for, push y pop para generar un nuevo array de pagos con los al revés

const pagosReverse = []
for (let i = 0; i < pagos.length; i++) {
    pagosReverse.push(pagos.pop())    
    i--
}
//console.log(pagosReverse);