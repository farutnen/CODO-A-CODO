function suma(a, b){
    return a +b;
};

//----------------------------------------------------------------
// JSON - Javascript Object Notation

/**
 * {
 * "clave" : "valor",
 * clave1 : "valor1",
 * 
 * }
 */

const obj = {
    clave: "valor",
    clave1: "valor1",
    fn: () => {}, //puede crearse funciones dentro
}
// JSON es un formato de intercambio de datos 
//que permite la comunicación entre sistemas.
// es un estandar de la industria
//es un string
// con un punto podemos acceder a lAS propiedades


//parsearlo es transformarlo
//en objeto js
//console.log("objeto JS");
const persona = {
    clave: "valor",
    clave1: "valor1",
    saludar: () =>{
        console.log(`Hola mi nombre es ${this.nombre} `); // backsticks `` `` ALT+96 ``
    } 
}; //objeto literal


console.log(persona.saludar());

//coincide en sintaxis con los objetos literales de JS
//pero no son lo mismo
//porque se pueden modificar sus valores y atributos

//JSON.stringify() -> convierte un objeto a JSON string
// JSON.parse() -> convierte un JSON a objeto


//un stringify() se usa mayormente para clonar objetos
// una de ellas es structuredClone()


//destucturing
//es una forma de extraer valores de un objeto o array
// y asignarlos a variables

const luciano = {
    nombre:"Luciano",
    ciudad:"Bariloche",
};// el siguiente const lo que hace es copiar el objeto para no pisarlo

//destructuring por posición
const {ciudad,}=luciano;

const arr = ["nico", "Perez", "Bariloche"];
const [pepe, Grillo] = arr
console.log(Grillo);


//spread operator
//se puede usar para copiar nuevos arrays, objectos, etc
//ES CONSTANTE EL VALOR PERO NO SE GUARDÓ

//default parameters
//es una forma de asignar 


//.map

//.filter

//.find

//.reduce


//LOS OBJETOS DE JAVASCRIPT SE LLAMAN POR REFERENCIAS
