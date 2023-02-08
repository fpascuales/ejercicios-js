// //Función haciéndola con promesas. Aquí no retorno nada.
// //No me permiten saber cuándo se ejecuta la acción

// export const getClimaPorDiaSemana = (dia,callback) =>{ //callback es la función addDia
//     //llamada a la api
//     fetch(`https://meteo-de-oscar.proxy.beeceptor.com/${dia}`)
//     .then(function (resultado) {
//         //ahora tengo que pillar el resultado que es un JSON
//         resultado.json()
//         .then(function(diaObj){
//             console.log(diaObj)
//             callback(dia)
//         })
//         .catch(function(err){
//             console.log(dia, err)
//         })
//     })
//     .catch(function (err){
//         console.log(err)
//     })
//     //then es para hacer algo si todo va bien
//     //catch es para cuando algo va mal
// }

// //------------------ lo de oscar

// export function getClimaPorDiaSemana(dia,cb){
//     console.log(cb)
//     // llamada a la api    fetch(`https://meteo-de-oscar.proxy.beeceptor.com/${dia}`)
//     .then(function (resultado){
//         resultado.json()
//         .then(function(diaObj){
//             console.log(dia)
//             cb(diaObj)
//         })
//         .catch(function(err){
//             console.log(dia, err)
//         })
//     })
//     .catch(function (err){
//         console.log(err)
//     })
//     // devolver el resultado
// }
//Función hacinéndola con await y async
export async function getClimaPorDiaSemana(dia){
    const resultado = await fetch(`https://meteo-de-oscar.proxy.beeceptor.com/${dia}`)
    const diaObj = await resultado.json()
    return diaObj}