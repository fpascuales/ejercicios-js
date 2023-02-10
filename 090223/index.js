const divLogs = document.getElementById('div-logs')
const input = document.getElementById('input')
const db = {
    logs: [
        {id: 1, text: 'Error en base de datos', date:'22:47'},
        {id: 2, text: 'Error en formulario', date:'22:48'},
        {id: 3, text: 'Error en impresora', date:'22:49'},
    ]
}
let temporizadorBusqueda = null
input.addEventListener('keyup', ()=>{
    //si el tempo está activo
    if(temporizadorBusqueda){
        //lo paro
        clearTimeout(temporizadorBusqueda)
    }
    temporizadorBusqueda = setTimeout(() => {
        console.log("estoy filtrando...");
        printarLogs(db.logs.filter(x=> x.text.toLowerCase().includes(input.value.toLowerCase())))
    },0.5*1000)
})

const printarLogs = (logFiltrados) => {
    divLogs.innerHTML = ''
    const tabla = document.createElement("table")
    tabla.className = "tabla-logs"
    const tableHead = document.createElement("thead")
    const trHead = document.createElement("tr")
    const th1 = document.createElement("th")
    const th2 = document.createElement("th")
    const th3 = document.createElement("th")

    th1.innerHTML = "Id"
    th2.innerHTML = "Mensaje"
    th3.innerHTML = "Fecha"

    trHead.appendChild(th1)
    trHead.appendChild(th2)
    trHead.appendChild(th3)
    tableHead.appendChild(trHead)

    const tableBody = document.createElement("tbody")
    for (const log of logFiltrados) {
        const trBody = document.createElement("tr")
        
        const tdId = document.createElement("td")
        tdId.innerHTML = log.id

        const tdText = document.createElement("td")
        tdText.innerHTML = log.text

        const tdDate = document.createElement("td")
        tdDate.innerHTML = log.date

        trBody.appendChild(tdId)
        trBody.appendChild(tdText)
        trBody.appendChild(tdDate)

        tableBody.appendChild(trBody)
    }

    tabla.appendChild(tableHead)
    tabla.appendChild(tableBody)
    divLogs.appendChild(tabla)
}
printarLogs(db.logs)

//clearTimeot
//clearInterval

// setInterval(()=>{
//     console.log("Hola")
// }, 2*1000)

//Generar un Interval que se ejecute cada 1500 ms, escriba "hola" por consola y se pare cuando haya dicho cuatro veces.
// let i = 1
// const diHola = setInterval(() => {
//     if(i === 4){
//         clearInterval(diHola)
//     }
//     else{
//         console.log("Hola")
//         i++
//     }
//     }, 1500);

//Genera un Interval que cada 1/10 s desplace un 1px la tabla de logs hacia abajo

let alto = 10
const tabla = document.querySelector('.tabla-logs')
const pxAbajo = setInterval(() => {
    tabla.style.top = `${alto + 1}px`
    alto++
}, 1000/10)