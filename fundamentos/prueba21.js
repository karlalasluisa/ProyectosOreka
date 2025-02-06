/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 26:
Optimizar el gasto en mi gasolinera favorita.
 
Tiene dos opciones:
 
- Gasolina individual: Cuesta 10 euros por cada llenado.
- Tarjeta de socio: Cuesta 90 euros anuales pero cada vez que llenas
te cuesta 8.2 euros el tanque pagas sólo el 78% del precio del llenado.
 
Cada vez que llenas el tanque, se paga el 78% del precio
del llenado que pagaste la última vez hasta llegar a un descuento maximo
del 50%. Acumula el descuento (0.78 ** 3).
 
Hacer una función que, al pasarle las veces que voy a llenar el tanque,
me diga si vale la pena comprar la tarjeta de socio o no.
 
Ejemplos:
deboSerSocio(15);
 
Devuelve:
Como usuario casual te sale a: 150        
Como socio te sale a: 154.68487999999994
No te sale a cuenta ser socio ser socio  
 
*/
const deboSerSocio = (numVeces) =>{
 
    let sinSerSocio = numVeces * 10;
    let serSocio = false;
    let siendoSocio = 0;
 
    for(let i = 1; i <= numVeces; i++){
        //1º if
        if( i === 1){
            siendoSocio += (10 *0.78);
        }
 
        //2º if
        else if( i === 2){
            siendoSocio += (10 *(0.78**2));
        }
 
        else{
            siendoSocio += (10 * (0.78**3))
        }
        //Else que es para el resto (0.78 ** 3)
    }
 
    serSocio = siendoSocio < sinSerSocio;
 
    console.log(`Como usario casual te sale a: ${sinSerSocio}`);
    console.log(`Como socio te sale a: ${siendoSocio}`);
    console.log(`${serSocio === false ? 'No te sale a cuenta ser socio' : 'Te sale a cuenta ser socio.'}`);
}
 
//deboSerSocio(15);
 
// Operador ternario
 
// let x = 5;
// let mayorEdad = x >= 18 ? true : false;
 /*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 27:
Crea una función a la cual le pasemos una frase y una palabra,
y busque si la palabra existe en la frase. Indistinto de mayusculas y minusculas.
 
Ejemplos:
buscarPalabra('Hola como estas', 'Hola')  // Devuelve: true
*/
 
const buscarPalabra=(strFrase, strPalabra)=>{
    let arrayFrase = strFrase.split(" ");
    console.log(arrayFrase);


    for(let i=0; i<arrayFrase.length ; i++){
        if(strPalabra.toLowerCase()== arrayFrase[i].toLowerCase()){
            return true;
        }
    }

}

//console.log(buscarPalabra('Hola como estas', 'Hola') )

/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 28:
Crea una función que me diga si un número es armstrong o no.
 
Un número es armstrong si la suma de los cubos de sus dígitos es igual al número.
Por ejemplo, el número 371 es armstrong porque 3^3 + 7^3 + 1^3 = 371.
 
Si la cifra es de 4 digitos, se eleva a 4, y si es de 5 a 5.
 
Ejemplos:
esArmstrong(371)  // Devuelve: true
*/
const esArmstrong = (numero) => {
    let cantidadNumeros = numero.toString().split('').length;
    let numerosCalculo = numero.toString().split('');
    let numeroCalculado = 0;
 
    for(let i = 0; i < cantidadNumeros; i ++){
        numeroCalculado += (eval(numerosCalculo[i] ** cantidadNumeros))
    }
 
    return numeroCalculado === numero;
}
 
//console.log(esArmstrong(123456));
//console.log(esArmstrong(371));
/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 29:
Dado un array de objetos de peliculas de los años 80 y 90.
 
Crea dos funciones:
- Una que las filtre por género
- y otra que las filtre por la decada en este formato 80s o 90s
 
Array de objetos a utilizar:

