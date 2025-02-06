//sintaxis
let newArray = array.filter(callback(element, index, array));
// array es el array sobre el que se aplica el método.
// callback es la función que se ejecuta para cada elemento del array.
// element es el elemento actual del array que se está procesando.
// index es el índice del elemento actual del array que se está procesando.
// array es el array sobre el que se aplica el método (el mismo que el primer argumento).

// ej1
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Creamos una función callback que devuelve true si el número es par
const isEven = (number) => number % 2 === 0;

// Aplicamos el método .filter() al array de números usando la función callback
let evenNumbers = numbers.filter(isEven);

// Mostramos el resultado por consola
console.log(evenNumbers); // [2, 4, 6, 8]


// ej1: Filtrar objetos por una propiedad
let people = [
  { name: "Ana", age: 25 },
  { name: "Beto", age: 17 },
  { name: "Carlos", age: 19 },
  { name: "Diana", age: 15 },
];

// Creamos una función callback que devuelve true si la persona es mayor de edad
const isAdult = (person) => person.age >= 18;

// Aplicamos el método .filter() al array de personas usando la función callback
let adults = people.filter(isAdult);

// Mostramos el resultado por consola
console.log(adults); // [{ name: "Ana", age: 25 }, { name: "Carlos", age: 19 }]

//ej3: Filtrar elementos que coinciden con una expresión regular

let emails = [
  "ana@gmail.com",
  "beto@yahoo.com",
  "carlos@hotmail.com",
  "diana@gmail.com",
];

// Creamos una expresión regular que coincide con el dominio "@gmail.com"
let regex = /@gmail\.com$/;

// Creamos una función callback que devuelve true si el correo electrónico coincide con la expresión regular
const isGmail = (email) => regex.test(email);

// Aplicamos el método .filter() al array de correos electrónicos usando la función callback
let gmails = emails.filter(isGmail);

// Mostramos el resultado por consola
console.log(gmails); // ["ana@gmail.com", "diana@gmail.com"]


//ej4:Filtrar elementos que cumplen una condición numérica

let grades = [4.5, 6.7, 3.2, 8.9, 5.4, 7.3, 4.8, 6.1];

//función que devuelve true si la calificación es aprobada
const isPassed = (grade) => grade >= 5;

let passedGrades = grades.filter(isPassed);

console.log(passedGrades); // [6.7, 8.9, 5.4, 7.3, 6.1]


//ej5:Filtrar elementos que son únicos
let numbers2 = [1, 2, 3, 4, 5, 3, 2, 6, 7, 8, 9, 8];

// Creamos una función callback que devuelve true si el número es unico
const isUnique=(element, index, array)=>array.indexOf(element)===index;

let uniqueNumbers = numbers2.filter(isUnique);

console.log(uniqueNumbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

//ej6: Filtrar elementos que son falsos

let values = [0, 1, "", "Hola", null, true, undefined, false, NaN, 2];

// Creamos una función callback que devuelve el mismo elemento
function isFalsy(element) {
  return !element;
}

let falsyValues = values.filter(isFalsy);

console.log(falsyValues); // [0, "", null, undefined, false, NaN]

//ej7:: Filtrar elementos que pertenecen a otro array
let array1 = [1, 2, 3, 4, 5];
let array2 = [3, 4, 5, 6, 7];

function isInArray2(element) {
  return array2.includes(element);
}

let intersection = array1.filter(isInArray2);

console.log(intersection); // [3, 4, 5]
//----------------------------------------------------------------------------------------------------------------------
// Claro! Los métodos map y filter son herramientas poderosas en JavaScript para manipular arreglos. Aquí te presento algunos ejercicios para practicar:
// Ejercicios con map
// 1. Duplicar todos los números de un arreglo:

 
const numeros = [1, 2, 3, 4, 5];
const numerosDoblados = numeros.map(numero => numero * 2);
console.log(numerosDoblados); // Output: [2, 4, 6, 8, 10]



// 2. Convertir un arreglo de números a una cadena con cada número separado por un guión:

const numeros2 = [10, 20, 30];
const cadena = numeros.map(numero => numero.toString()).join('-');
console.log(cadena); 
// Output: "10-20-30"

// 3. Crear un nuevo arreglo con los nombres en mayúsculas a partir de un arreglo de objetos:

const personas = [
  { nombre: 'ana', edad: 30 },
  { nombre: 'carlos', edad: 25 }
];
const nombresMayusculas = personas.map(persona => persona.nombre.toUpperCase());
console.log(nombresMayusculas); // Output: ['ANA', 'CARLOS']


// Ejercicios con filter
// 1. Filtrar los números pares de un arreglo:

const numeros3= [1, 2, 3, 4, 5];
const numerosPares = numeros3.filter(numero => numero % 2 === 0);
console.log(numerosPares); // Output: [2, 4]

// 2. Filtrar las personas mayores de 30 años:

const personas2 = [
  { nombre: 'ana', edad: 30 },
  { nombre: 'carlos', edad: 25 },
  { nombre: 'sofía', edad: 35 }
];
const mayoresDe30 = personas2.filter(persona => persona.edad > 30);

console.log(mayoresDe30); // Output: [{ nombre: 'sofía', edad: 35 }]

// 3. Filtrar las palabras que empiezan con la letra 'a':

const palabras = ['ana', 'bola', 'casa', 'auto'];
const palabrasConA = palabras.filter(palabra => palabra.startsWith('a'));
console.log(palabrasConA); // Output: ['ana', 'auto']


// Ejercicios combinados
// 1. Crear un nuevo arreglo con los nombres de los productos que cuestan más de 10 euros:

const productos = [
  { nombre: 'manzana', precio: 1 },
  { nombre: 'banana', precio: 2 },
  { nombre: 'televisión', precio: 1000 }
];
const productosCaros = productos
  .filter(producto => producto.precio > 10)
  .map(producto => producto.nombre);

console.log(productosCaros); // Output: ['televisión']

// 2. Calcular la suma de todos los números positivos de un arreglo:

const numeros4 = [1, -2, 3, -4, 5];
const sumaPositivos = numeros4
  .filter(numero => numero > 0)
  .reduce((suma, numero) => suma + numero, 0);
  
console.log(sumaPositivos); // Output: 9