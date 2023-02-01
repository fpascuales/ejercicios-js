//haz un bucle para cambiar el texto de los botones sumandole 2 a cada número del botón

// for (let i = 0; i <=5; i++) {
//     const boton = document.getElementById(`boton-${i}`)
//     const partes = boton.innerHTML.split(' ')
//     const numero = Number(partes[1])
//     const numeroSiguiente = numero+2
//     boton.innerHTML = `Botón ${numeroSiguiente}`
// }

//For mejorado
// for ( let i = 0; i <=5; i++){
    //HACER ESTO<----------------------------------------
// }

//Haz un bucle para añadir un controlador de eventos a cada botón para que al pulsar cada botón, muestre por consola 'Hola soy el botón x ( siendo x cada número)

// for(i= 0; i<=5; i++){
//     const boton = document.getElementById(`boton-${i}`)
//     boton.addEventListener('click',()=>{
//         console.log(`Hola soy el botón ${boton.innerHTML}`);
//     })
// }
// -------------------------------------------------------------------------------------------------------------------------
// const boton0 = document.getElementById(`boton-${i}`)
// const boton7 = document.getElementById(`boton-${i}`)
// const boton2 = document.getElementById(`boton-${i}`)

//si tenemos muchos botones y no puedo extraer los valores porque sus id no están ordenados, lo mejor es hacer un array y luego usar un forof
// const arrayBotones = [boton0,boton7,boton2]
// for (const boton of arrayBotones) {
//     boton.addEventListener('click',()=>{
//         console.log(`Hola soy el botón ${boton.innerHTML}`);
//     })
// }
// -------------------------------------------------------------------------------------------------------------------------
//creando elementos desde javascript a html

// const divRojo1 = document.getElementById('div-rojo1')
// const nuevoDiv = document.createElement("div")
// nuevoDiv.setAttribute("class","verde")
// divRojo1.appendChild(nuevoDiv)
// -------------------------------------------------------------------------------------------------------------------------
// //buscar elementos por tag
// const div = document.getElementsByTagName('div')
// console.log(div);
// //burcar elementos por clase
// const divsVerdes = document.getElementsByClassName('verde')
// console.log(divsVerdes);
// //por querySelector, por id
// const divsRojo = document.querySelector('#div-rojo1')
// console.log(divsRojo);
// //este query devuelve todos los los elementos con etiqueta div
// const divsRojos = document.querySelectorAll("div")
// console.log(divsRojos);
// -------------------------------------------------------------------------------------------------------------------------

//inserta dentro del div 'mi-div' un input, un botón y haz que al clicar ese botón, muestre el valor del input

//const miDiv = document.getElementById('mi-div')
// const input = document.createElement("input")
// const boton = document.createElement("button")
// boton.innerText = "Enviar"
// miDiv.appendChild(input)
// miDiv.appendChild(boton)

// boton.addEventListener('click',()=>{
//     console.log(input.value);
// })

// -------------------------------------------------------------------------------------------------------------------------

//Recrea el ejercicio del login pero haciéndolo todo de manera dinámica desde javascript
// const inputUser = document.createElement("input")
// const inputPass = document.createElement("input")
// const botonLogin = document.createElement("button")
// botonLogin.innerText = 'Login'
// const bbddUser = 'admin'
// const bbddPass = '1234'

// miDiv.appendChild(inputUser)
// miDiv.appendChild(inputPass)
// miDiv.appendChild(botonLogin)

// botonLogin.addEventListener('click',()=>{
//     inputUser.value === bbddUser && inputPass.value === bbddPass ? console.log('LOGIN CORRECTO') : console.log('LOGIN INCORRECTO')
// })
// -------------------------------------------------------------------------------------------------------------------------
//Otra manera de crear elementos sin utilizar .createElement es utilizando .innerHTML
//miDiv.innerHTML = "<input id='input-usuario' type='text'>"
// -------------------------------------------------------------------------------------------------------------------------
//Crear calculadora
// const divCalculadora = document.getElementById('calculadora')
// divCalculadora.innerHTML = `<input id="input-calculadora" type="text">`

// const valores =[0,1,2,3,4,5,6,7,8,9,"+","-","*","/"]
// const calculadora = {
//     '0':{
//         param: '0',
//         valor: 0,
//         clase: 'num',
//     },
//     '1':{
//         param: '1',
//         valor: 1,
//         clase: 'num',
//     },
//     '2':{
//         param: '2',
//         valor: 2,
//         clase: 'num',
//     },
//     '3':{
//         param: '3',
//         valor: 3,
//         clase: 'num',
//     },
//     '4':{
//         param: '4',
//         valor: 4,
//         clase: 'num',
//     },
//     '5':{
//         param: '5',
//         valor: 5,
//         clase: 'num',
//     },
//     '6':{
//         param: '6',
//         valor: 6,
//         clase: 'num',
//     },
//     '7':{
//         param: '7',
//         valor: 7,
//         clase: 'num',
//     },
//     '8':{
//         param: '8',
//         valor: 8,
//         clase: 'num',
//     },
//     '9':{
//         param: '9',
//         valor: 9,
//         clase: 'num',
//     },
// }
// for (const elemento in calculadora) {
//     console.log(elemento);
// }
// //QUITAR LAS CLASES, CAMBIAR EL ARRAY POR UN OBJETO Y METERLE LOS ESTILOS
// for (const valor of valores) {
//     let clase = "btn-calc"
//     divCalculadora.innerHTML += `<button id="btn-${valor}" class="${clase}">${valor}</button>`
// }
// divCalculadora.innerHTML += `<button id="btn-igual" class="btn-calc btn-op">=</button>`
// divCalculadora.innerHTML += `<button id="btn-clean" class="btn-calc btn-op">C</button>`

