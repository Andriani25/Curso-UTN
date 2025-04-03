// Tare número 1

let color: string = 'rojo'

color = 2

const readColor = (colorVar: string) => {

    if(colorVar === "rojo" || colorVar === "verde" || colorVar ==="azul"){

      return  console.log(`¡EL color ${colorVar} está permitido!`)
    }

    console.log(`El color ${colorVar} no está permitido..`)

}

readColor('verde')

readColor('amarillo')

//

// Tarea número 2 

 let edad: number = 21

 edad = 'azul'

 const readEdad = (numberVar: number) => {

    if(numberVar === 21 || numberVar === 18 || numberVar === 30){

        return console.log(`¡La edad ${numberVar} es aceptada!`)

    }

    console.log(`La edad ${numberVar} no es válida..`)

 }

 readEdad(21)

 readEdad(15)

//

//Tarea número 3

 const readEdadandNumber = (numberVar: number, colorVar: string) => {

 if((colorVar === "rojo" || colorVar === "verde" || colorVar ==="azul") && (numberVar === 21 || numberVar === 18 || numberVar === 30)){
    return console.log(`¡La edad ${numberVar} y el color ${colorVar} están permitidos!`)
 }

  console.log(`La edad ${numberVar} y el color ${colorVar} no están permitidos..`)

 }

 readEdadandNumber(21, 'rojo')

 readEdadandNumber(13,'violeta')

//