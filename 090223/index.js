//try catch no está hecho para atender errores sintácticos, sino para errores de ejecución
console.log("primera linea");
try{
    //código susceptible a fallar

}catch(err){
    //código que se ejecutará cuando falle el código del try
    console.log("linea catch");
}
console.log("segunda linea");