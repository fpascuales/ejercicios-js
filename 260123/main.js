const inputUser = document.getElementById('input-user')
const inputPass = document.getElementById('input-pass')
const botonLogin = document.getElementById('boton-login')

//CREO UNAS CREDENCIALES PARA 'SIMULAR' LOS DATOS DE LA BBDD
const bbddUser = 'kiko'
const bbddPass = '1234'
// //poner todos los inputs y todos los elementos que quiera traer del HTML en la parte superior del archivo .js
// const botonSaludar = document.getElementById('boton-saludar')
// const botonLimpiar = document.getElementById('boton-limpiar')

// const inputTexto = document.getElementById('input-texto')

// let contador = 0

// //Hacer que el contador aumente uno y mostrar el valor, cada vez que el usuario haga click
// // botonSaludar.addEventListener('click',()=>{
// //     contador++
// //     contador === 1 ? console.log(`Botón pulsado ${contador} vez`) : console.log(`Botón pulsado ${contador} veces`)
// // })
// // botonSaludar.innerHTML = "Adiós"

// // //Añade un escuchador de eventos 'click' que muestre el contenido del texto del botón
// // botonSaludar.addEventListener('click',()=>{
// //     console.log(botonSaludar.innerHTML);
// // })

// botonSaludar.addEventListener('click',()=>{
//     console.log(inputTexto.value);
//     //inputTexto.value = ""     LIMPIARÍA EL TEXTO DEL INPUT CUANDO LO PULSO
// })

// //Añade un botón nuevo al html que tenga como título 'limpiar' y que tenga como evento el limpiar el texto del input
// botonLimpiar.addEventListener('click',()=>{
//     inputTexto.value = ''
// })

//teniendo los elementos del html. Cuando hagamos click en el botón login
//comprobar si los valores de los campos coinciden con los credenciales correctos en caso que si, mostrar console.log('LOGIN CORRECTO')
//en caso contrario mostrar console.log('LOGIN INCORRECTO')

botonLogin.addEventListener('click',()=>{
    inputUser.value === bbddUser && inputPass.value === bbddPass ? console.log('LOGIN CORRECTO') : console.log('LOGIN INCORRECTO')
})