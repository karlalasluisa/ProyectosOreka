// Muestra una lista de números del 1 al 100.
// Si el número es divisible por 3, muestra "Fizz".
// Si el número es divisible por 5, muestra "Buzz".
// Si el número es divisible por 3 y 5, muestra "FizzBuzz".

for(let i=0;i<=100; i++){
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz")
    }
    else if(i%3==0){
        console.log("Fizz")
    }
    else if(i%5==0){
        console.log("BUzz")
    }
    else console.log(i);
}
