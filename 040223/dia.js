export class Dia{
    constructor(dia, temp, hum, cielo){
        this.diaSemana = dia
        this.temperatura = temp
        this.humedad = hum
        this.estadoCielo = cielo
    }
    //Función que dependiendo de la humedad del día, nos salga un texto.
    //Si hum < 30 'humedad baja'
    //si 30 <= hum < 60 'humedad media'
    //si hum >= 60 'humedad alta'
    getHumedadStr(){
        let humStr = ''
        if(this.humedad < 30){
            humStr = "Baja"
        }
        else if(this.humedad >= 30 && this.humedad < 60){
            humStr = "Media"
        }
        else if(this.humedad >= 60){
            humStr = "Alta"
        }
        return humStr
    }
}