//14-7 Calculate Factorial in a Recursive function

function factorial(n){
    if(n == 0){
        return 1;
    }else{
        return n * factorial(n-1);
    }
}
const factValue = factorial(10);
console.log(factValue);