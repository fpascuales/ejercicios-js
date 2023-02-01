// Usando la función anterior beneficiate de poder conocer el indice del array para crear una función llamada 
// `removeItem` que pasandole un array y un texto como parametros (los mismos parametros que en el anterior ejercicio) 
// llame a la función anteriormente creada ``findArrayIndex`` y obten el indice para posteriormente usar la función de 
// javascript ``.splice()`` para eliminar el elemento del array. Finalmente retorna el array.

// De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente.
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

function removeItem(array, text) {
    return array.splice(findArrayIndex(array, text),1)
}

const animales = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']
removeItem(animales, "Salamandra")
console.log("Nuevo array: ", animales)

