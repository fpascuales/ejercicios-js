const db = {
    tareas:[]
}
const listaTareas = document.querySelector('#lista-tareas')

const divAddTarea = document.createElement("div")
const inputAddTarea = document.createElement("input")
const btnAddTarea = document.createElement("button")
const ulTarea = document.createElement("ul")

const divTarea = document.createElement("div")
const spanTarea = document.createElement("span")


btnAddTarea.innerHTML = "➕"

listaTareas.appendChild(divAddTarea)
listaTareas.appendChild(ulTarea)
divAddTarea.appendChild(inputAddTarea)
divAddTarea.appendChild(btnAddTarea)


// listaTareas.innerHTML += `<div id="add-tarea"><input id="input-tarea"><button id="btn-add">Añadir</button></div>`
// listaTareas.innerHTML += `<ul class="b-lista"></ul>`
// const inputTarea = document.querySelector('#input-tarea')
// const btnAdd = document.querySelector('#btn-add')

//Ejercicio: añadir un evento de click al botón añadir para que añada una tarea a db.tareas
//modificar meterTarea() para meter en el array objetos con {id: numbero, tarea: string, hecha: false}

function meterTarea() {
    // if (db.tareas.id) {
    //   id = db.tareas[db.tareas.length - 1].id + 1
    // }
    const textTarea = inputAddTarea.value.trim();
    const existeTarea = db.tareas.find(obj => obj.tarea === textTarea)
        if(textTarea !== ""){
            if(!existeTarea){
                db.tareas.push({ id: db.tareas.length, tarea: textTarea, hecha: false })
                listarTareas()
                inputAddTarea.value = ''
            }
            else{
                inputAddTarea.value = "La tarea ya existe"
            }
        }
        else{
            inputAddTarea.value = "Meta un valor correcto"
        }
        inputAddTarea.focus()
}

function listarTareas() {
    ulTarea.innerHTML = ''
    for (const tarea of db.tareas) {
        ulTarea.innerHTML += `<li>
        <div>
        <span>${tarea.tarea}</span><button id="btn-t-h${tarea.id}" class="b-btn-hecho">✔️</button><button id="btn-t-b${tarea.id}">🗑️</button></div></li>`
    }
}

    // const btnsHecho = document.querySelectorAll('.btns-hecho')
    // for (const botonHecho of btnsHecho) {
    //     botonHecho.addEventListener('click',()=>{
    //         console.log(botonHecho);
    //     })
    // }

btnAddTarea.addEventListener('click',()=>{
    meterTarea()

})

//Ejercicio: añadir evento de keyup al input para que al pulsar el enter, se añada la tarea a la base de datos

inputAddTarea.addEventListener('keyup',(event)=>{
    if(event.key === 'Enter'){
        meterTarea()
    }
})

//crea una función pintarTareas() que recorra las tareas de la base de datos y las pinte en el ul, utilizando li para cada tarea de la lista


//buscar el removeChild() llamando desde el padre listaTareas.removeChild(el div de la tarea a borrar)
//div.parentNode.removeCHild(div) es decir: div, dile a tu padre que te elimine
//removeChild antes de eliminarlo nos lo devuelve, por si lo queremos guardar para añadir luego

//cuando pulsamos hecha, la propiedad hecha debe ir a true y el texto cambiarlo
