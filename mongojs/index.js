const {MongoClient} = require('mongodb');

const alumnosInsertar = [
    {
    nombre: "Laura",
    apellido: "Cano",
    edad: 27    
    },
    {
    nombre: "Pedro",
    apellido: "Moreno",
    edad: 35    
    },
    {nombre: "María",
    apellido: "Ortíz",
    edad: 42    
    },
]


const alumnosEliminar = ["Alumno 1", "Alumno 2"]

const asignaturas = ["Filosofía", "Física", "Química", "Matemáticas", "Historia", "Lengua", "Inglés"]

class Asignatura {
    constructor(nombre){
        this.nombre = nombre
    }
} 

const main = async () => {
    const uri = "mongodb://localhost";
    const client = new MongoClient(uri);
    await client.connect();
    // const dbs = await client.db().admin().listDatabases() //siempre que trabajemos con mongo o cualquier BBDD debemos tener en cuenta el await
    // console.log(dbs);

    // const colecciones = await client.db("universidad").listCollections().toArray()
    // console.log(colecciones);

    // const alumnos = await client.db("universidad").collection("alumnos").find().toArray()
    // for (const alumno of alumnos) {
    //     if(alumno.edad > 40){
    //         console.log(`El alumno: ${alumno.nombre}, cumple la condición`);
    //     }
    // }
    
    // for (const alumno of alumnosInsertar) {
    //    await client.db("universidad").collection("alumnos").insertOne(alumno)
    // }

    // for (const nombre of alumnosEliminar) {
    //     await client.db("universidad").collection("alumnos").deleteMany({nombre: nombre})
    // }

    //Recorrer array de asignaturas y crear en la colección de cada una de ellas
    // for (const asignatura of asignaturas) {
    //     const asignaturaDb = await client.db("universidad").collection("asignaturas").findOne({nombre: asignatura})
    //     if(!asignaturaDb){
    //         await client.db("universidad").collection("asignaturas").insertOne(new Asignatura(asignatura))
    //     }
    // }

    //Actualizar la edad de los alumnos sumándole un año a todos
    const alumnos = await client.db("universidad").collection("alumnos").find().toArray()
    for (const alumno of alumnos) {
        alumno.edad++
        await client.db("universidad").collection("alumnos").updateOne({_id: alumno._id}, {$set:{edad: alumno.edad}})
    }
}

main()