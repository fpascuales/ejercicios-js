function multiplicar(num1, num2) {
  const resultado = num1 * num2;
  return resultado;
}

//función que sume 3 números pasados como parámetros

function sumaTres(num1, num2, num3) {
  return num1 + num2 + num3;
}
//console.log("Suma de los tres números",sumaTres(2,6,12));

//utilizando la función empiezaPorP y dado un array nombresPersona, usa un for y aplica la función empiezaPorP a cada nombre para mostrar por consola si empieza o no
function empiezaPorP(palabra) {
  return palabra[0] === "p" || palabra[0] === "P";
}
const nombresPersona = ["pepe", "jose", "laura"];

for (const persona of nombresPersona) {
  //console.log(persona, "empieza por p?", empiezaPorP(persona));
}

//crear función para buscar la temperatura más alta
const temperaturasMensaje = "35,36,37,40,37,34";
const temperaturasSvq = temperaturasMensaje.split(",");

function buscarMaxima(temperaturas) {
  let temperaturaMasAlta = Number(temperaturas[0]);
  for (const temperatura of temperaturas) {
    if (Number(temperatura) > temperaturaMasAlta) {
      temperaturaMasAlta = Number(temperatura);
    }
  }
  return temperaturaMasAlta;
}
//console.log(buscarMaxima(temperaturasSvq));

//crear función que pase de grados celsius a farenheit

function aFarenheit(celsius) {
  return (9 / 5) * celsius + 32;
}
//console.log(aFarenheit(30));

//función para devolver el mínimo entre dos números

function minimo(num1, num2) {
  return num1 < num2 ? num1 : num2;
}
//console.log(minimo(4,6));

//hacer función esLoginValido, que recibe un string (usuario) y otro string (clave) y devuelve si en la BD (loginCorrecto) existe ese par de credenciales

const loginCorrecto = {
  user: "admin",
  pass: "@@1122",
};

const usuario = {
  user: "admin",
  pass: "@@1122",
};

function esLoginValido(usuario) {
  return (
    usuario.user === loginCorrecto.user && usuario.pass === loginCorrecto.pass
  );
}
//console.log(esLoginValido(usuario));

//hacer función que me diga si el argumento que recibimos por parámetro empieza por número empiezaPorNumero()

const stringT = "43asdt4ds";
const stringF = "dsa234rdfg";

function empiezaPorNumero(cadena) {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(Number(cadena[0]));
}

//console.log(empiezaPorNumero(stringF));

//define una función maxArray que dado un array devuelva su número mayor

const numeros = [1, 5, 7, 2, 20, 47, 9, 18];

// function maxArray(arrayNum) {
//     let max = arrayNum[0]
//     for (const num of arrayNum){
//         num > max ? max = num : ""
//     }
//     return max
// }
function maxArray(arrayNum) {
  return Math.max(...arrayNum);
}
//console.log(maxArray(numeros));

//define una función celsiusAFarenheit que dado un array con temperaturas en celsius, devuelve un array con las temperaturas convertidas en Farenheit

const arrayC = [30, 32, 27, 28, 26, 38];

function celsiusAFarenheit(grados) {
  let arrayF = [];
  for (const temp of grados) {
    arrayF.push(Math.round(aFarenheit(temp)));
  }
  return arrayF;
}
//console.log(celsiusAFarenheit(arrayC));

function ejecutorFuncion(funcion) {
  return funcion();
}
function ejecutorAccion(accion) {
  accion();
}

function f1() {
  return 1;
}
function f2() {
  return 2;
}
//define una función que reciba dos funciones, las ejecute y devuelva el máximo entre las dos resultados

function maximoDosFunciones(f1, f2) {
  const v1 = f1();
  const v2 = f2();
  return v1 > v2 ? v1 : v2;
}
//console.log(maximoDosFunciones(f1,f2));

//realiza un filtro para palabras con longitud mayor que 5 y aplícala al siguiente array

const animales = ["perro", "gato", "periquito"];

function filtroMasLargasQue5(palabras) {
  return palabras.length > 5;
}

//console.log(animales.filter(filtroMasLargasQue5));

//dado el siguiente arary de objetos. escribe un filtro y mostrar aquelloso con nota mayor a 7

const alumnos = [
  { nombre: "oscar", nota: 5 },
  { nombre: "luis", nota: 6 },
  { nombre: "manuel", nota: 10 },
];

function notaMayorA7(alumno) {
  return alumno.nota > 7;
}
//console.log(alumnos.filter(notaMayorA7));

