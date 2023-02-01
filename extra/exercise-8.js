// Dado el siguiente javascript, crea una función `attack` a la que le pases como parametro
// las dos naves y simule un disparo de la primera nave a la segunda.

// Esta función generara un numero aleatorio de 1 al numero de la propiedad `.damage` de la primera nave y
// le restará el  resultado al valor de la propiedad `.pv` de la segunda nave.
// Ejecuta la función tantas veces como quieras.

const ship1 = {name: "Banca rota", damage: 44, pv: 150};

const ship2 = {name: "Cacique pero no", damage: 66, pv: 124}

function attack(nave1, nave2) {
    let fire = Math.round(Math.random() * nave1.damage )
    nave2.pv = nave2.pv - fire
    return (`La nave '${nave1.name}', con un disparo de ${fire} puntos, dejó la nave '${nave2.name}' con ${nave2.pv} puntos de vida.`)
}
console.log(attack(ship1, ship2))