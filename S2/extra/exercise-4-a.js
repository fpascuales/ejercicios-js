// Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la 
// posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

// Haz varios ejemplos y compruebalos.

// Sugerencia de función:

// ```js
// function findArrayIndex(array, text) {}
// ```

// Ej array:
// ````js
// ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']

function findArrayIndex(array, text) {
    let posicion = 0
    for (let i = 0; i < array.length; i++) {
        if(text == array[i]){
            posicion = i
            break
        }        
    }
    posicion == 0 ? console.log("El texto no se encuentra en el array") : ""
    return posicion
}
const animales = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']
console.log("Posición del texto: ", findArrayIndex(animales, "Salamandra"))