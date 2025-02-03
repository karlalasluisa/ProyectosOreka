// 1. Números Primos
// Escribe un programa que muestre todos los números primos entre 1 y 100.
// Usa if para verificar si un número es primo y for para iterar.

const verPrimosHasta100=()=>{
    let primos="";
    let esPrimo=false;
    for(let numero=0; numero <=100; numero++){

        if( numero %1 === 0){//si es divisible para 1
            
            for(let i = 2; i< numero; i++){

                if(numero%i == 0){ // si tiene múltiplos
                    esPrimo=false;
                    break;
                }else{
                    esPrimo=true;
                }
            }
            if(esPrimo) primos += numero +" ";

        }
    }
    return primos
}

console.log(verPrimosHasta100());


// 2. Sumar números pares
// Calcula la suma de todos los números pares entre 1 y 100.

const sumarNumPares=()=>{
    let suma=0;
    for(let i=0; i<=100; i++){
        if(i%2==0){
            suma=suma+i;
        }
    }
    return suma;
}

console.log(sumarNumPares());

// 3. Tabla de multiplicar
// Dado un número n, genera y muestra la tabla de multiplicar de ese número hasta 10.
 
const mostrarTablaMultipc=(numero)=>{
    let tabla="";
    for(let i=1; i<=10; i++){
       
        tabla += i +" x "+ numero+" = " +  i*numero +"\n";
        
    }
    return tabla;
}
console.log(mostrarTablaMultipc(3))