const btnFetch = document.querySelector('#btn-fetch')
const contenedor = document.querySelector('#contenedor')

btnFetch.addEventListener('click', async ()=>{
    contenedor.innerHTML = ''
    //bloquear botón
    btnFetch.setAttribute("disabled", true)
    const select = document.querySelector('#select-dia')
    const resultado = await fetch(`https://meteo-de-oscar.proxy.beeceptor.com/${select.value}`)
    const obj = await resultado.json()
    dibujarDatosDia(obj)
    btnFetch.removeAttribute("disabled")
})

function dibujarDatosDia(dia) {
    const spanDia = document.createElement("span")
    spanDia.innerHTML = dia.temperatura
    contenedor.appendChild(spanDia)
}