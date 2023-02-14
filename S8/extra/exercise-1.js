const getCharacters = async () => {
    // const arrayCharacters = []
    const result = await fetch('https://breakingbadapi.com/api/characters')
    const obj = result.json()
    console.log(obj);
}