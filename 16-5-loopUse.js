function sumNumbers(number1,number2,number3){
    let sum = number1 + number2 + number3;
    return sum;
}
// let outPut = sumNumbers(5,5,6);
// console.log("Result is Normal :", outPut);

function arraySum(numbers){
    let sum = numbers[0] + numbers[1] + numbers[2];
    return sum;
}
// let outPut = arraySum([5,6,5])
// console.log("Result is Normal :", outPut);

function infiArraySum(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        sum = sum + numbers[i];
    }return sum;
}
// let outPut = infiArraySum([5,5,5,55,5,6]);
// console.log("Result is Normal :", outPut);
