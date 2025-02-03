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
console.log(filtrarPorDecada(peliculas, "80s"));

 