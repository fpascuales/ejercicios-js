const goodProducts = [];
const badProducts = [];
const movies = [{name: 'Gorra de rodilla', sellCount: 10},{name: 'Pantalón de pana', sellCount: 302},{name: 'Reloj de papel albal', sellCount: 23},{name: 'Inpar de zapatos', sellCount: 6}];

for (const peli of movies) {
    peli.sellCount < 20 ? badProducts.push(peli) : goodProducts.push(peli)
}
console.log("Peliculas con más de 20 ventas", goodProducts);
console.log("Peliculas con menos de 20 ventas", badProducts);
