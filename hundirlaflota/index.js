const inputSize = document.querySelector('#input-size')
const inputNumBarcos = document.querySelector('#input-numbarcos')
const btnCrear = document.querySelector('#btn-crear')

//Función para generar el tablero
function generarTablero(filas, columnas, valor) {
    const divTablero = document.querySelector('#div-tablero')
    divTablero.innerHTML = `<div id="div-casillas" class="b-casillas"></div>`
    const divCasillas = document.querySelector('#div-casillas')
    const tablero = []
     for (let x = 0; x < filas; x++) {
        const fila = []
        divCasillas.innerHTML += `<div id="tab-row${x}" class="d-flex"></div>`
        const tabRow = document.querySelector(`#tab-row${x}`)
        for(let y = 0; y < columnas; y++){
            const casilla = document.createElement("div")
            casilla.id = `casilla${x}${y}`
            casilla.className = "b-casilla"
            casilla.style.width = `calc(100% / ${columnas}`
            tabRow.appendChild(casilla)
            fila.push(valor)
        }
        tablero.push(fila)
    }
    numeroDeBarcos(tablero, inputNumBarcos.value)
    return tablero
}
//Función para recibir números de barcos y llamar a función colocarBarcos
function numeroDeBarcos(tablero, cantidad) {
    for(let i = 0; i < cantidad; i++){
        colocarBarco(tablero)
    }
}
//Función para rellenar posición con caracter concreto
function rellenarPosicion(tablero, posicion, caracter) {
    tablero[posicion.x][posicion.y] = caracter
}
//Función para obtener el caracter que hay en una posición
function obtenerCaracter(tablero, posicion) {
    return tablero[posicion.x][posicion.y]
}
//Función para obtener números aleatorios
function obtenerRandomEntre(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
//Función para colocar barcos de manera aleatoria
function colocarBarco(tablero) {
    const posicion = {}
    posicion.x = obtenerRandomEntre(0, tablero.length-1)
    posicion.y = obtenerRandomEntre(0, tablero[0].length-1)
    if(obtenerCaracter(tablero,posicion) !== 'B'){
        rellenarPosicion(tablero, posicion, 'B')
    }
    else{
        colocarBarco(tablero)
    }
    return tablero
}
// //Función para mostrar el tablero
// function mostrarTablero(tablero) {
//     for(let x = 0; x < tablero.length; x++){
//         console.log(tablero[x]);
//     }
// }
//Función para disparar a la posición seleccionada
function disparo(tablero, posicion) {
    //let contDisparos = inputNumBarcos.value
    const idCasilla = `casilla${posicion.x}${posicion.y}`
    const objetivo = document.querySelector(`#${idCasilla}`)
    const numDisparos = document.querySelector('#num-disparos')
    const numAciertos = document.querySelector('#num-aciertos')
    const numFallos = document.querySelector('#num-fallos')
    if(obtenerCaracter(tablero,posicion) === 'B'){
        rellenarPosicion(tablero, posicion, 'X')
        objetivo.innerHTML = `<span class='b-casilla--t icon-fire'></span>`
        numDisparos.innerHTML = Number(numDisparos.innerHTML) + 1
        numAciertos.innerHTML = Number(numAciertos.innerHTML) + 1
        return true
    }
    else{
        objetivo.innerHTML = `<span class='icon-cross'></span>`
        numDisparos.innerHTML = Number(numDisparos.innerHTML) + 1
        numFallos.innerHTML = Number(numFallos.innerHTML) + 1
        return false
    }
}

btnCrear.addEventListener('click',()=>{
    const divFire = document.querySelector('#div-fire')
    const dispDispo = Math.round(Math.random() * (Math.pow(inputSize.value,2) - inputNumBarcos.value) + inputNumBarcos.value);
    if(inputSize.value >= 5 && inputSize.value <= 10 && inputNumBarcos.value < Math.pow(inputSize.value,2)){
        divFire.innerHTML = "<div class='d-flex justify-content-between align-items-center'><span class='icon-rocket'></span><h3 id='info-fire'>¡Seleccione una casilla para disparar!</h3></div>"
        divFire.innerHTML += `<div class='d-flex align-item-center'><span>Disparos disponibles: </span><span id='num-disparos' class='ms-2'>${dispDispo}</span></div>`
        divFire.innerHTML += "<div class='d-flex align-item-center'><span>Aciertos: </span><span id='num-aciertos' class='ms-2'>0</span></div>"
        divFire.innerHTML += "<div class='d-flex align-item-center'><span>Fallos: </span><span id='num-fallos' class='ms-2'>0</span></div>"

        const tablero = generarTablero(inputSize.value, inputSize.value, '')
        colocarBarco(tablero, inputNumBarcos.value)
        const divCasillas = document.querySelectorAll('.b-casilla')
        for (const casilla of divCasillas) {
            casilla.addEventListener('click',()=>{
                const idCasilla = casilla.id.match(/\d{2}(?!.*\d{2})/)
                const posicion = {x:Number(idCasilla[0][0]), y:Number(idCasilla[0][1])}
                disparo(tablero, posicion)
            })
        }
    }
    else{
        divFire.innerHTML += "<div class='d-flex justify-content-between align-items-center'><h3 id='info-fire'>Parámetros no válidos</h3></div>"
    }
    
})

//Controlar que si hago fuego en una casilla, esa casilla no se pueda volver a clicar. Fin de juego, si disparo a todos los barcos antes de quedarme sin munición, gano. Si se acaba el número de disparos, pierdo
if(inputNumBarcos.value < tablero.length * tamFila){
    numeroDeBarcos(tablero, inputNumBarcos.value)
}
else{
    divFire.innerHTML += `<div class='d-flex align-item-center'><span>Número de barcos erróneo</span></div>`
}