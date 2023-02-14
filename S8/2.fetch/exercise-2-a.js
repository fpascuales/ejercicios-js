const input = document.querySelector('input')
const btn = document.querySelector('button')

btn.addEventListener('click', () => {
    const baseUrl = fetch(`https://api.nationalize.io?name=${input.value}`)
    console.log(baseUrl);
})