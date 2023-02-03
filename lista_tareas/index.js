const db = {
    tareas:[],
    tareasBorradas:[],
    id: 0
}

const listaTareas = document.querySelector('#lista-tareas')
const listaTEliminadas = document.querySelector('#tareas-eliminadas')
const divAddTarea = document.createElement("div")
const inputAddTarea = document.createElement("input")
const btnAddTarea = document.createElement("button")
const ulTarea = document.createElement("ul")
const ulTareaEliminada = document.createElement("ul")
divAddTarea.setAttribute("class", "b-tarea-add")
inputAddTarea.setAttribute("class", "input-add")
btnAddTarea.setAttribute("class", "b-btn b-btn--add")
ulTarea.setAttribute("class", "b-lista")
ulTareaEliminada.setAttribute("class", "b-lista")
btnAddTarea.innerHTML = "+"
listaTareas.appendChild(divAddTarea)
listaTareas.appendChild(ulTarea)
divAddTarea.appendChild(inputAddTarea)
divAddTarea.appendChild(btnAddTarea)
listaTEliminadas.appendChild(ulTareaEliminada)

const  meterTarea = () => {
    const textTarea = inputAddTarea.value.trim();
    const existeTarea = db.tareas.map(x=>x.tarea).includes(textTarea)
        if(textTarea !== ""){
            if(!existeTarea){
                db.id++
                db.tareas.push({ id: db.id, tarea: textTarea, hecha: false })
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
const tareasEliminadas = () => {
    ulTareaEliminada.innerHTML = ''
    for (const tarea of db.tareasBorradas) {
        const liTarea = document.createElement("li")
        const divTarea = document.createElement("div")
        const spanTarea = document.createElement("span")
        spanTarea.setAttribute("class", "b-nom-tarea")
        divTarea.setAttribute("class", "b-div-tarea")
        spanTarea.innerHTML = tarea.tarea
        ulTareaEliminada.appendChild(liTarea)
        liTarea.appendChild(divTarea)
        divTarea.appendChild(spanTarea)
    }
}
const listarTareas = () => {
    ulTarea.innerHTML = ''
    for (const tarea of db.tareas) {
        const liTarea = document.createElement("li")
        const divTarea = document.createElement("div")
        const spanTarea = document.createElement("span")
        const btnTHecho = document.createElement("button")
        const btnTBorrar = document.createElement("button")
        liTarea.setAttribute("id", `li-${tarea.id}`)
        btnTHecho.setAttribute("id", `btn-h${tarea.id}`)
        btnTBorrar.setAttribute("id", `btn-b${tarea.id}`)
        spanTarea.setAttribute("class", "b-nom-tarea")
        divTarea.setAttribute("class", "b-div-tarea")
        btnTHecho.setAttribute("class", "b-btn b-btn--hecho")
        btnTBorrar.setAttribute("class", "b-btn b-btn--borrar")
        spanTarea.innerHTML = tarea.tarea
        btnTHecho.innerHTML = "🗸"
        btnTBorrar.innerHTML = "X"
        ulTarea.appendChild(liTarea)
        liTarea.appendChild(divTarea)
        if(tarea.hecha){
            spanTarea.style.color = "green"
        }
        divTarea.appendChild(spanTarea)
        divTarea.appendChild(btnTHecho)
        divTarea.appendChild(btnTBorrar)
    }
    botonCheck()
}
const botonCheck = () => {
    for (const tarea of db.tareas) {
        const btnTareaHecha = document.querySelector(`#btn-h${tarea.id}`)
        const btnTareaBorrar = document.querySelector(`#btn-b${tarea.id}`)
        btnTareaHecha.addEventListener('click',()=>{
            completarTarea(tarea.id)
        })
        btnTareaBorrar.addEventListener('click',()=>{
            borrarTarea(tarea.id)
        })
    }
}
const completarTarea = (id) => {
    const liCompletar = document.querySelector(`#li-${id}`)
    const spanTarea = liCompletar.firstChild.firstChild //Preguntarle a oscar
    spanTarea.style.color = "green"
    db.tareas[id-1].hecha = true
}
const borrarTarea = (id) => {
    const ul = document.querySelector('ul')
    const liBorrar = document.querySelector(`#li-${id}`)
    ul.removeChild(liBorrar)
    const tareaBorrada = db.tareas.splice(id-1,1)
    //db.tareasBorradas.push({ id: tareaBorrada[0].id, tarea: tareaBorrada[0].tarea, hecha: tareaBorrada[0].hecha })
    db.tareasBorradas.push(tareaBorrada)
    //tareasEliminadas()
}
btnAddTarea.addEventListener('click',()=>{
    meterTarea()

})
inputAddTarea.addEventListener('keyup',(event)=>{
    if(event.key === 'Enter'){
        meterTarea()
    }
})
