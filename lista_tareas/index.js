const db = {
    tareas:[]
}

const listaTareas = document.querySelector('#lista-tareas')
listaTareas.innerHTML += `<div id="add-tarea"><input id="input-tarea"><button id="btn-add">Añadir</button></div>`
listaTareas.innerHTML += `<ul class="b-lista"></ul>`
const inputTarea = document.querySelector('#input-tarea')
const btnAdd = document.querySelector('#btn-add')

//Ejercicio: añadir un evento de click al botón añadir para que añada una tarea a db.tareas
//modificar meterTarea() para meter en el array objetos con {id: numbero, tarea: string, hecha: false}

function meterTarea() {
    if (!db.tareas.id) {
        const id = 0
    }
    else{
        id += 1
    }
    const textTarea = inputTarea.value.trim()
        if( textTarea !== '' && !db.tareas.includes(textTarea)){
            console.log(`Tarea ${textTarea}, id: ${id}`);
        db.tareas.push({id: id, tarea: textTarea, hecha: false })
        pintarTareas()
    }
    inputTarea.value = ''
    inputTarea.focus()  //para recuperar el foco en el input
    console.log(db);
}

function pintarTareas() {
    const ul = document.querySelector('ul')
    ul.innerHTML = ''
    for (const tarea of db.tareas) {
        ul.innerHTML += `<li>
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

btnAdd.addEventListener('click',()=>{
    meterTarea()

})

//Ejercicio: añadir evento de keyup al input para que al pulsar el enter, se añada la tarea a la base de datos

inputTarea.addEventListener('keyup',(event)=>{
    if(event.key === 'Enter'){
        meterTarea()
    }
})

//crea una función pintarTareas() que recorra las tareas de la base de datos y las pinte en el ul, utilizando li para cada tarea de la lista


//buscar el removeChild() llamando desde el padre listaTareas.removeChild(el div de la tarea a borrar)
//div.parentNode.removeCHild(div) es decir: div, dile a tu padre que te elimine
//removeChild antes de eliminarlo nos lo devuelve, por si lo queremos guardar para añadir luego

//cuando pulsamos hecha, la propiedad hecha debe ir a true y el texto cambiarlo
