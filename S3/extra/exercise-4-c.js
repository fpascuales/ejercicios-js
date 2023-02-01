// # Español
// Basandote en el ejercicio anterior.
//Crea un botón para cada uno de los elementos de las listas que elimine
//ese mismo elemento del html.

const countries = [
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
  ];
  const body = document.querySelector("body")
  body.innerHTML += `<ul id="lista"></ul>`
  let i = 1
  for (const country of countries) {
    const ul = document.querySelector("#lista")
    ul.innerHTML += `<li id="country${i}" class="country"><div><h4>${country.title}</h4><img src="${country.imgUrl}"></div><button id="btn-remove${i}">Eliminar</button></li>`
    i++
}
const countriesRemove = document.querySelectorAll('.country')
for(let i = 1; i <= countriesRemove.length; i++){
    const btnRemove = document.querySelector(`#btn-remove${i}`)
    const countryRemove = document.querySelector(`#country${i}`)
    btnRemove.addEventListener('click',()=>{
        countryRemove.remove()
    })
}
