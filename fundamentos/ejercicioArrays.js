// Dado un array con la siguiente estructura: Array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; 
// Devolver un sólo array con los números mayores dentro de los anteriores.

const devolverMayores=(array)=>{
    let arrayMayores=[];
    //console.log(array);

    for(let i=0; i< array.length; i++){
       // console.log(array[i]);

        let numeroMayor= 0;
        for(let j=0; j< array[i].length; j++){
            //console.log(array[i][j]);

            if(numeroMayor<array[i][j] ){
                numeroMayor=array[i][j];
            }
        }
        arrayMayores.push(numeroMayor);
    }

    return arrayMayores;
}


let array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
 
console.log(devolverMayores(array));
