const tiposVinos = ['tintos', 'blancos', 'rosados', 'espumosos'];
export async function cargarVinos() {
  const todosLosVinos = [];
  for (const tipo of tiposVinos) {
    const vinos = await fetch(
      `https://meteo-de-oscar.proxy.beeceptor.com/vinos/${tipo}`
    );

    const tipoVino = await vinos.json();
    const tipoVino30=tipoVino.slice(0,30)
    todosLosVinos.push(tipoVino30);
  }
  return todosLosVinos;
}


// export async function cargarVinos(){
//     const vinos=await fetch(
//         `https://meteo-de-oscar.proxy.beeceptor.com/vinos/tintos`
//       );
//     const objVinosTintos=await vinos.json()
//     const arraySeleccionVinos=objVinosTintos.slice(0,30)
//     return arraySeleccionVinos
// }

