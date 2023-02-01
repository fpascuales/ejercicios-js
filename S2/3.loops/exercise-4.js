//Usa un bucle forof para recorrer todos los juguetes y elimina los que incluyan la palabra `gato`. Recuerda que puedes usar la función `.includes()` para comprobarlo.

let toys = [{id: 5, name: 'Buzz MyYear'}, {id: 11, name: 'Action Woman'}, {id: 23, name: 'Barbie Man'}, {id: 40, name: 'El gato con Guantes'},{id: 40, name: 'El gato felix'}]
// for (const toy of toys) {
//     console.log("indice antes del splice:",toys.indexOf(toy));
//     toy.name.includes('gato') ? toys.splice(toys.indexOf(toy),1) : ""
//     console.log("indice:",toys.indexOf(toy));
// }
// console.log(toys);

let toys2= []
for (const toy of toys) {
    !toy.name.includes('gato') ? toys2.push(toy) : ""
}
toys = toys2
console.log(toys);