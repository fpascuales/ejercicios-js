const body = document.querySelector('body')
body.innerHTML += `<button id="btnToClick">Click</button>`
const btnToClick = document.querySelector('#btnToClick')
btnToClick.addEventListener('click',(event)=>{
    console.log(event);
})