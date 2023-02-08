import { Dia } from "./dia.js";
import { estadoCieloToEmoji } from "./helpers.js";
import { getClimaPorDiaSemana } from "./api.js";
const semanaDiv = document.querySelector('#div-semana')
const ul = document.createElement("ul")
semanaDiv.appendChild(ul)

const semana = [
    // new Dia('lunes', 20, 70, 'soleado'),
    // new Dia('martes', 23, 30, 'soleado'),
    // new Dia('miercoles', 24, 45, 'nublado'),
    // new Dia('jueves', 19, 90, 'lluvioso'),
    // new Dia('viernes', 26, 65, 'nublado'),
    // new Dia('sabado', 23, 43, 'soleado'),
    // new Dia('domingo', 25, 20, 'soleado'),
]
//Hacer una función que dado un objeto de tipo Dia, lo meta en el array semana
const addDia = (dia) =>{
    semana.push(dia)
    const li = document.createElement("li")
    li.innerHTML = `<span>Día: ${dia.diaSemana}, Temperatura: ${dia.temperatura}ºC, Humedad: ${dia.humedad}, Cielo: ${estadoCieloToEmoji(dia.estadoCielo)}</span>`
    ul.appendChild(li)
}
const diasSemana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]
//este for envía la consulta de la api
for (const dia of diasSemana) {
    getClimaPorDiaSemana(dia, addDia)
}
//Crear un ul dentro del semanaDiv y para cada día de la semana crear un li que muestre todos los datos de ese día


//-------------------lo de oscar
import { Dia } from "./dia.js"
import { estadoCieloToEmoji} from './helpers.js'
import {getClimaPorDiaSemana, getClimaPorDiaSemanaAsync} from './api.js'
const semanaDiv = document.getElementById('div-semana')
const ul = document.createElement('ul')
semanaDiv.appendChild(ul)
const semana = []
const diasSemana = ["lunes","martes","miercoles","jueves","viernes",
"sabado","domingo"]
/** * hacer una funcion, que dado un objeto de tipo Dia * lo meta en el array semana */function addDia(dia){
    semana.push(dia)
    const li = document.createElement('li')
    const span = document.createElement('span')
    span.innerHTML = `${estadoCieloToEmoji(dia.estadoCielo)} ${dia.diaSemana} ${dia.temperatura}ºC`    li.appendChild(span)
    ul.appendChild(li)
}
for(const dia of diasSemana){
    //getClimaPorDiaSemana(dia,addDia)
      const diaObj =  await getClimaPorDiaSemanaAsync(dia)
    addDia(diaObj)
}