const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const body = document.querySelector('body')
const ul = document.createElement("ul")
body.appendChild(ul)
for (const app of apps) {
    ul.innerHTML += `<li class="app">${app}</li>`
}