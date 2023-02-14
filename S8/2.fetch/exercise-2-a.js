const input = document.querySelector('input')
const btn = document.querySelector('button')

btn.addEventListener('click', async () => {
    const resultado = await fetch(`https://api.nationalize.io?name=${input.value}`)
    const obj = await resultado.json()
    console.log(obj)
})