Ejemplos:
filtrarPorGenero(peliculas, "accion")
filtrarPorDecada(peliculas, "80s")
*/
const peliculas = [
    { titulo: "Terminator", genero: "accion", anioLanzamiento: 1984 },
    { titulo: "Alien", genero: "ciencia ficción", anioLanzamiento: 1979 },
    { titulo: "Die Hard", genero: "accion", anioLanzamiento: 1988 },
    { titulo: "Predator", genero: "accion", anioLanzamiento: 1987 },
    { titulo: "Total Recall", genero: "ciencia ficción", anioLanzamiento: 1990 },
    { titulo: "RoboCop", genero: "ciencia ficción", anioLanzamiento: 1987 },
    { titulo: "Starship Troopers", genero: "ciencia ficción", anioLanzamiento: 1997 },
    { titulo: "The Fifth Element", genero: "ciencia ficción", anioLanzamiento: 1997 },
    { titulo: "Armageddon", genero: "accion", anioLanzamiento: 1998 },
    { titulo: "Deep Impact", genero: "ciencia ficción", anioLanzamiento: 1998 }
  ];
 
const filtrarPorGenero=(peliculas, genero)=>{
    let peliculasDeGen = [];

    for(let i=0; i < peliculas.length; i++){
        if(peliculas[i].genero == genero){
            peliculasDeGen.push(peliculas[i]);
        }
    }
    return peliculasDeGen;
}
    
const filtrarPorDecada=(peliculas, decada)=>{
    
    if (decada=="80s"){
        return peliculas.filter(pelicula => pelicula.anioLanzamiento < 1990 && pelicula.anioLanzamiento >1980);
    }else{
        return peliculas.filter(pelicula => pelicula.anioLanzamiento > 1990 && pelicula.anioLanzamiento <2000);
    }
}

//console.log(filtrarPorGenero(peliculas, "accion"));
//console.log(filtrarPorDecada(peliculas, "80s"));

/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 33:
Crea una función a la cual le pase un string y lo convierta
a un listado en un objeto que cuente el número de elementos.
 
Las palabras no deben incluir guiones ni guiones bajos.
 
Ejemplos:
contarElementos("pc -ordenador _computadora consola- ps5 theLastOfUs ordenador");
 
Devuelve:
{ pc: 1, ordenador: 2, computadora: 1, consola: 1, ps5: 1, theLastOfUs: 1 }
*/

 const contarElementos =(string)=>{
    let objeto = {};
    let arrayObjetos = string.split(" ");

    for(let i=0; i< arrayObjetos.length; i++){
        let palabraLimpia;
        palabraLimpia = arrayObjetos[i].replace("-", " ");
        palabraLimpia = palabraLimpia.replace("_", " ");
        palabraLimpia = palabraLimpia.trim();
        arrayObjetos[i]=palabraLimpia;

        let contador=0;

        for(let j=0; j< arrayObjetos.length; j++){
            if(arrayObjetos[i]== arrayObjetos[j]){
                contador++;
            }
        }
        objeto[arrayObjetos[i]]= contador;
    }
    return objeto
 }
 
//console.log(contarElementos("pc -ordenador _computadora consola- ps5 theLastOfUs ordenador"));
/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 13:
Crea una funcion que calcule el area de un cuadrado, un rectangulo o un triangulo
 
Ejemplos:
calcularAreaPoligono({ tipo: 'triangulo', base: 6, altura: 9 });
 
Devuelve: 27
 
*/


const calcularAreaPoligono = (poligono) =>{

    const base= poligono.base;
    const altura=poligono.altura;

    switch(poligono.tipo){
        case 'triangulo':
            console.log( base*altura/2);
            break;
        case 'rectangulo':
            console.log( base*altura);
            break;
        case 'cuadrado':
            console.log( base*altura);
            break;
        default:
            console.log("Tipo incorrecto")
            break;
    }
}
//calcularAreaPoligono({ tipo: 'triangulo', base: 6, altura: 9 });
/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 41:
Crea una función que invierta los números de un número entero.
 
