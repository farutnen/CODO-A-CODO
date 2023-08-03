//REACT es una librería
//en algunos lugares lo llaman framework
//lo que desarrollo facebook para agilizar su aplicacion
//nos da un conjunto de funciones para agilizar nuestro sitio

//React.Component()

//clase base de react, se usa cuando queremos crear componentes personalizados
//un framework es un conjunto de herramientas que engloba muchas funcionalidades
//Angular es un Framework
//REACT DEPENDE DE MUCHAS LIBRERIAS EXTERNAS
//ES DECIR QUE ES UNA PLATAFORMA COMPLETA Y CON UN
//ENORME ECOSISTEMA DE HERRAMIENTAS PARA EL DESARROLlO
//Next
//JS es una plataforma con tecnologias modernas y muy potentes
//la idea del JS es hacer aplicaciones web dinamicas
//con el tiempo las cosas cambian pero la forma en como trabajamos no
//siempre nos queda igual
//las apps son mas complejas y requieren de diferentes tecnicas
//para poder funcionar correctamente
//el problema principal es que si tenemos que aprender todas estas nuevas tecnicas
//no podemos esperar a tener todo listo para empezar a programar
//porque cada vez hay mas frameworks y tecnicas disponibles
//como por ejemplo:
//Angular, Vue o React
//Angular tiene una gran desventaja:
//su sintaxis es más verbosa (mas código)
//Vue tiene una gran ventaja:
//se puede usar sin problemas en cualquier proyecto
//ya sea SPA o SSR
//React tiene una gran ventaja:
//tiene menos dependencias externas
//otra ventaja de React es que es mantenido por Facebook
//vue tambien esta bien documentado

var nombre = "Nico";
//variable global
if (true) {
  var nombre = "Gonzalez";
}

console.log(nombre);
//no usar VAR
//usar CONST
//sinó
//usar LET

let apellido = "sanchez";

//el siguiente es un SCOPE
if (true) {
  let apellido = "garcía";

  console.log("Apellido", apellido); //imprime GARCÍA
}
console.log(apellido);
//el siguiente console log tira
//error porque ya existe una variable llamada APPELLIDO
//en este caso dentro del if{}
//var= global
//let= local

//cual es la diferencia entre una función y una función con flechas?

// import React from "react";

// const intro = (props: Props) => {
//     return <div>intro</div>;
// };
// el siguiente es una función de JavaScript
// function saludo() {
//     alert("hola");
// }
//
//el siguiente es una funcion arrow function
const hola = () => {
    alert("HOLA");
};
//el siguiente es una clase
class Persona {
    constructor() {}
    getNombre() {
        this._nombre = "Juan";
    }
    set nombre(nuevoValor) {
        this._nombre = nuevoValor;
    }
}
export default Persona;
import Persona from "./persona";
import { Props } from "./Props";
var personita = new Persona();
personita.getNombre();
personita.setNombre("<NAME>");
console.log(`El nombre de la persona es ${personita.nombre}`);
//el siguiente es un objeto literal
let miObjeto = {
    apellidos: "García",
    edad: 25,
    direccion: {
        calle: "Avda",
        numero: 1034,
    },
};
console.log(`${miObjeto["apellidos"]} tiene ${miObjeto["edad"]} años`);
delete miObjeto[direccion];
for (let i in miObjeto) {
    if (!isNaN(+i)) {
        continue;
    } else break;
}
Object.keys(miObjeto).forEach((key) =>
    console.log("la clave " + key + "tiene el valor" + miObjeto[key])
);

//el siguiente es un array
