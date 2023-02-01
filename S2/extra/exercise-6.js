// Crea una función llamada ``swap`` que reciba un array y dos parametros que sean indices del array. La función deberá 
// intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array 
// resultante.

// Sugerencia de array:

// ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

const futbolistas = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

function swap(array, ind1, ind2) {
    if(ind1 >= 0 && ind1 < array.length && ind2 >= 0 && ind2 < array.length){
        const intercambio1 = array.splice(ind2, 1, array[ind1])
        return array.splice(ind1, 1, intercambio1[0])
    }
    else{
        console.log("Los indices indicados están fuera del array")
    }
}
swap(futbolistas, 3, 0)
console.log("array resultante", futbolistas);
