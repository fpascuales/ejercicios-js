//Dado el siguiente array, devuelve un array con sus nombres utilizando .map().


const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];

function usuarios(unArray) {
    return unArray.name
}
console.log(users.map(usuarios));

