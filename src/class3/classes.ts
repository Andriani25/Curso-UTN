interface PersonaType{
    nombre: string;
    edad: number;
    direccion: string;
    email: string;
}

class Persona implements PersonaType {

    nombre: string
    edad: number
    direccion: string;
    email: string;

    constructor(nombre: string, edad: number, direccion: string, email: string){
        this.nombre = nombre
        this.edad = edad
        this.direccion = direccion
        this.email = email
    }
}

const Jose = new Persona('Jose', 22, 'Country Los Pepinos', 'josetumonerito_22@gmail.com')


export const punto1 = () => {

const {nombre, edad, direccion, email} = Jose

    console.log(`¡Hola!, mi nombre es ${nombre}, tengo ${edad} años, vivo en el ${direccion}. Mi direccion de mail es ${email}. ¿Y vos?`)
}

/*

 - Implemente el uso de Typescript para poder reforzar el uso de interfaces, asegurandome que la clase Persona mantenga siempre la misma estructura. Luego de crear
 la clase hago el destructuring en la funcion llamad "punto1". Hice un archivo aparte de este punto por mantener el orden de los proyectos con el archivo de tipos separado

*/