const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const divPrintHere = document.querySelector('[data-function="printHere"]')
divPrintHere.innerHTML += `<ul id="cars"></ul>`
for (const car of cars) {
    const ul = document.querySelector('#cars')
    ul.innerHTML += `<li>${car}</li>`
}