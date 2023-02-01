const movies = [{name: "Your Name", durationInMinutes: 130},{name: "Pesadilla antes de navidad", durationInMinutes: 225}, {name: "Origen", durationInMinutes: 165}, {name: "El señor de los anillos", durationInMinutes: 967}, {name: "Solo en casa", durationInMinutes: 214}, {name: "El jardin de las palabras", durationInMinutes: 40}];

const peliP = []
const peliM = []
const peliG = []
for (const peli of movies) {
    peli.durationInMinutes < 100 ? peliP.push(peli) : peli.durationInMinutes < 200 ? peliM.push(peli) : peliG.push(peli)
}
console.log("Peliculas pequeñas", peliP);
console.log("Peliculas medianas", peliM);
console.log("Peliculas grande", peliG);