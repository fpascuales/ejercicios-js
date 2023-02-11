//Herencia

class Rectangulo{
    constructor(ancho, alto){
        this.ancho = ancho
        this.alto = alto
    }
    getArea(){
        return this.ancho * this.alto
    }
}

class Cuadrado extends Rectangulo{
    constructor(lado){
        super(lado, lado)
        //super hace que llamemos al constructor del padre y ejecuta como las líneas de abajo comentadas
        // this.ancho = lado
        // this.lado = lado
    }
}
const rect = new Rectangulo(2, 4)
console.log(rect.getArea());

const cuadrado = new Cuadrado(2)
console.log(cuadrado.getArea());

class Animal{
    constructor(nombre){
        this.nombre = nombre
    }
    saludar(){
        console.log("Hola soy un animal");
    }
}
class Gato extends Animal{
    constructor(nombre){
        super(nombre)
    }
    saludar(){
        console.log("Hola soy un gato");
    }
}
const gato = new Gato()
gato.saludar()