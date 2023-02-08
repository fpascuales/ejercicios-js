import { Pokemon } from "./pokemon.js";
import { getPokemonsFromApi } from "./pokeapi.js";
const divPokedex$$ = document.querySelector('#div-pokedex')

const mapPokemons = (pokemons) => {
    const pokemonArray = []
    const pokemon = new Pokemon(pokemons.name, pokemons.sprites['front_default'], pokemons.types.map((type) => type.type.name).join(', '), pokemons.id)
    // return pokemons.map((pokemon) => ({
    //     name: pokemon.name,
    //     image: pokemon.sprites['front_default'],
    //     type: pokemon.types.map((type) => type.type.name).join(', '),
    //     id: pokemon.id
    // }))
    pokemonArray.push(pokemon)
    return pokemonArray
}

const drawPokemons = (pokemons) => {
    divPokedex$$.innerHTML = ""
    for (const pokemon of pokemons) {
        const pokemonLi$$ = document.createElement("div")
        pokemonLi$$.id = pokemon.id //CAMBIAR EL LI POR DIV

        const pokemonName$$ = document.createElement("h3")
        pokemonName$$.innerHTML = pokemon.name

        const pokemonImg$$ = document.createElement("img")
        pokemonImg$$.setAttribute("src", pokemon.img)
        pokemonImg$$.setAttribute("alt", pokemon.name)

        const pokemonType$$ = document.createElement("p")
        pokemonType$$.innerHTML = pokemon.type

        pokemonLi$$.appendChild(pokemonName$$)
        pokemonLi$$.appendChild(pokemonImg$$)
        pokemonLi$$.appendChild(pokemonType$$)

        ol$$.appendChild(pokemonLi$$)
    }
}

const drawSearch = (pokemons) => {
    const input$$ = document.querySelector('input')
    input$$.addEventListener("input", () => {
        searchPokemons(input$$.value, pokemons)
    })
}

const searchPokemons = (filtro, pokemons) => {
    let filteredPokemons = pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(filtro.toLowerCase()))
    drawPokemons(filteredPokemons)
}

// const init = () => {
//     //const pokemons = getPokemons()
//     const mappedPokemons = mapPokemons(pokemons)
//     drawPokemons(mappedPokemons)
//     drawSearch(mappedPokemons)
// }
// init()
for (let i = 1; i <= 10; i++){
    const pokemon = await getPokemonsFromApi(i)
    //mapPokemons(pokemon)
    const mappedPokemons = mapPokemons(pokemon)
    drawPokemons(mappedPokemons)
    drawSearch(mappedPokemons)
}