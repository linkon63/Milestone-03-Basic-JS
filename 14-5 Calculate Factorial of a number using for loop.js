//14-5 Calculate Factorial of a number using for loop
function factValue(fact){
    let sum = 1;
    if(fact ==0){
        return sum;
    }else{
        for (let i = 1; i<=fact; i++){
            sum = sum * i;
           }return sum;
    }
}

var valueIs= factValue(10);
console.log(valueIs);
