const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']; 
const copiaColors = [...colors].filter(x => x !== 'amarillo')
console.log(copiaColors)