
const factorial=(numero)=>{
    let resultado=1;

    for(let i=numero; i>1; i--){
        resultado *= i;
    }
    return resultado;
}
console.log(factorial(3));