Ejemplos:
invertirEntero(123)   // 321
invertirEntero(-123)  // -321
 
*/
 
const invertirEntero = (numero) => {
    let esPositivo= numero >= 0 ? true: false; 

    let strNum= Math.abs(numero).toString()
    let inverso="";

    for(let i=(strNum.length-1) ; i>=0; i--){
        inverso += strNum[i];
    }
    if( esPositivo==false){
        inverso=inverso*(-1)
    }
    console.log(parseInt(inverso))
}
const invertirEntero2 = (num) => {
    let esNegativo = num >= 0 ? false: true;
    return esNegativo ? parseInt(Math.abs(num).toString().split("").reverse().join("")) * -1 : volteadoNum;
}
// invertirEntero(123)   // 321
// invertirEntero(-123)  // -321
/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 43:
Dada una colección de letras:
[
   ['A','B','C','D'],
   ['Z','V','K','S'],
   ['F','G','O','E']
]
 
Crea una función que me diga si la palabra que le paso como parametro
se puede formar con las letras de la colección
 
Ejemplos:
puedeFormarPalabra('PERRO', coleccion)  // false
puedeFormarPalabra('CASO', coleccion)   // true
 
*/
const coleccion = [
    ['A','B','C','D'],
    ['Z','V','K','S'],
    ['F','G','O','E']
 ]
  
const puedeFormarPalabra = (palabra, coleccion)=>{
    let arryPalabra=palabra.split("");
    
    let count=0;

    for(let i=0;i<coleccion.length; i++){
        for( let j=0; j<coleccion[i].length;j++){
            if(arryPalabra.includes(coleccion[i][j])){
                count++;
            }
        }
    }
    
    console.log( count === arryPalabra.length ? true: false);
}

const puedeFormarPalabra2 = (string, array) => {
    let puedeFormar = false;
 
    let contador = 0;
    let palabraLength = string.split("").length;
    let arrayLetras = string.split("");
 
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array[i].length; j++){
            if(arrayLetras.includes(array[i][j])){
                contador++;
            }
        }
    }
 
    return contador === palabraLength ? console.log(true) : console.log(false);
}
// puedeFormarPalabra('PERRO', coleccion)  // false
// puedeFormarPalabra('CASO', coleccion)   // true
/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 45:
Dado un array de números, elimina los números duplicados.
 
Ejemplos:
eliminarDuplicados([1, 1, 2, 2, 3, 4, 5, 5, 5, 6])
 
// Devuelve:
[ 1, 2, 3, 4, 5, 6 ]
*/

const eliminarDuplicados = (array) =>{
    let arrayLimpio = [];

    for(let i=0; i<array.length; i++){
        if(!arrayLimpio.includes(array[i])){
            arrayLimpio.push(array[i]);
        }
    }
    return arrayLimpio

}
//console.log(eliminarDuplicados([1, 1, 2, 2, 3, 4, 5, 5, 5, 6]))
/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 46:
Crea una función a la que le pasemos una nota y nos de una calificación:
 
0-3: Deficiente
3-5: Insuficiente
5-6: Suficiente
6-7: Bien
7-9: Notable
9-10: Sobresaliente
 
Ejemplos:
calificar(8.2) // Notable
*/

const calificar = (nota) => {
    if(typeof nota != "number") return "Introduce una nota numérica";
    

    const evaluacion =
    (nota < 3 && nota >=0 ) ?  "Deficiente":
    (nota < 5 && nota >=3) ? "Insuficiente":
    (nota < 6 && nota >=5) ?"Suficiente":
    (nota < 7 && nota >=6) ?"Bien":
    ( nota <9 && nota >=7) ? "Notable":
    ( nota <=10 && nota >=9) ? "Sobresaliente" : "Nota incorrecta";
    return evaluacion;

}
// Notable
console.log(calificar(8.2) )
console.log(calificar(9.0) )
console.log(calificar("dfg") )
console.log(calificar(-9.0) )