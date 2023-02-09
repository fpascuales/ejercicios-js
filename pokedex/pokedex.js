import { getPokemonsFromApi } from "./pokeapi.js";
import { getPokemonsAbilities } from "./pokeapi.js";

document.addEventListener('DOMContentLoaded', async () =>{
    const pokemons = await getPokemonsFromApi()
    const mappedPokemons = mapPokemons(pokemons)
    drawPokemons(mappedPokemons)
    drawSearch(mappedPokemons)
    drawTypesMenu(mappedPokemons)
})

//ESPACIO CENTRAL DE LA POKEDEX
const mapPokemons = (pokemons) => {
        return pokemons.map((pokemon) => ({
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites['front_default'],
        type: pokemon.types.map((type) => type.type.name),
        abilities: pokemon.abilities.map((ability) => ability.ability),
        stats: pokemon.stats.map((stat) => {return {name: stat.stat.name, valor: stat.base_stat}}), //PREGUNTAR SI ESTO ES CORRECTO
        typeClass: pokemon.types[0].type.name   //Para darle estilo al div, según tipo principal
    }))
}

const drawPokemons = (pokemons) => {
    const divPokedex$$ = document.querySelector('#div-pokedex')
    divPokedex$$.innerHTML = ""
    for (const pokemon of pokemons) {
        const pokemonDiv$$ = document.createElement("div")

        pokemonDiv$$.setAttribute("id", pokemon.name)
        pokemonDiv$$.className = `pokemon-card pokemon-card--${pokemon.typeClass}`
        pokemonDiv$$.style.cursor = "pointer" //METER EN LA HOJA DE ESTILOS

        const cardHeader$$ = document.createElement("div")
        cardHeader$$.className = "card-header"

        const pokemonNum$$ = document.createElement("h3")
        pokemonNum$$.className = "card-num"
        pokemonNum$$.innerHTML = `#${pokemon.id}`

        const pokemonName$$ = document.createElement("h3")
        pokemonName$$.innerHTML = pokemon.name

        const cardBody$$ = document.createElement("div")
        cardBody$$.className = "card-body"

        const cardTypes$$ = document.createElement("div")
        cardTypes$$.className = "card-types"

        for (const type of pokemon.type) {
            const pokemonType$$ = document.createElement("span")
            pokemonType$$.className = "card-type"
            pokemonType$$.innerHTML = type
            cardTypes$$.appendChild(pokemonType$$)
        }        

        const cardImg$$ = document.createElement("div")
        cardImg$$.className = "card-img"

        const pokemonImg$$ = document.createElement("img")
        pokemonImg$$.setAttribute("src", pokemon.image)
        pokemonImg$$.setAttribute("alt", pokemon.name)
        pokemonImg$$.className = "card-pokemon-img"

        cardHeader$$.appendChild(pokemonNum$$)
        cardHeader$$.appendChild(pokemonName$$)

        cardImg$$.appendChild(pokemonImg$$)

        cardBody$$.appendChild(cardTypes$$)
        cardBody$$.appendChild(cardImg$$)
        
        pokemonDiv$$.appendChild(cardHeader$$)
        pokemonDiv$$.appendChild(cardBody$$)

        divPokedex$$.appendChild(pokemonDiv$$)
        searchPokemonFile(pokemon.name, pokemons)
    }
}

const drawSearch = (pokemons) => {
    const input$$ = document.querySelector('input')
    input$$.addEventListener("input", () => {
        searchPokemonsByName(input$$.value, pokemons)
    })
}

const searchPokemonsByName = (filtro, pokemons) => {
    const filteredPokemons = pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(filtro.toLowerCase()))
    drawPokemons(filteredPokemons)
}

//ESPACIO IZQUIERDA. MENÚ DE TIPOS

const drawTypesMenu = (pokemons) => {
    const divTypes$$ = document.querySelector('#div-types')
    const arrayTypes = []
    for (const pokemon of pokemons) {
        for (const type of pokemon.type) {
            if(!arrayTypes.includes(type)){
                arrayTypes.push(type)
                const divType$$ = document.createElement("div")
                divType$$.setAttribute("id", type)
                divType$$.className = `type-card type-card--${type} col-md-4`
                divType$$.style.cursor = "pointer" //METER EN LA HOJA DE ESTILOS

                const nameType$$ = document.createElement("span")
                nameType$$.className = "menu-type"
                nameType$$.innerHTML = type

                divType$$.appendChild(nameType$$)
                divTypes$$.appendChild(divType$$)

                drawSearchType(nameType$$.innerHTML, pokemons)
            }
        }
    }
}
const drawSearchType = (pokemonType, pokemons) => {
    const divType = document.querySelector(`#${pokemonType}`)
    divType.addEventListener('click', () => {
        searchPokemonsByType(divType.id, pokemons)
    })
}
const searchPokemonsByType = (filtro, pokemons) => {
    const filteredPokemons = pokemons.filter((pokemon) =>
      pokemon.type.includes(filtro))
    drawPokemons(filteredPokemons)
}

//ESPACIO DERECHA. FICHA POKEMON

const searchPokemonFile = (filtro, pokemons) => {
    const divPokemon = document.querySelector(`#${filtro}`)
    divPokemon.addEventListener('click', () => {
        const filteredPokemon = pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(filtro.toLowerCase()))
        drawPokemonFile(filteredPokemon)
    })
}

const drawPokemonFile = async (pokemon) => {
    const abilities = await getPokemonsAbilities(pokemon[0].abilities)
    //const filteredAbilities = filterAbilities(abilities)
    const divFicha = document.querySelector('#div-ficha')
    divFicha.innerHTML = ''
    const fichaPokemon$$ = document.createElement("div")

    const pokemonName$$ = document.createElement("h4")
    pokemonName$$.innerHTML = pokemon[0].name

    const pokemonImg$$ = document.createElement("img")
    pokemonImg$$.setAttribute("src", pokemon[0].image)
    pokemonImg$$.setAttribute("alt", pokemon[0].name)

    const pokemonNum$$ = document.createElement("span")
    pokemonNum$$.innerHTML = pokemon[0].id

    const divStats$$ = document.createElement("div")
    
    for (const stat of pokemon[0].stats) {
        const divStat$$ = document.createElement("div")
        divStat$$.setAttribute("class","") //DAR CLASE

        const statName$$ = document.createElement("span")
        statName$$.innerHTML = stat.name

        const statValue$$ = document.createElement("span")
        statValue$$.innerHTML = stat.valor

        divStat$$.appendChild(statName$$)
        divStat$$.appendChild(statValue$$)

        divStats$$.appendChild(divStat$$)
    }
    fichaPokemon$$.appendChild(pokemonName$$)
    fichaPokemon$$.appendChild(pokemonImg$$)
    fichaPokemon$$.appendChild(pokemonNum$$)
    fichaPokemon$$.appendChild(divStats$$)

    divFicha.appendChild(fichaPokemon$$)

}
//PREGUNTAR POR ESTA FUNCIÓN
const filterAbilities = (abilities) => {
    const arrayAbilities = []
    for (const ability of abilities) {
        for (const flavorText of ability.flavor_text_entries) {
            if(flavorText.language.name === "es" && !arrayAbilities.includes(flavorText.flavor_text)){
                arrayAbilities.push(flavorText.flavor_text)
            }
        }
    }
//console.log(arrayAbilities);
    // const spanishAbilities = abilities.filter((ability) => ability.flavor_text_entries.filter((flavorText) => flavorText.language.name === "es"))
    // console.log(spanishAbilities);
}
