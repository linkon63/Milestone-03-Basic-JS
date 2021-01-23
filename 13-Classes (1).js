//array----
var num = [120,15,154,64,154,1548,45,12,14,15];
console.log("Define Array:"+num);

var position = num.indexOf(154);
console.log(position);

num[2]= 15;
console.log("Updating Array:"+num);

var outnumber = num[5];
console.log("Out Number from Array:" + outnumber);

//Push in array

console.log(num);
num.push(12,15,16);
console.log(num);

// length of array

console.log(num);
console.log(num.length);
num.push(12,15,16);
console.log(num);
console.log(num.length);

//13-3-Pop array delete array first element and add in first
let array = [12,15,13,16];
console.log(array);
array.unshift(1,2,3);
console.log(array);

let arrayTwo = [1,2,3,4,5,6,7,8];
arrayTwo.unshift(0);
arrayTwo.unshift(-1);
arrayTwo.unshift(-2);
console.log(arrayTwo);

arrayTwo.shift();
console.log(arrayTwo)

//13-4 array addd remove slice splish 
arrayTwo.shift();
console.log(arrayTwo)
let cutArray = arrayTwo.slice(2,5);
console.log(cutArray);
console.log("array before prntCut:"+array);
let prmntCutOfArray = array.splice(0,4);
console.log(array);

//13.5--While loop 
let num = 0;
 while(num <=15){
     console.log("NumberIs: "+num);
     num++;
 }
 //13-6-for Loop

let arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

for (var i = 0; i< arr.length ; i++){
    var element = arr[i];
    console.log("Array Number:"+i+"--"+ element);
}

//13-7 Switch
let num = 2;

switch(num){
    case 1:
    console.log("u are One");
    break;
    case 2: console.log("two");
    break;
    case 10:
    case 9: //multiline declaration
    case 8:
        console.log("nine,ten,eight");
        break;
    default:
        console.log("Nothing ");
        break;    
// 13-8-Function Call

function girlFriends(){
    let arr = ['Priya','Rimu','Sadia','Leana','Aisha','Ripa','Priyanka','Shila','NaJu','Akhi','Liza','etc'];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        console.log("I love you :" + element);
    }
}
console.log("See my Girlfriend Name:");
girlFriends();

//13-9 FUnction pararmeters:

function doubleIT(num){
    for (let i = 1; i < 15 ; i++) {
        var num = num * 10; 
        console.log(num);       
    }
    return num;
}   

var functn = doubleIT(10);
console.log(functn);
// Multiple parameters

function add(numOne,numTwo){
    result = numOne + numTwo ;
    return result;
}
var total = add(50,60);
console.log("Your Total Value of: " + total );
//13-10 Objects
var gfOne = { id :001, name:"Priya" , pain:"True", age: 17 }; //Obj-1
var gfTwo = {id: 002, name:"Priyanka", pain:"False", age:20};//Obj-2
var gfThree = {id: 002, name:"Aisha Era", pain:"Loading", age:18};//Obj-3

var gfPain = gfOne.pain; //Out method -1
var gfPainTwo = gfTwo["pain"]; //Out method -2
var loadingVar = "pain"; //Out method 3.1
var gfThree = gfThree[loadingVar];//Out method -3.2
console.log("You get:" + gfPain);
console.log("You get:" + gfPainTwo);
console.log("You get:" + gfThree);