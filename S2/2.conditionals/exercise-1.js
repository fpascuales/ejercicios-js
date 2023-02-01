//Comprueba en cada uno de los usuarios que tenga almenos dos trimestres aprobados y añade la propiedad isApproved a true o false en consecuencia.
//Una vez lo tengas compruebalo con un console.log.

const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]
let aprobado = 0
for (const alumn in alumns) {
    alumns[alumn].T1 ? aprobado++ : ""
    alumns[alumn].T2 ? aprobado++ : ""
    alumns[alumn].T3 ? aprobado++ : ""
    aprobado >= 2 ? (alumns[alumn].isApproved =true, console.log("Alumno aprobado: ", alumns[alumn].name)) : (alumns[alumn].isApproved =false, console.log("Alumno suspendido: ", alumns[alumn].name))
    aprobado = 0
}
console.log("Listado de alumnos.- ", alumns);