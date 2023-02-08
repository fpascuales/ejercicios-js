export async function cargarVinos(){
    const vinos=await fetch(
        `https://meteo-de-oscar.proxy.beeceptor.com/vinos/tintos`
      );
    const objVinosTintos=await vinos.json()
    const arraySeleccionVinos=objVinosTintos.slice(0,30)
    return arraySeleccionVinos
}

