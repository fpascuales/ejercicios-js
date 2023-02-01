const body = document.querySelector('body')
const div = document.createElement("div")
body.appendChild(div)
for(let i = 0; i <= 5; i++){
    div.innerHTML += `<p></p>`
}