const numeros2 = [1, 2, 3];

function incrementar(numero) {
  return numero + 1;
}

const numerosIncrementados = numeros2.map(incrementar);
//console.log(numerosIncrementados);

//escribir función para aplicar a traves de map que aumente la nota de los alumnos en 1 punto

function incrementoEn1(alumno) {
  alumno.nota += 1;
  return alumno;
}

//console.log(alumnos.map(incrementoEn1));

//dado un array numerico. filtrar los elementos entre 3 y 6 incluidos y elevarlos al cuadrado

const numeros3 = [1, 2, 3, 4, 5, 6, 7, 8];

function entre3Y6(numero) {
  return numero >= 3 && numero <= 6;
}
function alCuadrado(numero) {
  return numero * numero;
}

//console.log(numeros3.filter(entre3Y6).map(alCuadrado));

//define una función que reciba un dni y devuelva la persona que se encuentra en el array de personas con ese dni

const arrayPersonas = [
  { dni: "156600430M", nombre: "pepe" },
  { dni: "082281712X", nombre: "raul" },
];

function buscarPersonaPorDniArray(dni) {
  let existePersona = null;
  for (const persona of arrayPersonas) {
    if (persona.dni === dni) {
      existePersona = persona;
      break;
    }
  }
  return existe;
}
//console.log(buscarPersonaPorDniArray('156600430M'));

const objPersona = {
  "156600430M": { dni: "156600430M", nombre: "pepe" },
  "082281712X": { dni: "082281712X", nombre: "raul" },
};

//define una función que reciba un dni y devuelva la persona que se encuentra en el objeto. En caso de no encontrarla, devolvver null
function buscarPersonaPorDniObjeto(dni) {
  let existePersona = objPersona[dni];
  if (existePersona) {
    return existePersona
  }
  return null
}
//console.log(buscarPersonaPorDniObjeto("156600430M"));

//const universidad = [{asignatura: 'mates', alumnos: 5}, {asignatura: 'fisica', alumnos: 10}, {asignatura: 'programacion', alumnos: 15}]

//dado el array universidad, crea una función que reciba @param nombre de una asignatura y devuelva número de alumnos que tiene. Si no existe, devolver 0 alumnos

function alumnosMatriculados(asignatura) {
    let numAlumnos = 0
    for (const asignaturas of universidad) {
        if (asignaturas.asignatura === asignatura) {
            numAlumnos = asignaturas.alumnos
            break
        }
    }
    return numAlumnos
}

//console.log(alumnosMatriculados('masdtes'));

//define una función que defina un objeto asignatura y devuelva el número de alumnos, en caso de no encontrarla, devolver 0

const universidadObj = {
    mates:{asignatura: 'mates', alumnos: 5},
    fisica:{asignatura: 'fisica', alumnos: 10},
    programacion:{asignatura: 'programacion', alumnos: 15},
}

function alumnosMatriculadosObj(asignatura) {
    let clase = universidadObj[asignatura]
    if(clase){
        return clase.alumnos
    }
    return 0
}
// console.log(alumnosMatriculadosObj('programacion'));

const asignaturas = ["mates","lengua","ciencias","quimica","fisica","mates","ciencias","quimica","mates"]

//Dado el siguietne array, genearar un objeto que esté construido de la siguiente manera
// {"mates": 3,
// "lengua": 1,
// "ciencias": 2,
// "quimica": 2,
// "fisica": 1
// }
const asignaturasAnalisis = {}
for (const asignatura of asignaturas) {
    if (!asignaturasAnalisis[asignatura]) {
        asignaturasAnalisis[asignatura] = 1
    }
    else{
        asignaturasAnalisis[asignatura]++
    }
}
//console.log(asignaturasAnalisis);

const texto = "hola que tal"
//Define un objeto, que tenga como claves las letras del texto y como valores las veces que aparece
const textoAnalisis = {}

for (const letra of texto) {
    if (letra === ' ') {
        continue
    }
    if(!textoAnalisis[letra] ){
        textoAnalisis[letra] = 1
    }
    else{
        textoAnalisis[letra]++
    }
}

const universidad = [
    { asignatura: 'mates', turno: 'mañana', alumnos: 5 },
    { asignatura: 'mates', turno: 'tarde', alumnos: 5 },
    { asignatura: 'fisica', turno: 'mañana', alumnos: 10 },
    { asignatura: 'fisica', turno: 'tarde', alumnos: 8 },
    { asignatura: 'programacion', turno: 'tarde', alumnos: 15 },
    { asignatura: 'programacion', turno: 'mañana', alumnos: 9 },
]

