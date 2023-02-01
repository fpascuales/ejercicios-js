/**
 * direcciones:
 'u' -> arriba -> up
'd' -> abajo -> down
'l' -> izquierda -> left
'r' -> derecha -> right
 */
/**
 *  moverRaton(tablero,direccion) -> dada una dirección, cambia la posicion del raton
    getPosicionRaton(tablero) -> funcion que devuelva la posición actual del ratón
    getPosicionQueso(tablero) -> funcion que devuelva la posición del queso
    finJuego(tableroInicial, tableroFinal) -> si la posicion del raton coincide con la posición del queso
 */

/* MODIFICACIONES REALIZADAS POR KIKO
   HE CAMBIADO LA FUNCIÓN finJuego, NO VEÍA NECESARIO COMPARAR LOS DOS ARRAYS ENTEROS. AHORA LO QUE COMPRUEBO ES LA POSICIÓN A LA QUE SE VA A MOVER EL RATÓN, SI HAY QUESO, TRAMPA O ESPACIO VACÍO.
   ESTA COMPARACIÓN LA HAGO CON EL tableroTrampa OCULTO AL JUGADOR EN LA TERMINAL
   
   SI EL RATÓN ESTÁ CERCA DE UNA TRAMPA ORTOGONALMENTE (ÚNICOS FUTUROS MOVIMIENTOS POSIBLES), ENVÍO UN AVISO AL JUGADOR, DE UNA TRAMPA CERCANA. CONTROLADO POR LA VARIABLE proximidad
 */
//
/*
    ESTA FUNCIÓN ES UNA IDEA QUE TENÍA EN MENTE. CREAR UN ARRAY ALEATORIO Y UBICAR EL QUESO Y LA TRAMPA. NECESITO SABER CÓMO EJECUTAR UNA FUNCIÓN UNA ÚNICA VEZ.
    NO ESTÁN TERMINADAS (NO HE METIDO QUE COMPRUEBE SI DONDE VA A METER LA T ESTÁ EL RATÓN O EN LA FUNCIÓN GENERARQUESO, SI DONDE VA A METER LA Q, ESTÁ LA TRAMPA O EL RATÓN)
*/
// function generarTrampa(tablero) {
//     let tableroTrampa = tablero
//     const rowTrampa = Math.round(Math.random()*2)
//     const colTrampa = Math.round(Math.random()*2)
//     if(tablero[rowTrampa][colTrampa] === 'r'){

//     }
//     tableroTrampa[rowTrampa][colTrampa] = 't'
//     return tableroTrampa
// }
//generarTrampa(tableroJuego)
// function generarQueso(tablero) {
//     let tableroTrampa = tablero
//     const rowQueso = Math.round(Math.random()*2)
//     const colQueso = Math.round(Math.random()*2)

//    tableroTrampa[rowTrampa][colTrampa] = 'q'
//     return (tableroTrampa)
// }
//generarQueso(tableroJuego)

//Tablero con el queso y la trampa. Ocultos cuando el jugador mete comandos por terminal
const tableroTrampa = [
    ['q', '', 't'],
    ['', '', ''],
    ['', '', '']
]
//Tablero de juego. ES EL QUE VERÁ EL JUGADOR EN LA TERMINAL
let tableroJuego = [
    ['', '', ''],
    ['', '', ''],
    ['', '', 'r']
]

function getPosicion(tablero, elemento){
    for (let x = 0; x < tablero.length; x++) {
        for (let y = 0; y < tablero[x].length; y++) {
            if(tablero[x][y] === elemento)
            return [x,y]            
        }
    }
}
function getPosicionRaton(tablero) {
    return getPosicion(tablero, 'r')
}
function getPosicionQueso(tablero) {
    return getPosicion(tablero, 'q')
}
function getPosicionTrampa(tablero) {
    return getPosicion(tablero, 't')
}

function finJuego(tablero, tableroT, posicionRaton) {
    const posicionTrampa = getPosicionTrampa(tableroT)
    if(tableroT[posicionRaton[0]][posicionRaton[1]] === 'q'){
        return (`Fin del juego. El ratón se comió el queso`)
    }
    else if (tableroT[posicionRaton[0]][posicionRaton[1]] === 't') {
        return (`Fin del juego. El ratón cayó en la trampa`)
    }
    else{
        tablero[posicionRaton[0]][posicionRaton[1]] = 'r'
        let proximidad = (posicionTrampa[0]+posicionTrampa[1])-(posicionRaton[0]+posicionRaton[1])
        proximidad === -1 || proximidad === 1 ? console.log('¡Cuidado, hay una trampa cerca!'): ""
        return tablero
    }
}
function moverRaton(tablero, tableroT, direccion) {
    let posicionRaton = getPosicionRaton(tablero)
    if (direccion === 'u' && posicionRaton[0] > 0){
        tablero[posicionRaton[0]][posicionRaton[1]] = ''
        posicionRaton[0] = posicionRaton[0]-1
    }
    else if (direccion === 'd' && posicionRaton[0] < 2){
        tablero[posicionRaton[0]][posicionRaton[1]] = ''
        posicionRaton[0] = posicionRaton[0]+1    
    }
    else if (direccion === 'l' && posicionRaton[1] > 0){
        tablero[posicionRaton[0]][posicionRaton[1]] = ''
        posicionRaton[1] = posicionRaton[1]-1    
    }
    else if (direccion === 'r' && posicionRaton[1] < 2){
        tablero[posicionRaton[0]][posicionRaton[1]] = ''
        posicionRaton[1] = posicionRaton[1]+1    
    }
    else{
        console.log('Movimiento no válido')
    }
    return finJuego(tablero, tableroT, posicionRaton)
}

// console.log(`Mover ratón: ${moverRaton(tableroJuego,tableroTrampa,'u')}`);
// console.log(`Mover ratón: ${moverRaton(tableroJuego,tableroTrampa,'l')}`);
// console.log(`Mover ratón: ${moverRaton(tableroJuego,tableroTrampa,'l')}`);
// console.log(`Mover ratón: ${moverRaton(tableroJuego,tableroTrampa,'u')}`);