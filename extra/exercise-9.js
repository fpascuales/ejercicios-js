// vamos a tener que hacer una función la cual reciba un array, os dejamos un array por aquí por si no estais inspirados
// y con ese array que recibe, teneis que envolver con asteriscos cada string y darles un salto de linea.
// Mas abajo esta la devolución de como deberia de quedar.


const frutas = ['pera', 'manzana', 'tomate' ,'piña','naranja']
// [
//   "*****\n*pera*\n*****",
//   "******\n*manzana*\n******",
//   "*******\n*tomate*\n*******"
// ]

function asterisco(elArray) {
    const cad1 = "*****\n*"
    const cad2 = "*\n*****"
    for (let i = 0; i < elArray.length; i++) {
        elArray[i] = cad1.concat(elArray[i].concat(cad2))
    }
    return elArray
}
console.log(asterisco(frutas));
