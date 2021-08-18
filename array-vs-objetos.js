const string = 'es un string';
const number = 9;
const boolean = true;

const array1 = [0,1,2,3,4];
const array2 = new Array
const array3 = new Array(4)
const array4 = new Array('Hola','Chau')

const object1 = {};
const object2 = new Object;

//

const person = {
  isHuman: false,
  showName: function() {
    console.log(`Mi nombre es ${this.name}. ¿Soy humano? ${this.isHuman}`);
  }
};

const object3 = Object.create(person);
object3.name = 'Patricio'; // "name" no estaba antes, pero lo creamos
object3.isHuman = true; // propiedades heredadas pueden sobreescribirse

// console.log(array2)
// console.log(object3)

object3.showName()
// EN JS TODO ES UN OBJETO
// object

// Number.
// Boolean.

// Array busca por índice (NÚMERO) (algoritmos de ordenamiento - merge sort, bubble sort)
// Objeto busca por nombres de propiedades (STRING)