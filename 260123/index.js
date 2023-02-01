function mostrarResultado(resultado){
    console.log(resultado)
}
//define una función sumarN que sume los N primeros números naturales desde 0 hasta N
//input -> 4
//output -> 10 (0+1+2+3+4)
// @param {el numero hasta donde hay que llegar en la suma} n
// @param {una función, que tras completar la suma, muestre el resultado} funcionMostrar

function sumarN(n, funcionMostrar) {
    let suma = 0
    for (let i = 0; i <= n;i++){
        suma += i
    }
    funcionMostrar(suma)
}
//sumarN(4,mostrarResultado)

// genera una función saludar, que reciba como parametro un nombre y haga un console.log// diciendo "saludar "+ nombre
// genera una funcion despedir, que reciba como parametro un nombre y haga un console.log// diciendo "adiós "+ nombre
// genera una función bienvenida que reciba como parametro un nombre y si ese nombre
// tiene más de 5 letras, lo despida, y si tiene menos, lo salude
// tambien va a recibir dos funciones como parámetro, una para saludar, y otra para despedir
/** *  * @param {*} nombre 
 * * @param {*} funcionSaludar
 * * @param {*} funcionDespedir
 * */
function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}
function despedir(nombre) {
    console.log(`Adiós ${nombre}`);    
}

function bienvenida(nombre, saludar, despedir){
    if(nombre.length > 5){
        saludar(nombre)
    }
    else{
        despedir(nombre)
    }
}
// bienvenida("oscar",saludar, despedir)
//bienvenida("oscarrrr",function(nombre){console.log("hofgla", nombre);}, despedir)

// function saludar(nombre) {
//     console.log(`Hola ${nombre}`);
// }

// ES LO MISMOS QUE

// (nombre)=>{console.log(`Hola ${nombre}`);}
//cuando la función flecha está en una sola línea, puedo quitar las llaves y el return

//Define una función que reciba 2 números y una función llamada operacion y devuelva el resultado de aplicar la operación a los dos números.
// @param {primer num} numero1
// @param {segundo num} numero2
// @param {operacion a aplicar} operacion

function calculadora(numero1, numero2, operacion) {
    return operacion(numero1, numero2)
}
//console.log(calculadora(3,2, (numero1,numero2) => numero1 + numero2))

//hacer una función flecha que coja un número y le sume 2
const sumarDos = (num) => num + 2
//console.log(sumarDos(4));

//Crear una función flecha llamada aplicar que reciba un array y la función sumarDos y le aplique la función sumarDos a todos los elementos
const aplicar = (unArray, laFuncion) =>{
    for (let i = 0; i < unArray.length; i++){
        unArray[i] = laFuncion(unArray[i])
    }
}
const elArray = [2,1,0,6,7]
//aplicar(elArray,sumarDos)
// console.log(elArray);
const palabras = ["hola", "que", "tal"]
//crear una función flecha que dada una palabra devuelva su longitud
const longitud = (palabra) => palabra.length
//aplicar(palabras,longitud)
//console.log(palabras);

//LO QUE HEMOS ESTADO HACIENDO CON APLICAR ES IGUAL QUE LA FUNCIÓN MAP DE JAVASCRIPT

//Genera una función que se llame filtrar, que reciba un array, una función y genere un nuevo array solo con los elementos que cumplan la función
//devuelve ese array una vez completado

const menorTres = (elemento) => elemento < 3

function filtra(array, f) {
    const filtrado = []
    for (let i = 0; i < array.length; i++){
        if(f(array[i])){
            filtrado.push(array[i])
        }
    }
    return filtrado
}
console.log(filtra(elArray,menorTres))