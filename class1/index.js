// Punto 1

class Animal {
    constructor(animal, age) {
if(typeof animal !== "string" || typeof age !== 'number'){
 return console.log("Animal must be a string, and age must be a number!")
}

this.animal = animal
this.age = age

    }

    hablar(){

        if(this.animal === undefined || this.age === undefined){
            return console.log("Animal or age are not asigned propperly!")
        }

console.log(`Hola, soy ${this.animal} y tengo ${this.age} años.`)
    }
}

class Perro extends Animal {
    ladrido(){
        console.log('Guau!')
    }
}

const miPerro = new Perro('Juancho', 10)

miPerro.hablar()
miPerro.ladrido()

// Punto 2

class Persona {
    constructor(nombre, edad, profesion){

        if(typeof nombre !== 'string' || typeof edad !== 'number' || typeof profesion !== 'string'){
            return console.log('Nombre, edad, or profesion have bad types!')
        }

        this.nombre = nombre
        this.edad = edad
        this.profesion = profesion
    }
}

class Estudiante extends Persona {

    constructor(nombre, edad, profesion, grado){
        super(nombre, edad, profesion)

        this.grado = grado
    }

    estudiar(){
        console.log(`Mi nombre es ${this.nombre}, tengo ${this.edad} años, soy ${this.profesion} y estoy estudiando para obtener el grado ${this.grado}`)
    }

}

const miEstudiante = new Estudiante('Jaimito', 12, 'estudiante', 6)

miEstudiante.estudiar()

class Profesor extends Persona {
    constructor(nombre, edad, profesion, especialidad){

        super(nombre, edad, profesion)

        this.especialidad = especialidad

    }

    enseñar(){
        console.log(`Mi nombre es ${this.nombre}, tengo ${this.edad} años, soy ${this.profesion} y estoy enseñando ${this.especialidad}`)
    }
}

const miProfesor = new Profesor('Lucas', 39, 'profesor', 'Historia')

miProfesor.enseñar()

// Punto 3

/*

 A mi punto de vista, realizar composiciones con herencias de clases es útil cuando es necesario crear múltiples objetos con una estructura ya predefinida de datos.
  Por ejemplo:

   Necesitamos crear una base de datos de usuarios, y ya tenemos definido la plantilla que tendrán los mismos, en este caso sería algo como esto:

   usuario: {
   
   userName: 'string',
   email: 'string',
   password: 'string',
   etc...
   }

    En vez de crear un objeto literal para cada uno de los nuevos usuarios, defeniríamos la clase Usuario para poder crearlos con la plantilla anteriormente establecida,
    y a raíz de esa plantilla se puede extender los distintos tipos de usuarios, como por ejemplo "administrador", o "usuario vip", que además de tener las propiedades de
    la clase Usuario tendrán ya sea métodos o propiedades adicionales. Esto sirve para un código mucho más escalable, limpio, legible y óptimo.

*/