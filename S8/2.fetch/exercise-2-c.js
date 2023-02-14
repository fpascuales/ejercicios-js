const divResultados$$ = document.querySelector('#resultado')
const input = document.querySelector('input')
const btn = document.querySelector('button')

btn.addEventListener('click', async () => {
    divResultados$$.innerHTML = ''
    const resultado = await fetch(`https://api.nationalize.io?name=${input.value}`)
    const obj = await resultado.json()
    for (const country of obj.country) {
        const divProb$$ = document.createElement("div")
        divProb$$.setAttribute("id", country.country_id)
        divProb$$.style.display = "flex"

        const texto$$ = document.createElement("p")
        texto$$.innerHTML = `El nombre ${input.value} tiene un ${country.probability}% de ser de ${country.country_id}`
        
        const btnX$$ = document.createElement("button")
        btnX$$.setAttribute("id", country.country_id)
        btnX$$.innerHTML = 'X'

        btnX$$.addEventListener('click', () => {
            eliminarDiv(country.country_id)
        })

        divProb$$.appendChild(texto$$)
        divProb$$.appendChild(btnX$$)
        
        divResultados$$.appendChild(divProb$$)
    }
})

const eliminarDiv = (idDivBorrar) => {
    const divBorrar = document.querySelector(`#${idDivBorrar}`)
    divResultados$$.removeChild(divBorrar)
}