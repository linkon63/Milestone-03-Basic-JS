function fiboItarative(number){
    let fibo = [1,1];
    for(let i = 2; i <= number; i++){
        let fibonext = fibo[ i - 1] + fibo[ i - 2];
        fibo.push(fibonext);
    }return fibo;
}
// let op = fiboItarative(10);
// console.log(op);

function fiboRecursive(number){
    //Stoping revcursive function
    if(number == 0){
        return [1];
    }if(number == 1){
        return [1,1]
    }
    //Recursive Calling From here
    let fibo = fiboRecursive(number - 1) ;
    let fiboNext = fibo[number - 1] + fibo[number - 2];
    fibo.push(fiboNext);
    return fibo;
}
let op = fiboRecursive(10);
console.log(op);
