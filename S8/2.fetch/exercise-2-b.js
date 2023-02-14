const divResultado$$ = document.querySelector('#resultado')
const input = document.querySelector('input')
const btn = document.querySelector('button')

btn.addEventListener('click', async () => {
    divResultado$$.innerHTML = ''
    const resultado = await fetch(`https://api.nationalize.io?name=${input.value}`)
    const obj = await resultado.json()
    for (const country of obj.country) {
        const texto$$ = document.createElement("p")
        texto$$.innerHTML = `El nombre ${input.value} tiene un ${country.probability}% de ser de ${country.country_id}`
        divResultado$$.appendChild(texto$$)
    }
})

