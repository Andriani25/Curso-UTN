import { punto1 } from "./classes";

punto1()

let allData

const punto2y3 = async (index: number) => {

    await fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => allData = data)

    const mostrarTarea = (index: number) => {

        const {id, title, completed} = allData![index]

        console.log(`Tarea: ${title}, ID: ${id}, Completada: ${completed}`)
    } 

    mostrarTarea(index)

    }

punto2y3(5)


/*

Aproveché que ambos puntos necesitaban realizar el fech de datos y acceder al array de data, por lo que hice los dos puntos juntos

*/



