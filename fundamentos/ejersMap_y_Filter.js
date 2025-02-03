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