const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const body = document.querySelector('body')
body.innerHTML += `<ul class="countries"></ul>`
for (const country of countries) {
    const ul = document.querySelector('.countries')
    ul.innerHTML += `<li class="country">${country}</li>`
}