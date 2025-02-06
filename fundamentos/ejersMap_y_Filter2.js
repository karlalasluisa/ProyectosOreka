// // Longitud de palabras:
// // Dado un array de palabras, usa map para obtener un nuevo array con la longitud de cada palabra.
// const palabras = ["sol", "mar", "montaña", "cielo", "nube"];

// const longitudPalabras = palabras.map(palabra => palabra.length);
// console.log(longitudPalabras);



// const personas = [{ nombre: "Ana" }, { nombre: "Luis" }, { nombre: "Carlos" }];
 
// const agregarEdad = (array) => {
//     let arrayAccesorio = [];
//     let arrayEdad = array.map((persona) => {
//         persona.edad = Math.floor(Math.random() * (50 - 20) + 20); 
//         arrayAccesorio.push(persona)});
//     console.log(arrayAccesorio);
// }
 
// agregarEdad(personas);

 const nombres = ["juan", "maria", "pedro", "luis"];

// const nombresMayus = nombres.map(nombre => nombre.toUpperCase());

const devolverLetraMayus =(array) =>{
  let nombre = [];
  let nombresMayus = [];

  for (let i = 0; i < array.length; i++) {
    nombre[0] = array[i].split("")[0].toUpperCase();;
    nombresMayus.push(nombre.join(""));
  }
  return nombresMayus
}

// console.log(devolverLetraMayus(nombres));


let mayoresA5= nombres.filter(nombre => nombre.length > 5)
// console.log(mayoresA5)

const personas = [
  { nombre: "Ana", edad: 15 },
  { nombre: "Luis", edad: 22 },
  { nombre: "Carlos", edad: 30 },
  { nombre: "Sofía", edad: 17 }
];

const mayoresDeEdad = personas.filter(persona => persona.edad >= 18);
// console.log(mayoresDeEdad);

const numeros = [10, 25, 30, 5, 100, 60];
const limite = 20;

const filtrarNumeros =(array,limite) => {
  return arrayFiltrado = array.filter(num => num > limite)
}
console.log(filtrarNumeros(numeros,limite))

const ordenarNombres =(array) => {
  const ordenados = array.map(persona => persona.nombre).sort();
  return ordenados
}
console.log(ordenarNombres(personas))