function generarTablero(filas, columnas, valor) {
    const tablero = []
    for (let x = 0; x < filas; x++) {
        const fila = []
        for(let y = 0; y < columnas; y++){
            fila.push(valor)
        }
        tablero.push(fila)
    }
    return tablero
}
//console.log(generarTablero(4,4,8));


function mostrarTablero(tablero) {
    for(let x = 0; x < tablero.length; x++){
        console.log(tablero[x]);
    }
}
/*Crear función rellerarPosición, que dado un tablero, una posición y un caracter, pinte ese caracter en el tablero
* @param tablero
* @param posicion{x: number, y: number}
* @param caracterRelleno
* @return void
*
*/
const tablero = generarTablero(3, 3, '')
const disparo = {x: 2, y: 0}

function rellenarPosicion(tablero, posicion, caracter) {
    tablero[posicion.x][posicion.y] = caracter
}
//Crear función para obtener el caracter que hay en una posición
function obtenerCaracter(tablero, posicion) {
    return tablero[posicion.x][posicion.y]
}
function obtenerRandomEntre(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
//usando la función obtenerRandomEntre colocaremos la posición de los barcos (usan el caracter B) solo tienen una pieza  
function colocarBarcoAleatorio(tablero) {
    const posicion = {}
    posicion.x = obtenerRandomEntre(0, tablero.length-1)
    posicion.y = obtenerRandomEntre(0, tablero[0].length-1)
    if(obtenerCaracter(tablero,posicion) !== 'B'){
        rellenarPosicion(tablero, posicion, 'B')
    }
    else{
        colocarBarcoAleatorio(tablero)
    }
}
function numeroDeBarcos(tablero, cantidad) {
    for(let i = 0; i < cantidad; i++){
        colocarBarcoAleatorio(tablero)
    }
}
function acierto(tablero, posicion) {
    if(obtenerCaracter(tablero,posicion) === 'B'){
        rellenarPosicion(tablero, posicion, 'X')
        return tablero
    }
    else{
        return false
    }
}
numeroDeBarcos(tablero, 7)
//mostrarTablero(tablero)
console.log(acierto (tablero, disparo))