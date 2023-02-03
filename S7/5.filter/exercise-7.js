// Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola los streamers que incluyan la palabra
// introducida en el input. De esta forma, si introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
// introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.


const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];
const body$$ = document.querySelector('body')
const input$$ = document.querySelector('[data-function="toFilterStreamers"]');
const divStreamers$$ = document.createElement("div")
body$$.appendChild(divStreamers$$)

const mostrarBusqueda = (streamers) => {
  input$$.addEventListener("keyup", (event) => {
    if(event.key === 'Enter'){
      buscarStreamer(input$$.value, streamers)
      input$$.focus()
    }
  })
}
const buscarStreamer = (filtro, streamers) => {
  const filtradoStreamer = streamers.filter(
    (streamer) =>
    streamer.name.toLowerCase().includes(filtro.toLowerCase())
  )
    mostrarStreamers(filtradoStreamer)
}
const mostrarStreamers = (streamers) => {
  divStreamers$$.innerHTML = ""
  for (const streamer of streamers) {
    console.log(streamer.name);
    let streamerName$$ = document.createElement("span")
    streamerName$$.textContent = streamer.name
    divStreamers$$.appendChild(streamerName$$)
  }
}

const init= () => {
  mostrarBusqueda(streamers)
}
init()