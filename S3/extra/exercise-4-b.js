const countries = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];
const body = document.querySelector("body")
body.innerHTML += `<ul id="lista"></ul>`
for (const country of countries) {
  const ul = document.querySelector("#lista")
  ul.innerHTML += `<li id="country"><div><h4>${country.title}</h4><img src="${country.imgUrl}"></div></li>`
}
const btnRemove = document.querySelector("button")
btnRemove.addEventListener("click", () => {
  const countryRemove = document.querySelector("#lista li:last-child")
  countryRemove.remove()
});
