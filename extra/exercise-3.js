//En base al siguiente array cuenta cuantas letras "a" tenemos. El resultado debería ser 9.

const animals = ["Salamandra montesa", "Delinicio", "Tigre de puntos", "Saltamontañas"]
const prueba = "Salamandra montesa"

// function letrasA(palabra) {
//     let suma = 0
//     for (const letra of palabra) {
//         letra === 'a'? suma++ : ""
//     }
//     return suma
// }
function palabrasConA(unArray) {
    let suma = 0
    for (const valor of unArray) {
      if(unArray.includes('a')){
        
      }
    }
    return suma
}

console.log(animals.filter(palabrasConA));
//console.log(`Hay ${animals.filter(palabrasConA)} 'a' en el array`);