/// dado este array, crea una función, que reciba un array como el anterior y una asignatura y devuelva un objeto, contando los alumnos que hay por asignatura

/**
 * @param arrayUniversidad
 * @param asignatura
 * @return objeto contando todos los alumnos por @asignatura
 */

function contarAlumnosPorAsignatura(arrayUniversidad, asignatura){
    const matriculados = {}
    for (const asignaturaTurno of arrayUniversidad) {
        if(!matriculados[asignaturaTurno.asignatura]){
            matriculados[asignaturaTurno.asignatura] = asignaturaTurno.alumnos
        }
        else{
            matriculados[asignaturaTurno.asignatura] += asignaturaTurno.alumnos
        }
    }
    return matriculados[asignatura]
}

/**
 * input = universidad[]
 * output =
 * {
*   mates: 10,
*   fisica: 18,
*   programacion: 24
 * }
 */
//console.log(contarAlumnosPorAsignatura(universidad, 'mates'));

//Función que diga si dado un array, la suma de sus elementos es igual a su lontigud
//@param array
//@return true si longitud de array es igual a la suma, false si no
const arrayParaSumarFalse = [45,4,13,28,10,3]
const arrayParaSumarTrue = [1,1,1,1]

function longitudArrayIgualASuma(array) {
    let suma = 0
    for (const valor of array) {
     suma += valor   
    }
    return suma === array.length
}
//console.log(longitudArrayIgualASuma(arrayParaSumarTrue));

//Dado un número y un carácter, crear una funciona que devuelve un array con dicho carácter repetidas las veces indicadas por el numero

function repetirCaracter(caracter, veces) {
    let caracterRepetido = []
    for (let i = 0; i < veces; i++) {
        caracterRepetido.push(caracter)
    }
    return caracterRepetido
}
//console.log(repetirCaracter('t', 20));

//Dado un array, crear una función que devuelva los elementos del array en orden inverso
const arrayNormal = [45,4,13,28,10,3]
function invertirArray(unArray) {
    let arrayInverso = []
    for (const valor of unArray) {
        arrayInverso.unshift(valor)
    }
    return arrayInverso
}
//console.log(invertirArray(arrayNormal));

//Dado un array, crear una función que elimie los elementos que no sean números usar función isNan

const arrayNumyDemas = [45,4,undefined,13,null,[28,10],{ asignatura: 'mates', turno: 'mañana', alumnos: 5 },'texto por poner algo',3, true, false]

function soloNumeros(arrayParaNumeros) {
    let arraySoloNumeros = []
    for (const valor of arrayParaNumeros) {
        !isNaN(valor) ? arraySoloNumeros.push(valor) : ""
    }
    return arraySoloNumeros
}
//console.log(soloNumeros(arrayNumyDemas));

//Dado un array de arrays, crear una función que devuelva un objeto compuesto por clave-valor
//convertir esto [['a',1],['b',2],['c',3]] en esto {a: 1, b: 2, c: 3}
const arrayDeArrays = [['a',1],['b',2],['c',3]]

function arrayAObjeto(elArrayDeArrays) {
    let elObjeto = {}
    for (const valor of elArrayDeArrays) {
        elObjeto[valor[0]] = valor[1]
    }    
    return elObjeto
}
//console.log(arrayAObjeto(arrayDeArrays));

//hacerlo a la inversa

const otroObjeto = {a: 1, b: 2, c: 3}

function objetoAArray(elObjeto) {
    let elArray = []
    for (const valor in elObjeto) {
        elArray.push([valor, elObjeto[valor]])
    }
    return elArray
}
//console.log(objetoAArray(otroObjeto));

function obtenerRandomEntre(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}
// genera un boleto con un numero del 10 al 30 (incluidos) y ejecuta la función obtenerRandomEntre, 100 veces (usa un for)
// o hasta que encuentres el resultado de tu boleto// si encuentras el boleto, muestra por consola: GANADOR
// si no lo encuentras tras las 100 tiradas, muestra por consola PERDEDOR

const boleto = 22
let repeticiones = 1
for (let i = 1; i <= 100 ; i++) {
  if(boleto === obtenerRandomEntre(10,100)){
    console.log(`GANADOR: ${obtenerRandomEntre(10,100)}, BOLETO: ${boleto}`);
  }
  repeticiones++
}
if(repeticiones === 100){
  console.log('PERDEDOR');
}