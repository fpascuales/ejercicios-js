const divsInsetHere = document.querySelectorAll('.fn-insert-here')
for (const divInsert of divsInsetHere) {
    divInsert.innerHTML += `<p>Voy dentro!</p>`
}