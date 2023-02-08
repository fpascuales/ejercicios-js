export async function getPokemonsFromApi(i){
    const pokemonCazado = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    const pokemonObj = await pokemonCazado.json()
    return pokemonObj
}