const personas = [   { nombre: 'Ana', edad: 30 },   
                    { nombre: 'Carlos', edad: 25 },   
                    { nombre: 'Sofía', edad: 35 },   
                    { nombre: 'David', edad: 28 } ];

//un array con la mayor y menor edad

const devolverMenoryMayor=(array)=>{

    let arrayMenMay=[];
    console.log(array);

    let edadMay=0;
    let edadMen=36;

    array.forEach(persona => {
       if(edadMay < persona.edad){
        edadMay = persona.edad;
        console.log(edadMay);

       }else if(edadMen > persona.edad){
        edadMen = persona.edad;
        console.log(edadMen);

       }
    });
    arrayMenMay.push(edadMay, edadMen);
    return arrayMenMay;
}

console.log(devolverMenoryMayor(personas))

//

// const edades = personas.map(persona => persona.edad);
// console.log(edades);
// const mayorEdad = Math.max(...edades);
// console.log(mayorEdad);
// const menorEdad = Math.min(...edades);
// console.log(menorEdad);
 
// const resultado = [menorEdad, mayorEdad];
 
// console.log(resultado);