// //ESTE INPUT DEBE IR DEBAJO DE LOS FOR PARA CREAR BOTONES PORQUE SI NO, NO ENCUENTRA LOS VALORES
// const input = document.getElementById('input-calculadora')

// for (const valor of valores) {
//     const boton = document.getElementById(`btn-${valor}`)
//     boton.addEventListener('click',()=>{
//     input.value += valor
//     })
// }
// const btnIgual = document.getElementById('btn-igual')
// btnIgual.addEventListener('click',()=>{
//     const resultado = input.value
//     input.value = eval(resultado)
// })
// const btnClean = document.getElementById('btn-clean')
// btnClean.addEventListener('click',()=>{
//     input.value = ''
// })
// -------------------------------------------------------------------------------------------------------------------------
// const userInput = document.getElementById('input-user')
// userInput.addEventListener('blur',()=>{
//     console.log('soy el userInput y he perdido el foco');
// })
// userInput.addEventListener('focus',()=>{
//     console.log('soy el userInput y tengo el foco');
// })
// userInput.addEventListener('keydown',()=>{
//     console.log('Presiona tecla');
// })
// userInput.addEventListener('keyup',(event)=>{
//     console.log('Suelta tecla', event);
// })
// -------------------------------------------------------------------------------------------------------------------------
// const divRojo = document.querySelector('.rojo')
// const divVerde = document.querySelector('.verde')

// divRojo.addEventListener('click',()=>{
//     console.log('Soy el div rojo');
// })
// divVerde.addEventListener('click',(event)=>{
//     console.log('Soy el div verde');
//     //stopPropagation sirve para evitar que el evento se propague del hijo al padre. Si no lo ponemos, saltaría también el evento click del padre 'divRojo'
//     event.stopPropagation()
// })
// -------------------------------------------------------------------------------------------------------------------------
// const miDiv = document.getElementById('mi-div')
// miDiv.style.backgroundColor = "grey"
// miDiv.style.width = "300px"
// miDiv.style.height = "300px"
// -------------------------------------------------------------------------------------------------------------------------
//Crear un div verde y crear 4 botones (arriba, abajo, derecha e izquierda)
//que al pulsarlos, mueva el div 1 pixel en esa dirección
const body = document.querySelector('body')

//crear botones de movimiento
body.innerHTML += `<div id="div-botones" class="botones"></div>`

const divBotones = document.getElementById('div-botones')
divBotones.innerHTML += `<button id="btn-0" class="botones">ARRIBA</button>`
divBotones.innerHTML += `<button id="btn-1" class="botones">ABAJO</button>`
divBotones.innerHTML += `<button id="btn-2" class="botones">IZQUIERDA</button>`
divBotones.innerHTML += `<button id="btn-3" class="botones">DERECHA</button>`

//crear div verde y meterlo en el body

body.innerHTML += `<div id="div-verde" class="div-verde"></div>`
const divVerde = document.getElementById('div-verde')

let x = 50
let y = 50
const rgb = {
    red: 0,
    green: 128,
    blue: 0
}
//añadir eventos a los botones
for (let i = 0; i <= 3; i++) {
  const boton = document.getElementById(`btn-${i}`);
  switch (i) {
    case 0:
      boton.addEventListener("click", () => {
        divVerde.style.top = `${x--}px`;
        rgb.green -= 5;
        divVerde.style.backgroundColor = `rgb(${rgb.red},${rgb.green},${rgb.blue})`;
      });
      break;
    case 1:
      boton.addEventListener("click", () => {
        divVerde.style.top = `${x++}px`;
        rgb.green += 5;
        rgb.red += 5;
        divVerde.style.backgroundColor = `rgb(${rgb.red},${rgb.green},${rgb.blue})`;
      });
      break;
    case 2:
      boton.addEventListener("click", () => {
        divVerde.style.left = `${y--}px`;
        rgb.blue += 5;
        rgb.green -= 5;
        divVerde.style.backgroundColor = `rgb(${rgb.red},${rgb.green},${rgb.blue})`;
      });
      break;
    case 3:
      boton.addEventListener("click", () => {
        divVerde.style.left = `${y++}px`;
        rgb.green += 5;
        rgb.red -= 5;
        rgb.blue += 5;
        divVerde.style.backgroundColor = `rgb(${rgb.red},${rgb.green},${rgb.blue})`;
      });
      break;
  }
}
//mover el div
