
//Crear una clase tarea, que el constructor id, texto tarea, y si está hecha

class Tarea {
    constructor(id, tarea, hecha){
        this.id = id
        this.tarea = tarea
        this.hecha = hecha
    }
}
const tarea1 = new Tarea(0, "Arreglar el ejercicio TODO List", false)
//console.log(tarea1);

class Rectangle {
  constructor(height, width, color) {
    this.altura = height;
    this.anchura = width;
    this.color = color;
  }
  getArea() {
    return this.altura * this.anchura;
  }
  esMismoColor(otroRectangulo) {
    return this.color === otroRectangulo.color;
  }
  /**     * crear un metodo de clase setColor, que reciba un color     * y se lo cambie al objeto que está invocando     * el método     */
  setColor(color){
    this.color = color
  }
}
const rectangle1 = new Rectangle(10, 20, "blue")
//console.log(rectangle1);
rectangle1.setColor("orange")
//console.log(rectangle1);
