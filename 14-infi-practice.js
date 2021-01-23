// function inchToFeet(inch){
//     var feet = inch/12;
//     return feet;
// }
// var own = inchToFeet(256);
// console.log("FirstOne",own);
// var arr = [125,126,145];

// var ownTow = inchToFeet(arr[0]);
// console.log(ownTow);

///14-4 check whether a year is a Leap Year or not

// function isLeapYear(year){
//     const remainder = year % 4;
//     if (remainder == 0 && year%100 != 0 || year&400 == 0){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(isLeapYear(2020));

// function factValue(fact){
//     let sum = 1;
//     if(fact ==0){
//         return sum;
//     }else{
//         for (let i = 1; i<=fact; i++){
//             sum = sum * i;
//            }return sum;
//     }
// }

// var valueIs= factValue(10);
// console.log(valueIs);

//14-6 Calculate Factorial of a number using a while loop

// function factValue(n){
//     let factSum = 1; 
//     if(n == 0){
//         return factSum;
//     }else{
//         let i = 1;
//         while(i<=n){
//             factSum = factSum*i;
//             i++;
//         }return factSum;
//     }
// }
// const factNumberIs = factValue(6);
// console.log(factNumberIs);

// //14-7 Calculate Factorial in a Recursive function

// function factorial(n){
//     if(n == 0){
//         return 1;
//     }else{
//         return n * factorial(n-1);
//     }
// }
// const factValue = factorial(10);
// console.log(factValue);

//14-8 Create a Fibonacci Series using a for loop

// function fibonacciSeries(factNumber){
//     let fiboArr = [0,1];
//     for (let i = 2; i<=factNumber; i++){
//         fiboArr[i] = fiboArr[i-1] + [i-2];//*** */ there i did mistake;--****
//     }return fiboArr;
// }
// let resultIs = fibonacciSeries(10);
// console.log(resultIs);

//14-8 Create a Fibonacci Series using a for loop
// function fibonacci(n){
//     var arr = [0,1];
//     for(var i=2; i<=n; i++){
//         arr[i] = arr[i-1] + arr[i-2]; //*** */ there i did mistake;--**Second arry i didn't write**
//     }
//     return arr;
// }
// var result = fibonacci(12);
// console.log(result);

//14-9 Fibonacci Element in a Recursive Way
// function fibonacci(n){
//     if( n ==0){
//         return 0;
//     }if(n == 1){
//         return 1;
//     }else{
//         return fibonacci(n - 1) + fibonacci(n - 2);
//     }
// }
// let result = fibonacci(10);
// console.log(result);

//14-10 Create Fibonacci series in a recursive way

function fibonacci(n){
    if(n == 0){
        return [0];
    }else if(n == 1){
        return [0,1];
    }else{
        var fibo = fibonacci(n-1) ; // i did mistake here;;;;
        var nextElement = fibo[n - 1] + fibo[n - 2];
        fibo.push(nextElement);
        return fibo;
    }
}
var result = fibonacci(5);
console.log(result);