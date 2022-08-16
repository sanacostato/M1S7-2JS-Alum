console.log("Entro al main.js");
// Clases de JS
// class Perro {
//     constructor(nombre){
//         this.nombre = nombre;
//     }
//     ladrar(){
//         console.log (`${this.nombre} esta ladrando`)
//     }

//     sentar(){
//         console.log(this.nombre + " esta sentado" )
//     }
// }
// let perro_firulais = new Perro("firulais");// este seria el nombre de constructor 
// perro_firulais.ladrar(); // eso lo lleva arriba a ladrar e imprime eso 
// perro_firulais.sentar();
// console.log("----------------");
// let perro_dalmata = new Perro("dalmata");
// perro_dalmata.sentar();



// HERENCIA. quiero una pagina o sistema academico donde tenga guardados alumnos y profesores, deberia poder retomarlo desde la POO
// tendre, maestros y alumnos.
class Persona {
constructor (nombre, apellido, edad, genero, intereses){
    this.edad = edad;
    this.genero = genero;
    this.intereses = intereses;
    this.nombre_completo = {
        nombre,
        apellido
        };
    }
    saludo () {
        console.log(`Hola, me llamo ${this.nombre_completo.nombre} ${this.nombre_completo.apellido}`);
    }
    despedida(){
        console.log (`la persona ${this.nombre_completo.nombre} dice chao `);
    }
} 

class Maestro extends Persona {
    constructor(nombre, apellido, edad, genero, intereses, materia, grado){
        super(nombre, apellido, edad, genero, intereses); //los valores que tiene la clase superior en este caso persona, lama las propiedades de persona, los this de persona
        this.materia = materia;
        this.grado = grado;
    }
    muestraMateria(){
        console.log(`El maestro ${this.nombre_completo.nombre} esta dictando la materia ${this.materia} en el grado ${this.grado}`);
    }
    despedida(){
        console.log (`El maestro ${this.nombre_completo.nombre} dice chao `);
    }
}

let maestro = new Maestro("Jesus","Cardenas","29", "Masculino", ["Programacion", "Diseño", "Ajedrez"],"Artes oscuras", "5");
maestro.saludo(); // con esto sale en console.log
maestro.muestraMateria();
maestro.despedida(); 

let alumno = new Persona("Gerardo","Miranda","9", "Masculino", ["Futbol", "Golf", "Musica"]);
alumno.saludo();
alumno.despedida();
